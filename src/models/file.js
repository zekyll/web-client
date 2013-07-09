/*
 * A file is resolved through a snapshot.
 */

codebrowser.model.File = Backbone.RelationalModel.extend({

    content: '',

    urlRoot: function () {

        return config.api.main.root +
               'students/' +
               this.get('snapshot').get('studentId') +
               '/courses/' +
               this.get('snapshot').get('courseId') +
               '/exercises/' +
               this.get('snapshot').get('exerciseId') +
               '/snapshots/' +
               this.get('snapshot').id +
               '/files';
    },

    lines: function () {

        return this.content.split('\n').length;
    },

    getContent: function () {

        return this.content;
    },

    /* Callback parameters (content, [error]) are the received data and possible error, respectively. */

    fetchContent: function (callback) {

        // Return content
        if (this.content.length !== 0) {

            callback(this.getContent(), null);

            return;
        }

        var self = this;

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (content) {

            self.content = content;

            callback(self.getContent(), null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
