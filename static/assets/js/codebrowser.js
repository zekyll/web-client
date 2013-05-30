/* exported config */

/* Global configuration */

var config = {

    /* API */

    apiRoot: 'http://t-avihavai.users.cs.helsinki.fi/cb-back/app/',

    /* Ace editor */

    editor: {

        configure: function (editor) {

            // Editor
            editor.setReadOnly(true);
            editor.setPrintMarginColumn(false);
            editor.setDisplayIndentGuides(false);
            editor.getSession().setFoldStyle('markbeginend');

            // Text
            editor.setTheme('ace/theme/crimson_editor');
            editor.setFontSize(12);
            editor.getSession().setTabSize(4);
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setWrapLimitRange(120, 120);
        }
    }
}
;

/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    helper: {},
    model: {},
    collection: {},
    view: {},
    router: {},

    initialize: function () {

        codebrowser.app.base = new codebrowser.router.BaseRouter();
        codebrowser.app.snapshot = new codebrowser.router.SnapshotRouter();

        Backbone.history.start();
    }
}
;

codebrowser.helper.AceModeMapper = {

    mode: {

        'java':'java',
        'js':'javascript',
        'py':'python'
    },

    getMode: function(fileName) {

        var fileType = fileName.split('.');
        fileType = fileType[fileType.length-1];

        return 'ace/mode/' + this.mode[fileType];
    }
}
;

codebrowser.model.Course = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'courses',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'exercises',
            relatedModel: 'codebrowser.model.Exercise',
            collectionType: 'codebrowser.collection.ExerciseCollection',
            reverseRelation: {

                key: 'course'

            }
        }
    ]
});
;

/* 
 * An exercise is resolved through a course.
 */

codebrowser.model.Exercise = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return this.get('course').urlRoot + '/' + this.get('course').id + '/exercises';
    }
});
;

/* 
 * A file is resolved through a snapshot.
 */

codebrowser.model.File = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot +
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

    fetchContent: function (callback) {

        var request = $.get(this.urlRoot() + '/' + this.id + '/content', function (data) {

            callback(data, null);
        });

        request.fail(function () {

            callback(null, request);
        });
    }
});
;

/* 
 * Fetch a snapshot by passing a studentId, courseId and exerciseId as attributes for the model:
 * var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
 */

codebrowser.model.Snapshot = Backbone.RelationalModel.extend({

    urlRoot: function () {

        if (!this.get('studentId') || !this.get('courseId') || !this.get('exerciseId')) {
            throw new Error('Attributes studentId, courseId and exerciseId are required to fetch a snapshot.');
        }

        return config.apiRoot +
               'students/' +
               this.get('studentId') +
               '/courses/' +
               this.get('courseId') +
               '/exercises/' +
               this.get('exerciseId') +
               '/snapshots';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'files',
            relatedModel: 'codebrowser.model.File',
            collectionType: 'codebrowser.collection.FileCollection',
            reverseRelation: {

                key: 'snapshot'

            }
        }
    ],

    convertTime: function () {

        if (this.get('snapshotTime')) {

            var snapshotTime = this.get('snapshotTime');
            this.set('snapshotTime', new Date(snapshotTime).toLocaleString());
        }
    }
});
;

codebrowser.model.Student = Backbone.RelationalModel.extend({

    urlRoot: config.apiRoot + 'students',

    relations: [

        {
            type: Backbone.HasMany,
            key: 'courses',
            relatedModel: 'codebrowser.model.Course',
            collectionType: 'codebrowser.collection.CourseCollection'
        }
    ]
});
;

codebrowser.collection.CourseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Course,
    url: config.apiRoot + 'courses'

});
;

/* 
 * ExerciseCollection is resolved through a course.
 */

codebrowser.collection.ExerciseCollection = Backbone.Collection.extend({

    model: codebrowser.model.Exercise,

    url: function () {

        return this.course.urlRoot + '/' + this.course.id + '/exercises';
    }
});
;

/*
 * FileCollection is resolved through a snapshot.
 */

codebrowser.collection.FileCollection = Backbone.Collection.extend({

    model: codebrowser.model.File,

    url: function () {

        return config.apiRoot +
               'students/' +
               this.snapshot.get('studentId') +
               '/courses/' +
               this.snapshot.get('courseId') +
               '/exercises/' +
               this.snapshot.get('exerciseId') +
               '/snapshots/' +
               this.snapshot.id +
               '/files';
    }
});
;

