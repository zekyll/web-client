var config={apiRoot:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/",editor:{configure:function(e){e.setReadOnly(!0),e.setPrintMarginColumn(!1),e.setDisplayIndentGuides(!1),e.setTheme("ace/theme/crimson_editor"),e.setFontSize(12),e.getSession().setTabSize(4),e.getSession().setUseWrapMode(!0),e.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},models:{},helpers:{},collections:{},views:{},routers:{},initialize:function(){codebrowser.app.snapshot=new codebrowser.routers.SnapshotRouter,Backbone.history.start()}};codebrowser.helpers.syntaxMapper={mode:{java:"java",js:"javascript",py:"python"},map:function(e){return codebrowser.helpers.syntaxMapper.mode[e]},getFiletype:function(e){var o=e.split(".");return o[o.length-1]}},codebrowser.models.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(e){$.get(this.urlRoot()+"/"+this.id,function(o){e(o)})}}),codebrowser.models.Snapshot=Backbone.RelationalModel.extend({urlRoot:config.apiRoot+"students/1/courses/2/exercises/3/snapshots",relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.models.File",collectionType:"codebrowser.collections.FileCollection",reverseRelation:{key:"snapshot"}}]}),codebrowser.models.Student=Backbone.Model.extend({urlRoot:config.apiRoot+"students"}),codebrowser.collections.FileCollection=Backbone.Collection.extend({model:codebrowser.models.File,url:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots/"+this.get("snapshot").id+"/files"}}),codebrowser.collections.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.models.Snapshot,url:function(){return config.apiRoot+"students/1/courses/2/exercises/3/snapshots/"}}),codebrowser.views.EditorView=Backbone.View.extend({initialize:function(){this.render()},render:function(){var e=$("#editor-template").html();$(this.el).html(e),this.editor=ace.edit("editor"),config.editor.configure(this.editor)},setContent:function(e,o){this.editor.setValue(e),this.editor.navigateFileStart();var t=codebrowser.helpers.syntaxMapper.map(o);this.editor.getSession().setMode("ace/mode/"+t)}}),codebrowser.routers.SnapshotRouter=Backbone.Router.extend({initialize:function(){this.snapshotCollection=new codebrowser.collections.SnapshotCollection,this.snapshotCollection.fetch({async:!1})},routes:{"snapshots/:id":"read"},read:function(e){var o=this.snapshotCollection.get(e);o.fetch({success:function(){console.log("Received snapshot from backend..."),console.log(o);var e=o.get("files").at(0).get("name"),t=codebrowser.helpers.syntaxMapper.getFiletype(e),s=new codebrowser.views.EditorView({el:$("#container")});o.get("files").at(0).fetchContent(function(e){s.setContent(e,t),console.log("Done.")})},error:function(){console.log("Request failed.")}})}});