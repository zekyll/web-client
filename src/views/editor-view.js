codebrowser.view.EditorView = Backbone.View.extend({

    template: {

        topContainer: Handlebars.templates.EditorTopContainer

    },

    split: false,

    initialize: function () {

        // Empty container
        this.$el.empty();

        // Hide view until needed
        this.$el.hide();

        // Create divs for elements
        this.topContainer = $('<div>');
        this.editorElement = $('<div>', { id: 'editor' });

        // Elements for editors
        this.sideEditorElement = $('<div>', { id: 'side-editor', height: '800px' }).hide();
        this.mainEditorElement = $('<div>', { id: 'main-editor', height: '800px' });

        this.editorElement.append(this.sideEditorElement);
        this.editorElement.append(this.mainEditorElement);

        // Append elements to parent
        this.$el.append(this.topContainer);
        this.$el.append(this.editorElement);

        // Create Ace editor
        this.sideEditor = ace.edit(this.sideEditorElement.get(0));
        this.mainEditor = ace.edit(this.mainEditorElement.get(0));

        // Configure editor
        config.editor.configure(this.sideEditor);
        config.editor.configure(this.mainEditor);
    },

    render: function () {

        // Template
        var topContainerOutput = $(this.template.topContainer(this.model.toJSON()));

        // Update top container
        this.topContainer.html(topContainerOutput);
    },

    setContent: function (editor, content, mode) {

        // Set content for editor
        editor.setValue(content);
        editor.navigateFileStart();

        // Set syntax mode
        editor.getSession().setMode(mode);
    },

    update: function (previousFile, file) {

        // Show view if necessary
        this.$el.show();

        this.model = file;
        this.previousModel = previousFile;

        // Syntax mode
        var mode = codebrowser.helper.AceMode.getModeForFilename(this.model.get('name'));

        var self = this;

        // Disable split view if both models are the same
        if (previousFile === this.model) {

            this.toggleSplit(false);
        }

        // Fetch previous file only if the models are not the same
        if (previousFile !== this.model) {

            previousFile.fetchContent(function (content) {

                // TODO: Error handling
                self.setContent(self.sideEditor, content, mode);
            });
        }

        // Fetch current file
        this.model.fetchContent(function (content) {

            // TODO: Error handling
            self.setContent(self.mainEditor, content, mode);
        });

        this.render();
    },

    toggleSplit: function (split) {

        // Use parameter if given, otherwise toggle internal split state
        if (split !== undefined) {
            this.split = split;
        } else {
            this.split = !this.split;
        }

        // Enable split
        if (this.split) {

            // Split side editor to left
            this.sideEditorElement.css({ float: 'left', width: '50%' });
            this.sideEditorElement.show();

            // Split main editor to right
            this.mainEditorElement.css({ float: 'right', width: '50%' });

            return;
        }

        // Disable split
        this.sideEditorElement.hide();
        this.mainEditorElement.css({ float: '', width: '' });
    },

    canSplit: function () {

        if (this.model === this.previousModel) {
            return false;
        }

        return true;
    }
});
