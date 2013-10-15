codebrowser.view.FooterView = Backbone.View.extend({

    id: 'footer-container',
    template: Handlebars.templates.Footer,
    events: {
        'click [data-action="save"]': 'updateApiUrl'
    },

    /* Render */

    render: function () {

        // Template
        var output = this.template({ apiUrl: config.api.main.root });

        this.$el.html(output);
        return this;

    },

    updateApiUrl: function () {

        var apiUrl = $('#apiUrl').val();
        localStorage.removeItem('backboneCache');
        config.api.main.root = apiUrl;
        localStorage.setItem('config.apiUrl', apiUrl);
        $('#settings-modal').modal('toggle');

    }
});
