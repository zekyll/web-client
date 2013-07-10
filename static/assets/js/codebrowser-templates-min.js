this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CoursesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\r\n            <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"/exercises'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\r\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Courses</h2>\r\n\r\n<section>\r\n\r\n    <ul>\r\n        ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.courses)?g=g.call(b,h):(g=b.courses,g=typeof g===j?g.apply(b):g),c.courses||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\r\n    </ul>\r\n\r\n</section>\r\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h,i="",j="function",k=this.escapeExpression,l=c.helperMissing;return i+="<header>\r\n\r\n    <h1>",(f=c.name)?f=f.call(b,{hash:{},data:e}):(f=b.name,f=typeof f===j?f.apply(b):f),i+=k(f)+"</h1>\r\n\r\n    <span class='pull-right'>\r\n\r\n        + ",h={hash:{},data:e},i+=k((f=c.duration||b.duration,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h):l.call(b,"duration",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h)))+"\r\n\r\n        <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\r\n\r\n           data-original-title='\r\n\r\n                <time>",h={hash:{},data:e},i+=k((f=c.date||b.date,f?f.call(b,(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h):l.call(b,"date",(f=b.previous,f=null==f||f===!1?f:f.snapshot,null==f||f===!1?f:f.snapshotTime),h)))+" –</time>\r\n                <time>",h={hash:{},data:e},i+=k((f=c.date||b.date,f?f.call(b,(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),h):l.call(b,"date",(f=b.snapshot,null==f||f===!1?f:f.snapshotTime),h)))+"</time>\r\n\r\n           '\r\n\r\n           data-content='\r\n\r\n            <dl class=\"dl-horizontal pull-left\">\r\n\r\n              <dt>Change</dt>\r\n              <dd>",(g=c.percentageOfChange)?g=g.call(b,{hash:{},data:e}):(g=b.percentageOfChange,g=typeof g===j?g.apply(b):g),i+=k(g)+" %</dd>\r\n\r\n              <dt>Insert</dt>\r\n              <dd>"+k((f=b.difference,f=null==f||f===!1?f:f.insert,typeof f===j?f.apply(b):f))+" ",h={hash:{},data:e},i+=k((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.insert),"line",h):l.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.insert),"line",h)))+"</dd>\r\n\r\n              <dt>Replace</dt>\r\n              <dd>"+k((f=b.difference,f=null==f||f===!1?f:f.replace,typeof f===j?f.apply(b):f))+" ",h={hash:{},data:e},i+=k((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f.replace),"line",h):l.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f.replace),"line",h)))+"</dd>\r\n\r\n              <dt>Delete</dt>\r\n              <dd>"+k((f=b.difference,f=null==f||f===!1?f:f["delete"],typeof f===j?f.apply(b):f))+" ",h={hash:{},data:e},i+=k((f=c.pluralize||b.pluralize,f?f.call(b,(f=b.difference,null==f||f===!1?f:f["delete"]),"line",h):l.call(b,"pluralize",(f=b.difference,null==f||f===!1?f:f["delete"]),"line",h)))+"</dd>\r\n\r\n            </dl>\r\n\r\n        '><i class='icon-info-sign icon-gray'></i></a>\r\n\r\n    </span>\r\n\r\n</header>\r\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\r\n"}),this.Handlebars.templates.ExercisesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\r\n            <li><a href='#/students/"+k((e=d.studentId,typeof e===j?e.apply(a):e))+"/courses/"+k((e=d.courseId,typeof e===j?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===j?f.apply(a):f),g+=k(f)+"/snapshots'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===j?f.apply(a):f),g+=k(f)+"</a></li>\r\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Exercises</h2>\r\n\r\n<section>\r\n\r\n    <ul>\r\n        ",h={hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e},(g=c.exercises)?g=g.call(b,h):(g=b.exercises,g=typeof g===j?g.apply(b):g),c.exercises||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\r\n    </ul>\r\n\r\n</section>\r\n"}),this.Handlebars.templates.SnapshotFilesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+="\r\n        <li><a href='#/students/"+l((e=d.studentId,typeof e===k?e.apply(a):e))+"/courses/"+l((e=d.courseId,typeof e===k?e.apply(a):e))+"/exercises/"+l((e=d.exerciseId,typeof e===k?e.apply(a):e))+"/snapshots/"+l((e=d.id,typeof e===k?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===k?f.apply(a):f),g+=l(f)+"'><i class='icon-file icon-gray'></i> ",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===k?f.apply(a):f),g+=l(f)+"</a></li>\r\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+="<header>\r\n\r\n    <i class='icon-folder-close icon-gray'></i> <h1>"+l((g=b.exercise,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+"</h1>\r\n\r\n</header>\r\n\r\n<ul>\r\n    ",i={hash:{},inverse:m.noop,fn:m.programWithDepth(1,f,e,b),data:e},(h=c.files)?h=h.call(b,i):(h=b.files,h=typeof h===k?h.apply(b):h),c.files||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\r\n</ul>\r\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<div class='row'>\r\n\r\n    <div class='span2'>\r\n\r\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\r\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\r\n\r\n    </div>\r\n\r\n    <div class='span4 pull-right'>\r\n\r\n        <div class='row'>\r\n\r\n            <div class='span1 text-center'>",(f=c.current)?f=f.call(b,{hash:{},data:e}):(f=b.current,f=typeof f===h?f.apply(b):f),g+=i(f)+" / ",(f=c.total)?f=f.call(b,{hash:{},data:e}):(f=b.total,f=typeof f===h?f.apply(b):f),g+=i(f)+"</div>\r\n\r\n            <div class='span3'>\r\n\r\n                <div class='btn-group pull-right'>\r\n                    <button type='button' id='first' class='btn'>First</button>\r\n                    <button type='button' id='previous' class='btn'>Previous</button>\r\n                    <button type='button' id='next' class='btn'>Next</button>\r\n                    <button type='button' id='last' class='btn'>Last</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"}),this.Handlebars.templates.SnapshotsTimelineBottomContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i=c.helperMissing,j=this.escapeExpression;return h+="<div class='row'>\r\n\r\n    <div class='span2'>\r\n\r\n        <time>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.first,null==f||f===!1?f:f.snapshotTime),!1,g):i.call(b,"date",(f=b.first,null==f||f===!1?f:f.snapshotTime),!1,g)))+"</time>\r\n\r\n    </div>\r\n\r\n    <div class='center text-center'>. . .</div>\r\n\r\n    <div class='span3 pull-right'>\r\n\r\n        <time class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.last,null==f||f===!1?f:f.snapshotTime),!1,g):i.call(b,"date",(f=b.last,null==f||f===!1?f:f.snapshotTime),!1,g)))+" (+ ",g={hash:{},data:e},h+=j((f=c.duration||b.duration,f?f.call(b,(f=b.last,null==f||f===!1?f:f.snapshotTime),(f=b.first,null==f||f===!1?f:f.snapshotTime),g):i.call(b,"duration",(f=b.last,null==f||f===!1?f:f.snapshotTime),(f=b.first,null==f||f===!1?f:f.snapshotTime),g)))+")</time>\r\n\r\n    </div>\r\n\r\n</div>\r\n"}),this.Handlebars.templates.StudentsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\r\n            <li><a href='#/students/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===j?d.apply(a):d),e+=k(d)+"/courses'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===j?d.apply(a):d),e+=k(d)+"</a></li>\r\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<h2>Students</h2>\r\n\r\n<section>\r\n\r\n    <ul>\r\n        ",h={hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e},(g=c.students)?g=g.call(b,h):(g=b.students,g=typeof g===j?g.apply(b):g),c.students||(g=m.call(b,g,h)),(g||0===g)&&(i+=g),i+="\r\n    </ul>\r\n\r\n</section>\r\n"});