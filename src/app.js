/* exported codebrowser */

/* DOM ready */

$(document).ready(function() {

    editor.initialize();
    codebrowser.initialize();
});

/* App */

var codebrowser = {

    app: {},
    models: {},
    collections: {},
    views: {},
    routers: {},

    initialize: function () {

        codebrowser.app.snapshot = new codebrowser.routers.SnapshotRouter();
        Backbone.history.start();
    }
}

var editor = {

    initialize: function() {
        var editor = ace.edit('container');
        editor.setTheme('ace/theme/terminal');
        editor.getSession().setMode('ace/mode/java');
        editor.getSession().setTabSize(4);
        editor.setReadOnly(false);  // false to make it editable
        editor.setFontSize(14);

        editor.setHighlightActiveLine(true); // true by default
        editor.setShowPrintMargin(true); // true by default
        editor.getSession().setUseSoftTabs(false); // false by default
        editor.setShowInvisibles(false); // false by default

        editor.getSession().setUseWrapMode(true);
        editor.getSession().setWrapLimitRange(120, 120); // line length
        editor.setPrintMarginColumn(120);
        console.log(editor.getPrintMarginColumn());
    }

}
