this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<header>\r\n\r\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\r\n    <span class='pull-right'>+",(f=c.time)?f=f.call(b,{hash:{},data:e}):(f=b.time,f=typeof f===h?f.apply(b):f),g+=i(f)+"</span>\r\n\r\n</header>\r\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\r\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\r\n                <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\r\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<div class='row'>\r\n\r\n    <div class='span5'>\r\n\r\n        <div class='btn-group'>\r\n\r\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+" <span class='caret'></span></a>\r\n\r\n            <ul class='dropdown-menu'>\r\n            ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\r\n            </ul>\r\n\r\n        </div>\r\n\r\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\r\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\r\n\r\n    </div>\r\n\r\n    <div class='span4 pull-right'>\r\n\r\n        <div class='row'>\r\n\r\n            <div class='span1 text-center'>",(h=c.current)?h=h.call(b,{hash:{},data:e}):(h=b.current,h=typeof h===k?h.apply(b):h),j+=l(h)+" / ",(h=c.total)?h=h.call(b,{hash:{},data:e}):(h=b.total,h=typeof h===k?h.apply(b):h),j+=l(h)+"</div>\r\n\r\n            <div class='span3'>\r\n\r\n                <div class='btn-group pull-right'>\r\n                    <button type='button' id='first' class='btn'>First</button>\r\n                    <button type='button' id='previous' class='btn'>Previous</button>\r\n                    <button type='button' id='next' class='btn'>Next</button>\r\n                    <button type='button' id='last' class='btn'>Last</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"});var config={storage:{view:{EditorView:{split:"codebrowser.view.EditorView.split",diff:"codebrowser.view.EditorView.diff"}}},api:{main:{root:"http://t-avihavai.users.cs.helsinki.fi/cb-back/app/"}},view:{container:"#container"},editor:{configure:function(a){a.setReadOnly(!0),a.setPrintMarginColumn(!1),a.setDisplayIndentGuides(!1),a.getSession().setFoldStyle("markbeginend"),a.setTheme("ace/theme/light"),a.setFontSize(12),a.getSession().setTabSize(4),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(120,120)}}};$(document).ready(function(){codebrowser.initialize()});var codebrowser={app:{},helper:{},model:{},collection:{},view:{},controller:{},router:{},initialize:function(){window.onerror=function(){var a=new codebrowser.view.ErrorView({model:{message:"Oops!"}});codebrowser.controller.ViewController.pushToView(a,!0)},codebrowser.app.base=new codebrowser.router.BaseRouter,codebrowser.app.snapshot=new codebrowser.router.SnapshotRouter,Backbone.history.start()}};codebrowser.helper.AceMode={mode:{java:"java"},getModeForFilename:function(a){var b="text";if(-1!==a.indexOf(".")&&0!==a.indexOf(".")){var c=a.split("."),d=c[c.length-1];b=this.mode[d]||b}return"ace/mode/"+b}},Handlebars.registerHelper("date",function(a){return new Date(a).toLocaleString()}),codebrowser.helper.TimeDifference={calculate:function(a,b){var c,d=a-b,e=Math.round(d/1e3);if(e>60){var f=Math.round(e/60);if(f>60){var g=Math.round(f/60);if(g>24){var h=Math.round(g/24);c=h+" day"}else c=g+" hour"}else c=f+" minute"}else c=e+" second";var i=c.replace(/[A-Za-z$-]/g,"");return parseInt(i,10)>1&&(c+="s"),c}},codebrowser.model.Course=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"courses",relations:[{type:Backbone.HasMany,key:"exercises",relatedModel:"codebrowser.model.Exercise",collectionType:"codebrowser.collection.ExerciseCollection",reverseRelation:{key:"course"}}]}),codebrowser.model.Diff=function(a,b){for(var c=[],d=difflib.stringAsLines(a),e=difflib.stringAsLines(b),f=new difflib.SequenceMatcher(d,e),g=f.get_opcodes(),h=0,i=0,j=0;j<g.length;j++){var k=g[j],l={type:k[0],rowStart:k[3],rowEnd:k[4]-1,offset:h};if("equal"!==l.type){if("replace"===l.type){var m=_.clone(l),n=k[2]-k[1]-1,o=k[4]-k[3]-1,p=l.rowEnd-l.rowStart+1,q=k[2]-k[1],r=p-q;n>o&&(0!==l.rowEnd-l.rowStart&&(l.rowEnd-=q>r?q:r),c.push(l),l=m,l.type="delete",k[1]+=p),o>n&&(l.rowEnd-=q>r?q:r,c.push(l),l=m,l.type="insert",l.rowStart+=q)}if("insert"===l.type&&(i+=l.rowEnd-l.rowStart+1),"delete"===l.type){var s=d.slice(k[1],k[2]),t=s.join("\n")+"\n";l.rowStart=k[1]+i,l.rowEnd=k[2]-1+i,l=_.extend(l,{fromRowStart:k[1],fromRowEnd:k[2]-1,lines:t});var u=l.rowEnd-l.rowStart+1;h+=u,i+=u}c.push(l)}}this.getDifferences=function(){return c}},codebrowser.model.Exercise=Backbone.RelationalModel.extend({urlRoot:function(){return this.get("course").url()+"/exercises"}}),codebrowser.model.File=Backbone.RelationalModel.extend({urlRoot:function(){return config.api.main.root+"students/"+this.get("snapshot").get("studentId")+"/courses/"+this.get("snapshot").get("courseId")+"/exercises/"+this.get("snapshot").get("exerciseId")+"/snapshots/"+this.get("snapshot").id+"/files"},fetchContent:function(a){var b=$.get(this.urlRoot()+"/"+this.id+"/content",function(b){a(b,null)});b.fail(function(){a(null,b)})}}),codebrowser.model.Snapshot=Backbone.RelationalModel.extend({urlRoot:function(){if(!this.get("studentId")||!this.get("courseId")||!this.get("exerciseId"))throw new Error("Attributes studentId, courseId and exerciseId are required to fetch a snapshot.");return config.api.main.root+"students/"+this.get("studentId")+"/courses/"+this.get("courseId")+"/exercises/"+this.get("exerciseId")+"/snapshots"},relations:[{type:Backbone.HasMany,key:"files",relatedModel:"codebrowser.model.File",collectionType:"codebrowser.collection.FileCollection",reverseRelation:{key:"snapshot"}},{type:Backbone.HasOne,key:"course",relatedModel:"codebrowser.model.Course"},{type:Backbone.HasOne,key:"exercise",relatedModel:"codebrowser.model.Exercise"}],initialize:function(){this.collection&&(this.set("studentId",this.collection.studentId),this.set("courseId",this.collection.courseId),this.set("exerciseId",this.collection.exerciseId))}}),codebrowser.model.Student=Backbone.RelationalModel.extend({urlRoot:config.api.main.root+"students",relations:[{type:Backbone.HasMany,key:"courses",relatedModel:"codebrowser.model.Course",collectionType:"codebrowser.collection.CourseCollection"}]}),codebrowser.collection.CourseCollection=Backbone.Collection.extend({model:codebrowser.model.Course,url:config.api.main.root+"courses"}),codebrowser.collection.ExerciseCollection=Backbone.Collection.extend({model:codebrowser.model.Exercise,url:function(){return this.course.url()+"/exercises"}}),codebrowser.collection.FileCollection=Backbone.Collection.extend({model:codebrowser.model.File,url:function(){return config.api.main.root+"students/"+this.snapshot.get("studentId")+"/courses/"+this.snapshot.get("courseId")+"/exercises/"+this.snapshot.get("exerciseId")+"/snapshots/"+this.snapshot.id+"/files"}}),codebrowser.collection.SnapshotCollection=Backbone.Collection.extend({model:codebrowser.model.Snapshot,url:function(){if(!this.studentId||!this.courseId||!this.exerciseId)throw new Error("Options studentId, courseId and exerciseId are required to fetch snapshots.");return config.api.main.root+"students/"+this.studentId+"/courses/"+this.courseId+"/exercises/"+this.exerciseId+"/snapshots"},initialize:function(a,b){b&&(this.studentId=b.studentId,this.courseId=b.courseId,this.exerciseId=b.exerciseId)}}),codebrowser.collection.StudentCollection=Backbone.Collection.extend({model:codebrowser.model.Student,url:config.api.main.root+"students"}),codebrowser.view.EditorView=Backbone.View.extend({template:{topContainer:Handlebars.templates.EditorTopContainer},split:!1,canSplit:function(){return this.model!==this.previousModel},diff:!1,canDiff:function(){return this.model!==this.previousModel},decorations:{"main-editor":[],"side-editor":[]},markers:{"main-editor":[],"side-editor":[]},removedLines:[],initialize:function(){this.$el.hide(),this.topContainer=$("<div>"),this.editorElement=$("<div>",{id:"editor"}),this.sideEditorElement=$("<div>",{id:"side-editor",height:"800px"}),this.mainEditorElement=$("<div>",{id:"main-editor",height:"800px"}),this.editorElement.append(this.sideEditorElement),this.editorElement.append(this.mainEditorElement),this.$el.append(this.topContainer),this.$el.append(this.editorElement),this.sideEditor=ace.edit(this.sideEditorElement.get(0)),this.mainEditor=ace.edit(this.mainEditorElement.get(0)),config.editor.configure(this.sideEditor),config.editor.configure(this.mainEditor)},remove:function(){this.$el.empty()},render:function(){var a=codebrowser.helper.TimeDifference.calculate(this.model.get("snapshot").get("snapshotTime"),this.previousModel.get("snapshot").get("snapshotTime")),b={time:a},c=$(this.template.topContainer(_.extend(this.model.toJSON(),b)));this.topContainer.html(c)},removeDecorations:function(a){for(;this.decorations[a.container.id].length>0;){var b=this.decorations[a.container.id].pop();a.getSession().removeGutterDecoration(b.row,b.style)}},removeMarkers:function(a){for(;this.markers[a.container.id].length>0;)a.getSession().removeMarker(this.markers[a.container.id].pop())},setContent:function(a,b,c){var d=a.getSelection().getSelectionAnchor(),e=a.getSession().getScrollTop();this.removeDecorations(a),this.removeMarkers(a),a.setValue(b),a.moveCursorToPosition(d),a.getSelection().clearSelection(),a.getSession().setScrollTop(e),a.getSession().setMode(c)},update:function(a,b){var c=this;this.model=b,this.previousModel=a;var d=_.after(2,function(){c.toggleDiff(c.diff)}),e=codebrowser.helper.AceMode.getModeForFilename(this.model.get("name"));this.previousModel===this.model?(this.toggleSplit(!1),this.toggleDiff(!1)):(this.split||this.toggleSplit("true"===localStorage.getItem(config.storage.view.EditorView.split)),this.diff||this.toggleDiff("true"===localStorage.getItem(config.storage.view.EditorView.diff))),this.previousModel!==this.model&&a.fetchContent(function(a,b){if(b)throw new Error("Failed file fetch.");c.setContent(c.sideEditor,a,e),d()}),this.model.fetchContent(function(a,b){if(b)throw new Error("Failed file fetch.");c.previousModel===c.model&&c.setContent(c.sideEditor,a,e),c.setContent(c.mainEditor,a,e),d()}),this.$el.show(),this.render()},didSplit:function(){this.clearDiff(),this.toggleDiff(this.diff)},toggleSplit:function(a){return void 0!==a?this.split=a:(this.split=!this.split,localStorage.setItem(config.storage.view.EditorView.split,this.split)),this.split?(this.sideEditorElement.css({"float":"left",width:"50%"}),this.sideEditorElement.show(),this.mainEditorElement.css({"float":"right",width:"50%"}),this.didSplit(),void 0):(this.sideEditorElement.is(":visible")&&(this.sideEditorElement.hide(),this.mainEditorElement.css({"float":"",width:""})),this.didSplit(),void 0)},decorate:function(a,b,c,d){for(var e=b;c>=e;e++)this.decorations[a.container.id].push({row:e,style:"decoration gutter-"+d}),a.getSession().addGutterDecoration(e,"decoration gutter-"+d)},clearDiff:function(){var a=ace.require("ace/range").Range;for(this.removeDecorations(this.mainEditor),this.removeDecorations(this.sideEditor);this.removedLines.length>0;){var b=this.removedLines.pop();this.mainEditor.getSession().remove(new a(b.rowStart,0,b.rowEnd,0))}this.removeMarkers(this.mainEditor),this.removeMarkers(this.sideEditor)},toggleDiff:function(a){var b=ace.require("ace/range").Range;if(void 0!==a?this.diff=a:(this.diff=!this.diff,localStorage.setItem(config.storage.view.EditorView.diff,this.diff)),this.diff)for(var c=this.sideEditor.getValue(),d=this.mainEditor.getValue(),e=new codebrowser.model.Diff(c,d).getDifferences(),f=0;f<e.length;f++){var g,h=e[f];if("delete"===h.type){if(this.split){g=this.sideEditor.getSession().addMarker(new b(h.fromRowStart,0,h.fromRowEnd,1),h.type,"fullLine"),this.decorate(this.sideEditor,h.fromRowStart,h.fromRowEnd,"delete"),this.markers["side-editor"].push(g);continue}this.mainEditor.getSession().insert({row:h.rowStart+h.offset,column:0},h.lines),this.decorate(this.mainEditor,h.rowStart+h.offset,h.rowEnd+h.offset,"delete"),this.removedLines.push({rowStart:h.rowStart+h.offset,rowEnd:h.rowEnd+1+h.offset})}var i=0;this.split||(i=h.offset),g=this.mainEditor.getSession().addMarker(new b(h.rowStart+i,0,h.rowEnd+i,1),h.type,"fullLine"),this.decorate(this.mainEditor,h.rowStart+i,h.rowEnd+i,h.type),this.markers["main-editor"].push(g)}else this.clearDiff()}}),codebrowser.view.ErrorView=Backbone.View.extend({el:config.view.container,template:Handlebars.templates.Error,remove:function(){this.$el.empty()},render:function(){var a=this.template(this.model);this.$el.html(a)}}),codebrowser.view.NotFoundErrorView=codebrowser.view.ErrorView.extend({model:{message:"Not Found."}}),codebrowser.view.SnapshotView=Backbone.View.extend({el:config.view.container,template:{navigationContainer:Handlebars.templates.SnapshotNavigationContainer},events:{"click #split":"split","click #diff":"diff","click #first":"first","click #previous":"previous","click #next":"next","click #last":"last"},initialize:function(){var a=this;this.snapshotContainer=$("<div>",{id:"snapshot-container"}),this.navigationContainer=$("<div>",{id:"navigation-container"}),this.editorContainer=$("<div>",{id:"editor-container"}),this.snapshotContainer.append(this.navigationContainer),this.snapshotContainer.append(this.editorContainer),this.editorView=new codebrowser.view.EditorView({el:this.editorContainer}),$(document).keydown(function(){37===event.keyCode&&a.previous(),39===event.keyCode&&a.next()})},remove:function(){$(document).unbind(),this.editorView.remove(),this.$el.empty(),this.$el.undelegate()},render:function(){this.$el.append(this.snapshotContainer);var a=this.collection.indexOf(this.model),b={current:a+1,total:this.collection.length},c=$(this.template.navigationContainer(_.extend(this.model.toJSON(),b)));this.editorView.split&&$("#split",c).addClass("active"),this.editorView.canSplit()||$("#split",c).attr("disabled",!0),this.editorView.diff&&$("#diff",c).addClass("active"),this.editorView.canDiff()||$("#diff",c).attr("disabled",!0),0===a&&($("#first",c).attr("disabled",!0),$("#previous",c).attr("disabled",!0)),a===this.collection.length-1&&($("#next",c).attr("disabled",!0),$("#last",c).attr("disabled",!0)),this.navigationContainer.html(c)},update:function(a,b){this.model=a;var c=this.collection.indexOf(a),d=this.collection.at(c-1);d||(d=this.model),this.file=this.model.get("files").get(b);var e=this.file.get("name"),f=d.get("files").findWhere({name:e});this.editorView.update(f||this.file,this.file),this.render()},split:function(){this.editorView.toggleSplit()},diff:function(){this.editorView.toggleDiff()},navigate:function(a,b){b||(b=a.get("files").first()),codebrowser.app.snapshot.navigate("#/students/"+this.collection.studentId+"/courses/"+this.collection.courseId+"/exercises/"+this.collection.exerciseId+"/snapshots/"+a.id+"/files/"+b.id)},first:function(){var a=this.collection.first(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)},previous:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a-1);if(b){var c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)}},next:function(){var a=this.collection.indexOf(this.model),b=this.collection.at(a+1);if(b){var c=b.get("files").findWhere({name:this.file.get("name")});this.navigate(b,c)}},last:function(){var a=this.collection.last(),b=a.get("files").findWhere({name:this.file.get("name")});this.navigate(a,b)}}),codebrowser.controller.ViewController={view:null,isActive:function(a){return this.view===a},pushToView:function(a,b){this.view&&this.view.remove(),this.view=a,b&&this.view.render()}},codebrowser.router.BaseRouter=Backbone.Router.extend({routes:{"*notFound":"notFound"},initialize:function(){this.errorView=new codebrowser.view.ErrorView({model:{message:"Oops!"}})},notFound:function(){codebrowser.controller.ViewController.pushToView(this.errorView,!0)}}),codebrowser.router.SnapshotRouter=Backbone.Router.extend({routes:{"students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId":"snapshot","students/:studentId/courses/:courseId/exercises/:exerciseId/snapshots/:snapshotId/files/:fileId":"snapshot"},initialize:function(){this.setUp()},setUp:function(){codebrowser.controller.ViewController.isActive(this.snapshotView)||(this.snapshotView=new codebrowser.view.SnapshotView,codebrowser.controller.ViewController.pushToView(this.snapshotView))},notFound:function(){var a=new codebrowser.view.NotFoundErrorView;codebrowser.controller.ViewController.pushToView(a,!0)},snapshot:function(a,b,c,d,e){this.setUp();var f=new codebrowser.collection.SnapshotCollection(null,{studentId:a,courseId:b,exerciseId:c});this.snapshotView.collection=f;var g=this;f.fetch({success:function(){var a=f.get(d);return a?e?a.get("files").get(e)?(g.snapshotView.update(a,e),void 0):(g.notFound(),void 0):(g.snapshotView.navigate(a,null),void 0):(g.notFound(),void 0)},error:function(){g.notFound()}})}});