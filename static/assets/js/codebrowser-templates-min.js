this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<header>\r\n\r\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\r\n    <span class='pull-right'>+",(f=c.time)?f=f.call(b,{hash:{},data:e}):(f=b.time,f=typeof f===h?f.apply(b):f),g+=i(f)+"</span>\r\n\r\n</header>\r\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\r\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\r\n                <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\r\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<div class='row'>\r\n\r\n    <div class='span5'>\r\n\r\n        <div class='btn-group'>\r\n\r\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+" <span class='caret'></span></a>\r\n\r\n            <ul class='dropdown-menu'>\r\n            ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\r\n            </ul>\r\n\r\n        </div>\r\n\r\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\r\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\r\n\r\n    </div>\r\n\r\n    <div class='span4 pull-right'>\r\n\r\n        <div class='row'>\r\n\r\n            <div class='span1 text-center'>",(h=c.current)?h=h.call(b,{hash:{},data:e}):(h=b.current,h=typeof h===k?h.apply(b):h),j+=l(h)+" / ",(h=c.total)?h=h.call(b,{hash:{},data:e}):(h=b.total,h=typeof h===k?h.apply(b):h),j+=l(h)+"</div>\r\n\r\n            <div class='span3'>\r\n\r\n                <div class='btn-group pull-right'>\r\n                    <button type='button' id='first' class='btn'>First</button>\r\n                    <button type='button' id='previous' class='btn'>Previous</button>\r\n                    <button type='button' id='next' class='btn'>Next</button>\r\n                    <button type='button' id='last' class='btn'>Last</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"});