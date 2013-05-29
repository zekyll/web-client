codebrowser.collections.FileCollection = Backbone.Collection.extend({

    model: codebrowser.models.File,

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