/* 
 * Fetch snapshots by passing a studentId, courseId and exerciseId as options for the collection:
 * var snapshots = new codebrowser.collection.SnapshotCollection(null, { studentId: 1, courseId: 2, exerciseId: 3 });
 */

codebrowser.collection.SnapshotCollection = Backbone.Collection.extend({

    model: codebrowser.model.Snapshot,

    url: function () {

        if (!this.studentId || !this.courseId || !this.exerciseId) {
            throw new Error('Options studentId, courseId and exerciseId are required to fetch snapshots.');
        }

        return config.apiRoot +
               'students/' +
               this.studentId +
               '/courses/' +
               this.courseId +
               '/exercises/' +
               this.exerciseId +
               '/snapshots';
    },

    initialize: function (models, options) {

        if (options) {
            this.studentId = options.studentId;
            this.courseId = options.courseId;
            this.exerciseId = options.exerciseId;
        }
    }
});
;

codebrowser.collection.StudentCollection = Backbone.Collection.extend({

    model: codebrowser.model.Student,
    url: config.apiRoot + 'students'

});
;

codebrowser.view.EditorView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

        var self = this;

        // Fetch file
        this.model.fetchContent(function(data) {

            var fileName = self.model.get('name');
            var syntaxMode = codebrowser.helper.AceModeMapper.getMode(fileName);
            self.setContent(data, syntaxMode);
        });

        var template = Mustache.render($('#editor-template').html(), this.model.toJSON());
        $(this.el).html(template);

        // Create editor
        this.editor = ace.edit('editor');

        // Configure editor
        config.editor.configure(this.editor);
    },

    setContent: function (content, mode) {

        this.editor.setValue(content);
        this.editor.navigateFileStart();

        // Set syntax mode
        this.editor.getSession().setMode(mode);
    }
});
;

codebrowser.view.SnapshotView = Backbone.View.extend({

    initialize: function () {

        this.model = new codebrowser.model.Snapshot();
        this.render();
    },

    events: {

        'click #prevButton': 'previous',
        'click #nextButton': 'next'
    },

    setModel: function (model) {

        this.model = model;
        this.model.convertTime();
        this.configURLs();
        this.render();
    },

    previous: function (eventInformation) {

        var index = this.collection.indexOf(this.model);
        var prevModel = this.collection.at(index-1);

        this.navigate(prevModel.id);
        eventInformation.preventDefault();
    },

    next: function (eventInformation) {

        var index = this.collection.indexOf(this.model);
        var nextModel = this.collection.at(index+1);

        this.navigate(nextModel.id);
        eventInformation.preventDefault();
    },

    navigate: function (id) {

        codebrowser.app.snapshot.navigate('#/students/' +
                                          this.collection.studentId +
                                          '/courses/' +
                                          this.collection.courseId +
                                          '/exercises/' +
                                          this.collection.exerciseId +
                                          '/snapshots/' +
                                          id);
    },

    render: function () {

        var template = Mustache.render($('#snapshot-template').html(), this.model.toJSON());
        $(this.el).html(template);
    },

    configURLs: function () {

        for (var i=0; i < this.model.get('files').length; ++i) {
            var file = this.model.get('files').at(i);
            file.set('url', '#/students/' +
                            this.collection.studentId +
                            '/courses/' +
                            this.collection.courseId +
                            '/exercises/' +
                            this.collection.exerciseId +
                            '/snapshots/' +
                            this.model.id +
                            '/files/' +
                            file.get('id'));
        }
    }
});
;

codebrowser.router.BaseRouter = Backbone.Router.extend({

    routes: {

        '*notFound': 'catch'

    },

    catch: function () {

        $('#container').empty();
        console.log('Catched!');
    }
});
;

codebrowser.router.SnapshotRouter = Backbone.Router.extend({

    routes: {

        'students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:id': 'read'

    },

    initialize: function () {

        this.snapshotView = new codebrowser.view.SnapshotView({ el: $('#container') });
    },

    read: function (studentId, courseId, exerciseId, id) {

        var snapshotCollection = new codebrowser.collection.SnapshotCollection(null, { studentId: studentId, courseId: courseId, exerciseId: exerciseId });
        this.snapshotView.collection = snapshotCollection;

        var self = this;

        // Fetch snapshot collection
        snapshotCollection.fetch({

            success: function () {

                var snapshot = snapshotCollection.get(id);
                self.snapshotView.setModel(snapshot);

                new codebrowser.view.EditorView({ el: $('#view'), model: snapshot.get('files').at(0) });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
