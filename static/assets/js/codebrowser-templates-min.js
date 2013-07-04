this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CoursesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n            <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"/exercises'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Courses</h2>\n\n<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.courses)?g=g.call(b,h):(g=b.courses,g=typeof g===j?g.apply(b):g),c.courses||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=c.helperMissing;return h+="<header>\n\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===i?f.apply(b):f),h+=j(f)+"</h1>\n\n    <span class='pull-right'>\n\n        + ",g={hash:{},data:e},h+=j((f=c.duration||b.duration,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"duration",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"\n\n        <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n           data-original-title='\n\n                <time>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+" –</time>\n                <time>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g):k.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),g)))+"</time>\n\n           '\n\n           data-content='\n\n            <dl class=\"dl-horizontal pull-left\">\n\n              <dt>Insert</dt>\n              <dd>"+j((f=b.difference,f=null==f||f===!1?f:f.insert,typeof f===i?f.apply(b):f))+" ",g={hash:{},data:e},h+=j((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.insert),"line",g):k.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.insert),"line",g)))+"</dd>\n\n              <dt>Replace</dt>\n              <dd>"+j((f=b.difference,f=null==f||f===!1?f:f.replace,typeof f===i?f.apply(b):f))+" ",g={hash:{},data:e},h+=j((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.replace),"line",g):k.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.replace),"line",g)))+"</dd>\n\n              <dt>Delete</dt>\n              <dd>"+j((f=b.difference,f=null==f||f===!1?f:f["delete"],typeof f===i?f.apply(b):f))+" ",g={hash:{},data:e},h+=j((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f["delete"]),"line",g):k.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f["delete"]),"line",g)))+"</dd>\n\n            </dl>\n\n        '><i class='icon-info-sign icon-gray'></i></a>\n\n    </span>\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.ExercisesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n            <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/"+k((e=d.courseId,typeof e===j?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"/snapshots'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Exercises</h2>\n\n<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.exercises)?g=g.call(b,h):(g=b.exercises,g=typeof g===j?g.apply(b):g),c.exercises||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\n                    <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\n                "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<div class='row'>\n\n    <div class='span6'>\n\n        <div class='btn-group'>\n\n            <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class='icon-folder-close icon-gray'></i> "+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+" <span class='caret'></span></a>\n\n            <ul class='dropdown-menu'>\n                ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n            </ul>\n\n        </div>\n\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(h=c.current)?h=h.call(b,{hash:{},data:e}):(h=b.current,h=typeof h===k?h.apply(b):h),j+=l(h)+" / ",(h=c.total)?h=h.call(b,{hash:{},data:e}):(h=b.total,h=typeof h===k?h.apply(b):h),j+=l(h)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.StudentsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n            <li><a href='#/students/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===j?d.apply(a):d),e+=k(d)+"/courses'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===j?d.apply(a):d),e+=k(d)+"</a></li>\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Students</h2>\n\n<section>\n\n    <ul>\n        ",h={hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e},(g=c.students)?g=g.call(b,h):(g=b.students,g=typeof g===j?g.apply(b):g),c.students||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\n    </ul>\n\n</section>\n"});