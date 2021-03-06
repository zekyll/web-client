codebrowser.view.SnapshotsTimelineView = Backbone.View.extend({

    id: 'snapshots-timeline-container',
    className: 'visualization-container',

    template: {

        bottomContainer: Handlebars.templates.SnapshotsTimelineBottomContainer

    },

    isActive: Utils.getLocalStorageValue('showTimeline', true) === 'true',

    /* Absolute width */
    width: 0,

    /* X coordinates of snapshot elements */
    snapshotPositions: [],

    /* Pointer */
    pointerSetOffsetX: 0,

    scroll: null,

    dragging: false,

    /* Initialise */

    initialize: function (options) {



        this.parentView = options.parentView;

        // Hide view until needed
        this.$el.hide();

        /* jshint newcap: false */

        this.paper = Raphael(this.el, '100%', 81);

        /* jshint newcap: true */

        // Bottom container
        this.bottomContainer = $('<div>');
        this.$el.append(this.bottomContainer);
    },

    toggle: function() {

        this.isActive = !this.isActive;

        // Store state
        localStorage.setItem('showTimeline', this.isActive);

        this.$el.slideToggle();

    },

    getViewX: function () {

        var x = 0;

        // Current x of view
        if (this.paper._viewBox) {
            x = this.paper._viewBox[0];
        }

        return x;
    },

    isVisible: function (x) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        return (x >= viewX && x <= viewX + viewWidth);
    },

    snapshotWeight: function (index) {

        var difference = this.differences[index];

        var weight = 0.8;
        var percentage = Math.round((difference.total / difference.lines) * 100);

        if (percentage === 0) {
            return weight;
        }

        // Scale between 1 and 2
        weight = 2 * percentage / 100 + 1;

        // Round to nearest .5
        weight = Math.round(weight * 2) / 2;

        return Math.min(2, weight);
    },

    distanceWeight: function (index, min, max) {

        var weight = 0;

        // First snapshot has a static weight
        if (index === 0) {
            return 1;
        }

        // Duration between snapshots
        var duration = this.collection.getDuration(index, index - 1);

        // Scale between 1 and 6
        weight = 5 * (duration - min) / (max - min) + 1;

        // Round up to 2 decimals
        weight = Math.round(weight * 100) / 100;

        return Math.min(6, weight);
    },

    setViewBox: function (x) {

        var viewWidth = $(this.paper.canvas).width();

        // Set view box
        this.paper.setViewBox(x, 0, viewWidth, this.paper.height, false);
    },

    centerOn: function (x) {

        var viewWidth = $(this.paper.canvas).width();
        var center = x - (viewWidth / 2);

        // Don't go under 0
        if (center < 0) {

            this.setViewBox(0);

            return;
        }

        // Don't go over absolute width
        if (center > (this.width - viewWidth)) {

            this.setViewBox(this.width - viewWidth);

            return;
        }

        // Center
        this.setViewBox(center);
    },

    focus: function () {

        // Center of the current snapshot element
        var cx = this.snapshotPositions[this.currentSnapshotIndex];

        // Make previous snapshot element visible
        if (this.currentSnapshotIndex !== 0) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex - 1])) {
                this.centerOn(cx);
            }
        }

        // Make next snapshot element visible
        if (this.currentSnapshotIndex !== this.snapshotPositions.length - 1) {

            if (!this.isVisible(this.snapshotPositions[this.currentSnapshotIndex + 1])) {
                this.centerOn(cx);
            }
        }
    },

    moveTimeline: function (dx) {

        var viewX = this.getViewX();
        var viewWidth = $(this.paper.canvas).width();

        // Can't move dx to left
        if ((viewX + dx) < 0 && dx < 0) {

            // Move by remainder, but don't go under 0
            this.setViewBox(Math.max(0, 0 - viewX));

            return;
        }

        // Can't move dx to right
        if ((viewX + viewWidth + dx) >= this.width && dx > 0) {

            var remainder = this.width - viewX - viewWidth;

            // Move by remainder
            this.setViewBox(viewX + remainder);

            return;
        }

        // Move viewbox
        this.setViewBox(viewX + dx);

        // Move pointer set
        this.pointerSetOffsetX += dx;
        this.pointerSet.transform('...t ' + dx + ', 0');
    },

    /* Render */

    renderDuration: function (previousSnapshot, snapshot, x, y, radius, distance) {

        if (!previousSnapshot) {
            return;
        }

        // Duration label
        var duration = codebrowser.helper.Duration.calculate(snapshot.get('snapshotTime'),
                                                             previousSnapshot.get('snapshotTime'), true);

        // Duration element
        var durationElement = this.paper.text(x - radius - distance / 2, y + 30, duration);
        $(durationElement.node).attr('class', 'duration');
    },

    renderTimeline: function (leftOffset, y, x) {

        // Timeline element
        var timeline = this.paper.path('M ' + leftOffset + ' ' + y + ' L ' + x + ' ' + y);
        $(timeline.node).attr('class', 'timeline');

        // Move back on z-axis
        timeline.toBack();
    },

    renderSnapshotIndex: function (index, x) {

        // Snapshot index element
        var snapshotIndex = this.paper.text(x, 5, index + 1);

        $(snapshotIndex.node).attr('class', 'snapshot-index');
    },

    renderSnapshotWeight: function (index, x, y) {

        var difference = this.differences[index];
        var percentage = (difference.total / difference.lines).toFixed(2);

        // Snapshot has no changes
        if (percentage === '0.00') {
            return;
        }

        if (percentage !== '1.00') {
            percentage = percentage.slice(1);
        } else {
            percentage = percentage.slice(0,1);
        }

        // Snapshot weight element
        var snapshotWeightElement = this.paper.text(x, y, percentage);

        // Adjust font size by weight
        var snapshotWeight = this.snapshotWeight(index);
        var fontSize = 11;

        if (snapshotWeight > 1) {
            fontSize *= snapshotWeight;
        }

        snapshotWeightElement.attr({ 'font-size': fontSize });

        $(snapshotWeightElement.node).attr('class', 'snapshot-weight');
    },

    renderSnapshot: function (snapshot, index, x, y, radius) {

        // Render index of the snapshot
        this.renderSnapshotIndex(index, x);

        // Snapshot area element
        var snapshotArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(snapshotArea.node).attr('class', 'area');

        // Snapshot element
        // When test data is available, a pie chart is drawn. Otherwise we draw a circle.
        var snapshotElement;
        if (snapshot.attributes.percentageOfTestsPassing == null) {
            snapshotElement = this.paper.circle(x, y, radius);
        }
        else {
            snapshotElement = this.paper.pieChart(x, y, radius, [snapshot.attributes.percentageOfTestsPassing, 100 - snapshot.attributes.percentageOfTestsPassing]);
        }

        //If snapshot does not compile, css class is added
        if(snapshot.attributes.compiles) {
            $(snapshotElement.node).attr('class', 'snapshot');
        }
        else {
            $(snapshotElement.node).attr('class', 'snapshot not-compiles');
        }

        // Render weight for the snapshot
        this.renderSnapshotWeight(index, x, y);

        // Snapshot click area
        var snapshotClickArea = this.paper.circle(x, y, radius);
        $(snapshotClickArea.node).attr('class', 'area snapshot');

        // Tooltip
        $(snapshotClickArea.node).attr({

            'data-toggle': 'tooltip',
            'title': moment(new Date(snapshot.get('snapshotTime'))).format('D.M.YYYY HH.mm'),
            'data-container': 'body'

        });

        // Set models for snapshot and snapshot area elements
        var file = snapshot.get('files').findWhere({ name: this.filename });

        snapshotArea.data('snapshot', snapshot);
        snapshotArea.data('file', file);

        snapshotClickArea.data('snapshot', snapshot);
        snapshotClickArea.data('file', file);

        var self = this;

        snapshotClickArea.click(function () {

            var snapshot = this.data('snapshot');
            var file = this.data('file');

            // Destroy tooltip
            $(snapshotClickArea.node).tooltip('destroy');

            // Navigate to snapshot and file
            self.parentView.navigate(snapshot, file, { course: this.courseRoute });
        });

        snapshotClickArea.mouseover(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1.1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1.1' }, 150);

            // Show tooltip
            if (!self.scroll) {
                $(snapshotClickArea.node).tooltip('show');
            }
        });

        snapshotClickArea.mouseout(function () {

            // Animate snapshot click area
            this.animate({ transform: 'S 1' }, 150);

            // Animate snapshot element
            snapshotElement.animate({ transform: 'S 1' }, 150);

            // Hide tooltip
            $(snapshotClickArea.node).tooltip('hide');
        });

        return snapshotElement;
    },

    renderPointer: function (x, radius) {

        // Pointer set
        this.pointerSet = this.paper.set();

        var width = 7;

        var pointerX = x - width / 2;
        var pointerY = this.paper.height;

        var pointerLineX = x;
        var pointerLineY = pointerY - width / 2;

        // Pointer line element
        var pointerLine = this.paper.path('M' + pointerLineX + ' ' + pointerLineY + ', L' + pointerLineX + ' ' + 0);
        $(pointerLine.node).attr('class', 'pointer-line');

        pointerLine.toBack();

        this.pointerSet.push(pointerLine);

        // Pointer element
        var pointer = this.paper.path('M' +
                                      pointerX +
                                      ' ' +
                                      pointerY +
                                      ', L' +
                                      (pointerX + width / 2) +
                                      ' ' +
                                      (pointerY - width) +
                                      ', ' +
                                      (pointerX + width) +
                                      ' ' +
                                      pointerY +
                                      'Z');

        $(pointer.node).attr('class', 'pointer');

        this.pointerSet.push(pointer);

        // Pointer area element
        var pointerArea = this.paper.rect(x - radius, 0, radius * 2, this.paper.height);
        $(pointerArea.node).attr('class', 'area pointer');

        this.pointerSet.push(pointerArea);

        // Bind drag and drag over
        this.pointerSet.drag(this.dragMove, this.dragStart, this.dragEnd, this, this, this)
                       .onDragOver($.proxy(this.dragOver, this));
    },

    render: function () {

        // Limit minimum to 1 minute and maximum to 5 minutes
        var min = Math.min(60000, this.collection.getMinDuration());
        var max = Math.min(300000, this.collection.getMaxDuration());

        // Clear paper
        this.paper.clear();

        // Center point
        var y = this.paper.height / 2 + 3;

        var leftOffset = 0;
        var rightOffset = 0;
        var x = 0;

        var self = this;

        this.snapshotPositions = [];

        this.collection.each(function (snapshot, index) {

            var distanceWeight = self.distanceWeight(index, min, max);
            var snapshotWeight = self.snapshotWeight(index);

            // Weight by duration between snapshots
            var distance = 45 * distanceWeight;

            // Weight by amount of differences between snapshots
            var radius = 12 * snapshotWeight;

            x += (radius * 2);

            if (index === 0) {

                // Left offset
                leftOffset = x;

            } else {

                // Move right by distance
                x += distance;
            }

            if (index === self.collection.length - 1) {

                // Right offset
                rightOffset = radius;
            }

            var previousSnapshot = self.collection.at(index - 1);

            // Render duration between snapshots
            self.renderDuration(previousSnapshot, snapshot, x, y, radius, distance);

            // Render snapshot
            self.renderSnapshot(snapshot, index, x, y, radius);
            self.snapshotPositions.push(x);

            // Current snapshot
            if (index === self.currentSnapshotIndex) {

                // Render pointer on current snapshot
                self.renderPointer(x, radius);
            }
        });

        // Render timeline
        this.renderTimeline(leftOffset, y, x);

        // Absolute width
        this.width = leftOffset + x + rightOffset;

        // Focus
        this.focus();

        // View attributes
        var attributes = {

            first: this.collection.first().toJSON(),
            last: this.collection.last().toJSON()

        }

        // Template for bottom container
        var bottomContainerOutput = this.template.bottomContainer(attributes);

        // Update bottom container
        this.bottomContainer.html(bottomContainerOutput, bottomContainerOutput);
    },

    /* Update */

    update: function (collection, currentSnapshotIndex, filename, courseRoute) {

        this.collection = collection;
        this.courseRoute = courseRoute;

        // No need to show timeline
        if (this.collection.length === 1) {
            return;
        }

        // Show view if necessary
        this.$el.show();

        // Start spinner
        this.startSpinner();

        var self = this;

        // Calculate differences between snapshots before continuing
        this.collection.getDifferences(function (differences) {

            self.differences = differences;

            self.currentSnapshotIndex = currentSnapshotIndex;
            self.filename = filename;

            // Stop spinner
            self.stopSpinner();

            // Render if user is not dragging
            if (!self.dragging) {
                self.render();
            }
        });
    },

    /* Events */

    didResize: function () {

        // Relocate spinner if necessary
        if (this.spinner) {
            this.stopSpinner();
            this.startSpinner();
        }

        // Rendering finished
        if (this.snapshotPositions.length === this.collection.length) {

            // Center of the current snapshot element
            var cx = this.snapshotPositions[this.currentSnapshotIndex];

            this.render();
            this.centerOn(cx);
        }
    },

    dragStart: function () {

        this.dragging = true;
    },

    dragEnd: function () {

        this.dragging = false;
        this.pointerSetOffsetX = 0;

        this.stopScroll();
        this.render();
    },

    dragMove: function (dx, dy, x) {

        // Move pointer set
        this.pointerSet.transform('T ' + (this.pointerSetOffsetX + dx) + ', 0');

        var viewWidth = $(this.paper.canvas).width();
        var canvasOffset = $(this.paper.canvas).offset();

        var leftOffset = canvasOffset.left;
        var rightOffset = canvasOffset.left + viewWidth;

        // Move timeline to left
        if (x < leftOffset + 50) {

            this.startScroll(-5);

            return;
        }

        // Move timeline to right
        if (x > rightOffset - 50) {

            this.startScroll(5);

            return;
        }

        this.stopScroll();
    },

    dragOver: function (element) {

        // Snapshot element
        if (element.data('snapshot')) {
            this.parentView.navigate(element.data('snapshot'), element.data('file'), { course: this.courseRoute });
        }
    },

    /* Actions */

    startSpinner: function () {

        if (this.spinner) {
            return;
        }

        this.spinner = new Spinner({

            lines:      13,
            length:     4,
            width:      4,
            radius:     10,
            corners:    1,
            rotate:     0,
            direction:  1,
            color:      'rgba(0, 0, 0, 0.4)',
            speed:      0.8,
            trail:      60,
            shadow:     false,
            hwaccel:    false,
            className: 'spinner',
            zIndex:     2e9,
            top:        'auto',
            left:       'auto'

        }).spin(this.$el.get(0));
    },

    stopSpinner: function () {

        if (this.spinner) {
            this.spinner.stop();
            this.spinner = null;
        }
    },

    startScroll: function (dx) {

        if (this.scroll) {
            return;
        }

        var self = this;

        // Scroll dx 60 times a second
        this.scroll = setInterval(function () {

            self.moveTimeline(dx);

        }, 1000 / 60);
    },

    stopScroll: function () {

        if (this.scroll) {
            clearInterval(this.scroll);
            this.scroll = false;
        }
    }
});
