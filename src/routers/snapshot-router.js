codebrowser.routers.SnapshotRouter = Backbone.Router.extend({

    initialize: function () {

        this.snapshotCollection = new codebrowser.collections.SnapshotCollection();
        this.snapshotCollection.fetch();
    },

    routes: {

        'snapshots/:id': 'read'

    },

    read: function (id) {

        var snapshot = this.snapshotCollection.get(id);
//        var snapshot = codebrowser.models.Snapshot.findOrCreate({ id: id });

        // Fetch snapshot
        snapshot.fetch({

            success: function () {

                console.log('Received snapshot from backend...');
                console.log(snapshot);

                var editorView = new codebrowser.views.EditorView({ el: $('#container') });

                // Fetch first file associated with the snapshot
                snapshot.get('files').at(0).fetchContent(function (data) {

                    editorView.setContent(data);

                    console.log('Done.');
                });
            },

            error: function () {

                console.log('Request failed.');
            }
        });
    }
});
