codebrowser.models.SnapshotFile = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.apiRoot + 'students/1/courses/2/exercises/3/snapshots/' + this.get('snapshot').id + '/files';
    },

    fetchFile: function (callback) {

        $.get(this.urlRoot() + '/' + this.id, function (data) {

            callback(data);
        }, 'text');
    }

});
