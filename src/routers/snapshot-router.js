codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    initialize: function () {

        this.snapshotCollection = new codebrowser.collections.SnapshotCollection();
        this.snapshotCollection.fetch({async:false});
    },

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = this.snapshotCollection.get(id);

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                var fileType = snapshot.get('files').at(0).get('name'); // file extension for syntax mode
                fileType = fileType.split('.')[1];

                var editorView = new codebrowser.views.EditorView({ el: $('#container') });

                // Fetch first file associated with the snapshot
                snapshot.get('files').at(0).fetchContent(function (data) {

                    editorView.setContent(data, fileType);

                    console.log('Done.');
                });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
