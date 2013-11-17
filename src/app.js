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
    controller: {},
    router: {},

    initialize: function () {

        // Oops! Catch all global unhandled errors
        window.onerror = function (error) {

            var errorView = new codebrowser.view.ErrorView({ model: { class: 'alert-error', message: 'Oops! ' + error } });
            codebrowser.controller.ViewController.push(errorView, true);
        }

        var backendChecked = localStorage.getItem('backendChecked');
        if (!backendChecked) {

            this.checkBackendCapabilities();
        }

        $('#navigation-container').html((this.navigation = new codebrowser.view.NavigationView()).render().el);

        // Initialise footer
        $('#footer-container').html((this.footer = new codebrowser.view.FooterView()).render().el);

        // Initialise routers
        codebrowser.app.rootRouter = new codebrowser.router.RootRouter();
        codebrowser.app.studentRouter = new codebrowser.router.StudentRouter();
        codebrowser.app.studentGroupRouter = new codebrowser.router.StudentGroupRouter();
        codebrowser.app.courseRouter = new codebrowser.router.CourseRouter();
        codebrowser.app.exerciseRouter = new codebrowser.router.ExerciseRouter();
        codebrowser.app.snapshotRouter = new codebrowser.router.SnapshotRouter();
        codebrowser.app.tagRouter = new codebrowser.router.TagRouter();
        codebrowser.app.selectRouter = new codebrowser.router.SelectRouter();
        codebrowser.app.commentRouter = new codebrowser.router.CommentRouter();

        // History
        Backbone.history.start();
    },

    checkBackendCapabilities: function () {

        var apiRoot = config.api.main.root;

        $.ajax({
            
            url: apiRoot+'tagnames',
            async: false,
            
            success: function (response, status) {
                
                if (status === 'success') {

                    localStorage.setItem('config.tagnames', true);
                }
            },

        });

        $.ajax({
            
            url: apiRoot+'tagcategories',
            async: false,
            
            success: function (response, status) {
                
                if (status === 'success') {

                    localStorage.setItem('config.tagcategories', true);
                }
            },

        });

        $.ajax({
            
            url: apiRoot+'comments?page=0&size=1',
            async: false,
            
            success: function (response, status) {
                
                if (status === 'success') {

                    localStorage.setItem('config.comments', true);
                }
            },

        });

        $.ajax({
            
            url: apiRoot+'studentgroups',
            async: false,
            
            success: function (response, status) {
                
                if (status === 'success') {

                    localStorage.setItem('config.studentgroups', true);
                }
            },

        });

        localStorage.setItem('backendChecked', true);
    }
}
