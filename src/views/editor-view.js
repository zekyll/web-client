codebrowser.views.EditorView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

        var template = $('#editor-template').html();
        $(this.el).html(template);

        // Create editor
        this.editor = ace.edit('editor');

        // Configure editor
        config.editor.configure(this.editor);
    },

    setContent: function (content, fileType) {

        this.editor.setValue(content);
        this.editor.navigateFileStart();

        // Set syntax mode
        var syntax = codebrowser.helpers.syntaxMapper.map(fileType);
        this.editor.getSession().setMode('ace/mode/'+syntax);
    }
});
