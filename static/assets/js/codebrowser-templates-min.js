this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CoursesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n            <li><a href='/#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='/#/students/",(d=c.studentId)?d=d.call(a,{hash:{},data:b}):(d=a.studentId,d=typeof d===o?d.apply(a):d),e+=p(d)+"'>"+p((d=a.student,d=null==d||d===!1?d:d.name,typeof d===o?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n        "}function g(a){var b,c="";return c+=" "+p((b=a.student,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+" — "}function h(a,b,d){var e,f,g,h="";return h+="\n\n                <tr>\n\n                    <td class='index'>",g={hash:{},data:b},h+=p((e=c.index||a.index,e?e.call(a,(e=b,null==e||e===!1?e:e.index),g):q.call(a,"index",(e=b,null==e||e===!1?e:e.index),g)))+"</td>\n\n                    ",f=c["if"].call(a,d.studentId,{hash:{},inverse:r.program(8,j,b),fn:r.programWithDepth(6,i,b,d),data:b}),(f||0===f)&&(h+=f),h+="\n\n                    <td>"+p((e=a.exercises,e=null==e||e===!1?e:e.length,typeof e===o?e.apply(a):e))+"</td>\n\n                </tr>\n\n            "}function i(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='#/students/"+p((e=d.studentId,typeof e===o?e.apply(a):e))+"/courses/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===o?f.apply(a):f),g+=p(f)+"/exercises'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===o?f.apply(a):f),g+=p(f)+"</a></td>\n\n                    "}function j(a,b){var d,e="";return e+="\n\n                        <td class='link'><a href='#/courses/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===o?d.apply(a):d),e+=p(d)+"/exercises'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===o?d.apply(a):d),e+=p(d)+"</a></td>\n\n                    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l,m,n="",o="function",p=this.escapeExpression,q=c.helperMissing,r=this,s=c.blockHelperMissing;return n+="<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='/'>Home</a> <span class='divider'>/</span></li>\n\n        ",k=c["if"].call(b,b.studentId,{hash:{},inverse:r.noop,fn:r.program(1,f,e),data:e}),(k||0===k)&&(n+=k),n+="\n\n        <li class='active'>Courses</li>\n\n    </ul>\n\n    <h2>",k=c["if"].call(b,b.studentId,{hash:{},inverse:r.noop,fn:r.program(3,g,e),data:e}),(k||0===k)&&(n+=k),n+=" Courses ("+p((k=b.courses,k=null==k||k===!1?k:k.length,typeof k===o?k.apply(b):k))+")</h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n                <th>Exercises</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ",m={hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e},(l=c.courses)?l=l.call(b,m):(l=b.courses,l=typeof l===o?l.apply(b):l),c.courses||(l=s.call(b,l,m)),(l||0===l)&&(n+=l),n+="\n\n        </tbody>\n\n    </table>\n\n</section>\n"}),this.Handlebars.templates.EditorSettingsContainer=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<footer>\n\n    <a href='#editor-settings' data-toggle='modal' class='pull-right'><i class='icon-wrench icon-gray'></i></a>\n\n    <div id='editor-settings' class='modal hide fade' tabindex='-1' data-backdrop='false'>\n\n        <div class='modal-header'>\n\n            <header>\n\n                <button type='button' class='close' data-dismiss='modal'>×</button>\n\n                <h1>Settings</h1>\n\n            </header>\n\n        </div>\n\n        <div class='modal-body'>\n\n            <form class='form-horizontal'>\n\n                <fieldset>\n\n                    <div class='control-group'>\n\n                        <label class='checkbox'>\n                            <input type='checkbox' data-id='ignore-empty-lines' checked> Ignore empty lines (improves diff results)\n                        </label>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='theme'>Theme</label>\n\n                        <div class='controls'>\n\n                            <select data-id='theme'>\n                                <option value='ace/theme/light'>Light</option>\n                                <option value='ace/theme/dark'>Dark</option>\n                            </select>\n\n                        </div>\n\n                    </div>\n\n                    <div class='control-group'>\n\n                        <label class='control-label' for='font-size'>Font size</label>\n\n                        <div class='controls'>\n\n                            <select data-id='font-size'>\n                                <option value='11'>Small</option>\n                                <option value='12' selected>Normal</option>\n                                <option value='13'>Larger</option>\n                                <option value='14'>Large</option>\n                                <option value='15'>Extra Large</option>\n                            </select>\n\n                        </div>\n\n                </fieldset>\n\n            </form>\n\n        </div>\n\n        <div class='modal-footer'>\n\n            <button class='btn' data-dismiss='modal'>Cancel</button>\n            <button data-id='save' class='btn btn-primary' data-dismiss='modal'>Save</button>\n\n        </div>\n\n</footer>\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){function f(){return"\n\n        <section class='split'>\n\n            <div class='previous'><span>Previous</span></div>\n            <div class='current'><span>Current</span></div>\n\n        </section>\n\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k=c.helperMissing,l=this.escapeExpression,m="function",n=this;return j+="<header>\n\n    <section>\n\n        <h1>",i={hash:{},data:e},j+=l((g=c.fileName||b.fileName,g?g.call(b,b.name,i):k.call(b,"fileName",b.name,i)))+"</h1>\n\n        <span class='pull-right'>\n\n            + ",i={hash:{},data:e},j+=l((g=c.duration||b.duration,g?g.call(b,(g=b.snapshot,null==g||g===!1?g:g.snapshotTime),(g=b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.snapshotTime),i):k.call(b,"duration",(g=b.snapshot,null==g||g===!1?g:g.snapshotTime),(g=b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.snapshotTime),i)))+"\n\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n               data-original-title='\n\n                    <time>",i={hash:{},data:e},j+=l((g=c.date||b.date,g?g.call(b,(g=b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.snapshotTime),i):k.call(b,"date",(g=b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.snapshotTime),i)))+" –</time>\n                    <time>",i={hash:{},data:e},j+=l((g=c.date||b.date,g?g.call(b,(g=b.snapshot,null==g||g===!1?g:g.snapshotTime),i):k.call(b,"date",(g=b.snapshot,null==g||g===!1?g:g.snapshotTime),i)))+"</time>\n\n               '\n\n               data-content='\n\n                <dl class=\"dl-horizontal pull-left\">\n\n                  <dt>Change</dt>\n                  <dd>",(h=c.percentageOfChange)?h=h.call(b,{hash:{},data:e}):(h=b.percentageOfChange,h=typeof h===m?h.apply(b):h),j+=l(h)+" %</dd>\n\n                  <dt>Insert</dt>\n                  <dd>"+l((g=b.difference,g=null==g||g===!1?g:g.insert,typeof g===m?g.apply(b):g))+" ",i={hash:{},data:e},j+=l((g=c.pluralize||b.pluralize,g?g.call(b,(g=b.difference,null==g||g===!1?g:g.insert),"line",i):k.call(b,"pluralize",(g=b.difference,null==g||g===!1?g:g.insert),"line",i)))+"</dd>\n\n                  <dt>Replace</dt>\n                  <dd>"+l((g=b.difference,g=null==g||g===!1?g:g.replace,typeof g===m?g.apply(b):g))+" ",i={hash:{},data:e},j+=l((g=c.pluralize||b.pluralize,g?g.call(b,(g=b.difference,null==g||g===!1?g:g.replace),"line",i):k.call(b,"pluralize",(g=b.difference,null==g||g===!1?g:g.replace),"line",i)))+"</dd>\n\n                  <dt>Delete</dt>\n                  <dd>"+l((g=b.difference,g=null==g||g===!1?g:g["delete"],typeof g===m?g.apply(b):g))+" ",i={hash:{},data:e},j+=l((g=c.pluralize||b.pluralize,g?g.call(b,(g=b.difference,null==g||g===!1?g:g["delete"]),"line",i):k.call(b,"pluralize",(g=b.difference,null==g||g===!1?g:g["delete"]),"line",i)))+"</dd>\n\n                </dl>\n\n            '><i class='icon-info-sign icon-gray'></i></a>\n\n        </span>\n\n    </section>\n\n    ",h=c["if"].call(b,b.split,{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(h||0===h)&&(j+=h),j+="\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p class='alert ",(f=c["class"])?f=f.call(b,{hash:{},data:e}):(f=b["class"],f=typeof f===h?f.apply(b):f),g+=i(f)+"'>",(f=c.message)?f=f.call(b,{hash:{},data:e}):(f=b.message,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n"}),this.Handlebars.templates.ExercisesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n            <li><a href='/#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='/#/students/",(d=c.studentId)?d=d.call(a,{hash:{},data:b}):(d=a.studentId,d=typeof d===p?d.apply(a):d),e+=q(d)+"'>"+q((d=a.student,d=null==d||d===!1?d:d.name,typeof d===p?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n        "}function g(a,b){var d,e="";return e+="students/",(d=c.studentId)?d=d.call(a,{hash:{},data:b}):(d=a.studentId,d=typeof d===p?d.apply(a):d),e+=q(d)+"/"}function h(a){var b,c="";return c+=" "+q((b=a.student,b=null==b||b===!1?b:b.name,typeof b===p?b.apply(a):b))+" — "}function i(a,b,d){var e,f,g,h="";return h+="\n\n                <tr>\n\n                    <td class='index'>",g={hash:{},data:b},h+=q((e=c.index||a.index,e?e.call(a,(e=b,null==e||e===!1?e:e.index),g):r.call(a,"index",(e=b,null==e||e===!1?e:e.index),g)))+"</td>\n\n                    ",f=c["if"].call(a,d.studentId,{hash:{},inverse:s.programWithDepth(10,k,b,d),fn:s.programWithDepth(8,j,b,d),data:b}),(f||0===f)&&(h+=f),h+="\n\n                </tr>\n\n            "}function j(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='#/students/"+q((e=d.studentId,typeof e===p?e.apply(a):e))+"/courses/"+q((e=d.courseId,typeof e===p?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===p?f.apply(a):f),g+=q(f)+"/snapshots'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===p?f.apply(a):f),g+=q(f)+"</a></td>\n\n                    "}function k(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='#/courses/"+q((e=d.courseId,typeof e===p?e.apply(a):e))+"/exercises/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===p?f.apply(a):f),g+=q(f)+"/students'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===p?f.apply(a):f),g+=q(f)+"</a></td>\n\n                    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var l,m,n,o="",p="function",q=this.escapeExpression,r=c.helperMissing,s=this,t=c.blockHelperMissing;return o+="<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='/'>Home</a> <span class='divider'>/</span></li>\n\n        ",l=c["if"].call(b,b.studentId,{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(l||0===l)&&(o+=l),o+="\n\n        <li><a href='/#/",l=c["if"].call(b,b.studentId,{hash:{},inverse:s.noop,fn:s.program(3,g,e),data:e}),(l||0===l)&&(o+=l),o+="courses'>Courses</a> <span class='divider'>/</span></li>\n        <li><a href='/#/",l=c["if"].call(b,b.studentId,{hash:{},inverse:s.noop,fn:s.program(3,g,e),data:e}),(l||0===l)&&(o+=l),o+="courses/",(l=c.courseId)?l=l.call(b,{hash:{},data:e}):(l=b.courseId,l=typeof l===p?l.apply(b):l),o+=q(l)+"'>"+q((l=b.course,l=null==l||l===!1?l:l.name,typeof l===p?l.apply(b):l))+"</a> <span class='divider'>/</span></li>\n        <li class='active'>Exercises</li>\n\n    </ul>\n\n    <h2>",m=c["if"].call(b,b.studentId,{hash:{},inverse:s.noop,fn:s.program(5,h,e),data:e}),(m||0===m)&&(o+=m),o+=" "+q((l=b.course,l=null==l||l===!1?l:l.name,typeof l===p?l.apply(b):l))+" — Exercises ("+q((l=b.exercises,l=null==l||l===!1?l:l.length,typeof l===p?l.apply(b):l))+")</h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n                <th>#</th>\n                <th>Name</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ",n={hash:{},inverse:s.noop,fn:s.programWithDepth(7,i,e,b),data:e},(m=c.exercises)?m=m.call(b,n):(m=b.exercises,m=typeof m===p?m.apply(b):m),c.exercises||(m=t.call(b,m,n)),(m||0===m)&&(o+=m),o+="\n\n        </tbody>\n\n    </table>\n\n</section>\n"}),this.Handlebars.templates.NavigationBarContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n\n            <li><a href='/#/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/",(d=c.courseId)?d=d.call(a,{hash:{},data:b}):(d=a.courseId,d=typeof d===j?d.apply(a):d),f+=k(d)+"'>"+k((d=a.course,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/",(e=c.courseId)?e=e.call(a,{hash:{},data:b}):(e=a.courseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/",(e=c.courseId)?e=e.call(a,{hash:{},data:b}):(e=a.courseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/exercises/",(e=c.exerciseId)?e=e.call(a,{hash:{},data:b}):(e=a.exerciseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"'>"+k((d=a.exercise,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/",(e=c.courseId)?e=e.call(a,{hash:{},data:b}):(e=a.courseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/exercises/",(e=c.exerciseId)?e=e.call(a,{hash:{},data:b}):(e=a.exerciseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/",(e=c.courseId)?e=e.call(a,{hash:{},data:b}):(e=a.courseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/exercises/",(e=c.exerciseId)?e=e.call(a,{hash:{},data:b}):(e=a.exerciseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/students/",(e=c.studentId)?e=e.call(a,{hash:{},data:b}):(e=a.studentId,e=typeof e===j?e.apply(a):e),f+=k(e)+"'>"+k((d=a.student,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n\n        "}function g(a,b){var d,e,f="";return f+="\n\n            <li><a href='/#/students'>Students</a> <span class='divider'>/</span></li>\n            <li><a href='/#/students/",(d=c.studentId)?d=d.call(a,{hash:{},data:b}):(d=a.studentId,d=typeof d===j?d.apply(a):d),f+=k(d)+"'>"+k((d=a.student,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='/#/students/",(e=c.studentId)?e=e.call(a,{hash:{},data:b}):(e=a.studentId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='/#/students/",(e=c.studentId)?e=e.call(a,{hash:{},data:b}):(e=a.studentId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/courses/",(e=c.courseId)?e=e.call(a,{hash:{},data:b}):(e=a.courseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"'>"+k((d=a.course,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n            <li><a href='/#/students/",(e=c.studentId)?e=e.call(a,{hash:{},data:b}):(e=a.studentId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/courses/",(e=c.courseId)?e=e.call(a,{hash:{},data:b}):(e=a.courseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='/#/students/",(e=c.studentId)?e=e.call(a,{hash:{},data:b}):(e=a.studentId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/courses/",(e=c.courseId)?e=e.call(a,{hash:{},data:b}):(e=a.courseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"/exercises/",(e=c.exerciseId)?e=e.call(a,{hash:{},data:b}):(e=a.exerciseId,e=typeof e===j?e.apply(a):e),f+=k(e)+"'>"+k((d=a.exercise,d=null==d||d===!1?d:d.name,typeof d===j?d.apply(a):d))+"</a> <span class='divider'>/</span></li>\n\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this;return i+="<section>\n\n    <ul class='breadcrumb'>\n\n        <li><a href='/'>Home</a> <span class='divider'>/</span></li>\n\n        ",h=c["if"].call(b,b.courseRoute,{hash:{},inverse:l.program(3,g,e),fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="\n\n        <li class='active'>Snapshots</li>\n\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.RootContainer=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<section>\n\n    <ul class='breadcrumb'>\n        <li class='active'>Home</li>\n    </ul>\n\n    <ul class='nav nav-tabs nav-stacked selection'>\n        <li><a href='/#/students'>Students</a></li>\n        <li><a href='/#/courses'>Courses</a></li>\n    </ul>\n\n</section>\n"}),this.Handlebars.templates.SnapshotFilesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f,i="";return i+="\n\n            ",f=c["if"].call(a,(e=b,null==e||e===!1?e:e.key),{hash:{},inverse:q.noop,fn:q.program(2,g,b),data:b}),(f||0===f)&&(i+=f),i+="\n\n            ",f=c.each.call(a,a,{hash:{},inverse:q.noop,fn:q.programWithDepth(4,h,b,d),data:b}),(f||0===f)&&(i+=f),i+="\n\n        "}function g(a,b){var c,d="";return d+="\n\n                <li class='folder'><i class='icon-folder-open icon-gray'></i>"+o((c=b,c=null==c||c===!1?c:c.key,typeof c===n?c.apply(a):c))+"</li>\n\n            "}function h(a,b,d){var e,f="";return f+="\n\n                ",e=c["if"].call(a,d.courseRoute,{hash:{},inverse:q.programWithDepth(7,j,b,d),fn:q.programWithDepth(5,i,b,d),data:b}),(e||0===e)&&(f+=e),f+="\n\n            "}function i(a,b,d){var e,f,g,h="";return h+="\n\n                    <li data-id='",(e=c.id)?e=e.call(a,{hash:{},data:b}):(e=a.id,e=typeof e===n?e.apply(a):e),h+=o(e)+"'><a href='#/courses/"+o((e=d.courseId,typeof e===n?e.apply(a):e))+"/exercises/"+o((e=d.exerciseId,typeof e===n?e.apply(a):e))+"/students/"+o((e=d.studentId,typeof e===n?e.apply(a):e))+"/snapshots/"+o((e=d.id,typeof e===n?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===n?f.apply(a):f),h+=o(f)+"'><i class='icon-file icon-gray'></i> ",g={hash:{},data:b},h+=o((e=c.fileName||a.fileName,e?e.call(a,a.name,g):p.call(a,"fileName",a.name,g)))+"</a></li>\n\n                "}function j(a,b,d){var e,f,g,h="";return h+="\n\n                    <li data-id='",(e=c.id)?e=e.call(a,{hash:{},data:b}):(e=a.id,e=typeof e===n?e.apply(a):e),h+=o(e)+"'><a href='#/students/"+o((e=d.studentId,typeof e===n?e.apply(a):e))+"/courses/"+o((e=d.courseId,typeof e===n?e.apply(a):e))+"/exercises/"+o((e=d.exerciseId,typeof e===n?e.apply(a):e))+"/snapshots/"+o((e=d.id,typeof e===n?e.apply(a):e))+"/files/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===n?f.apply(a):f),h+=o(f)+"'><i class='icon-file icon-gray'></i> ",g={hash:{},data:b},h+=o((e=c.fileName||a.fileName,e?e.call(a,a.name,g):p.call(a,"fileName",a.name,g)))+"</a></li>\n\n                "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l,m="",n="function",o=this.escapeExpression,p=c.helperMissing,q=this;return m+="<header>\n\n    <h1><i class='icon-folder-close icon-gray'></i> "+o((k=b.exercise,k=null==k||k===!1?k:k.name,typeof k===n?k.apply(b):k))+"</h1>\n\n</header>\n\n<ul>\n\n        ",l=c.each.call(b,b.files,{hash:{},inverse:q.noop,fn:q.programWithDepth(1,f,e,b),data:e}),(l||0===l)&&(m+=l),m+="\n\n</ul>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<div class='row'>\n\n    <div class='span2'>\n\n        <button id='toggleBrowser' type='button' class='btn' data-toggle='button'><i class='icon-folder icon-gray'></i></button>\n        <button id='split' type='button' class='btn' data-toggle='button'><i class='icon-split-editor icon-gray'></i></button>\n        <button id='diff' type='button' class='btn' data-toggle='button'><i class='icon-diff icon-gray'></i></button>\n\n    </div>\n\n    <div class='span4 pull-right'>\n\n        <div class='row'>\n\n            <div class='span1 text-center'>",(f=c.current)?f=f.call(b,{hash:{},data:e}):(f=b.current,f=typeof f===h?f.apply(b):f),g+=i(f)+" / ",(f=c.total)?f=f.call(b,{hash:{},data:e}):(f=b.total,f=typeof f===h?f.apply(b):f),g+=i(f)+"</div>\n\n            <div class='span3'>\n\n                <div class='btn-group pull-right'>\n                    <button type='button' id='first' class='btn'>First</button>\n                    <button type='button' id='previous' class='btn'>Previous</button>\n                    <button type='button' id='next' class='btn'>Next</button>\n                    <button type='button' id='last' class='btn'>Last</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.SnapshotTagsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n\n        <ul>\n\n            ",e={hash:{},inverse:l.noop,fn:l.program(2,g,b),data:b},(d=c.tags)?d=d.call(a,e):(d=a.tags,d=typeof d===j?d.apply(a):d),c.tags||(d=m.call(a,d,e)),(d||0===d)&&(f+=d),f+="\n\n        </ul>\n\n    "}function g(a,b){var d,e="";return e+="\n\n                <li>",(d=c.text)?d=d.call(a,{hash:{},data:b}):(d=a.text,d=typeof d===j?d.apply(a):d),e+=k(d)+" <button type='button' data-id='",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===j?d.apply(a):d),e+=k(d)+"' class='delete'>×</button></li>\n\n            "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<header>\n\n    <h1><i class='icon-tags icon-gray'></i> Tags</h1>\n\n    ",h=c["if"].call(b,b.tags,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="\n\n    <div class='input-append'>\n\n        <form>\n\n            <input type='text' data-id='tag' id='appendedInputButton' placeholder='New tag…'>\n            <button type='submit' data-id='create' class='btn'>+</button>\n\n        </form>\n\n    </div>\n\n</header>\n"}),this.Handlebars.templates.SnapshotsTimelineBottomContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i=c.helperMissing,j=this.escapeExpression;return h+="<div class='row'>\n\n    <div class='span2'>\n\n        <time>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.first,null==f||f===!1?f:f.snapshotTime),!1,g):i.call(b,"date",(f=b.first,null==f||f===!1?f:f.snapshotTime),!1,g)))+"</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='span3 pull-right'>\n\n        <time class='pull-right'>",g={hash:{},data:e},h+=j((f=c.date||b.date,f?f.call(b,(f=b.last,null==f||f===!1?f:f.snapshotTime),!1,g):i.call(b,"date",(f=b.last,null==f||f===!1?f:f.snapshotTime),!1,g)))+" (+ ",g={hash:{},data:e},h+=j((f=c.duration||b.duration,f?f.call(b,(f=b.last,null==f||f===!1?f:f.snapshotTime),(f=b.first,null==f||f===!1?f:f.snapshotTime),g):i.call(b,"duration",(f=b.last,null==f||f===!1?f:f.snapshotTime),(f=b.first,null==f||f===!1?f:f.snapshotTime),g)))+")</time>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.StudentsContainer=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="\n            <li><a href='/#/courses'>Courses</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/"+r((b=a.course,b=null==b||b===!1?b:b.id,typeof b===q?b.apply(a):b))+"'>"+r((b=a.course,b=null==b||b===!1?b:b.name,typeof b===q?b.apply(a):b))+"</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/"+r((b=a.course,b=null==b||b===!1?b:b.id,typeof b===q?b.apply(a):b))+"/exercises'>Exercises</a> <span class='divider'>/</span></li>\n            <li><a href='/#/courses/"+r((b=a.course,b=null==b||b===!1?b:b.id,typeof b===q?b.apply(a):b))+"/exercises/"+r((b=a.exercise,b=null==b||b===!1?b:b.id,typeof b===q?b.apply(a):b))+"'>"+r((b=a.exercise,b=null==b||b===!1?b:b.name,typeof b===q?b.apply(a):b))+"</a> <span class='divider'>/</span></li>\n        "}function g(a){var b,c="";return c+=" "+r((b=a.course,b=null==b||b===!1?b:b.name,typeof b===q?b.apply(a):b))+" — "+r((b=a.exercise,b=null==b||b===!1?b:b.name,typeof b===q?b.apply(a):b))+" — "}function h(){return"\n                    <th>Courses</th>\n                "}function i(a,b,d){var e,f,g,h="";return h+="\n\n                <tr>\n\n                    <td class='index'>",g={hash:{},data:b},h+=r((e=c.index||a.index,e?e.call(a,(e=b,null==e||e===!1?e:e.index),g):s.call(a,"index",(e=b,null==e||e===!1?e:e.index),g)))+"</td>\n\n                    ",f=c["if"].call(a,d.course,{hash:{},inverse:t.program(10,k,b),fn:t.programWithDepth(8,j,b,d),data:b}),(f||0===f)&&(h+=f),h+="\n\n                    ",f=c.unless.call(a,d.course,{hash:{},inverse:t.noop,fn:t.program(12,l,b),data:b}),(f||0===f)&&(h+=f),h+="\n\n                </tr>\n\n            "}function j(a,b,d){var e,f,g="";return g+="\n\n                        <td class='link'><a href='#/courses/"+r((e=d.course,e=null==e||e===!1?e:e.id,typeof e===q?e.apply(a):e))+"/exercises/"+r((e=d.exercise,e=null==e||e===!1?e:e.id,typeof e===q?e.apply(a):e))+"/students/",(f=c.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===q?f.apply(a):f),g+=r(f)+"/snapshots'>",(f=c.name)?f=f.call(a,{hash:{},data:b}):(f=a.name,f=typeof f===q?f.apply(a):f),g+=r(f)+"</a></td>\n\n                    "}function k(a,b){var d,e="";return e+="\n\n                        <td class='link'><a href='#/students/",(d=c.id)?d=d.call(a,{hash:{},data:b}):(d=a.id,d=typeof d===q?d.apply(a):d),e+=r(d)+"/courses'>",(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===q?d.apply(a):d),e+=r(d)+"</a></td>\n\n                    "}function l(a){var b,c="";return c+="\n                        <td>"+r((b=a.courses,b=null==b||b===!1?b:b.length,typeof b===q?b.apply(a):b))+"</td>\n                    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var m,n,o,p="",q="function",r=this.escapeExpression,s=c.helperMissing,t=this,u=c.blockHelperMissing;return p+="<section>\n\n    <ul class='breadcrumb'>\n        <li><a href='/'>Home</a> <span class='divider'>/</span></li>\n\n        ",m=c["if"].call(b,b.course,{hash:{},inverse:t.noop,fn:t.program(1,f,e),data:e}),(m||0===m)&&(p+=m),p+="\n\n        <li class='active'>Students</li>\n    </ul>\n\n    <h2>",m=c["if"].call(b,b.course,{hash:{},inverse:t.noop,fn:t.program(3,g,e),data:e}),(m||0===m)&&(p+=m),p+=" Students ("+r((m=b.students,m=null==m||m===!1?m:m.length,typeof m===q?m.apply(b):m))+")</h2>\n\n    <table class='table table-hover'>\n\n        <thead>\n            <tr>\n\n                <th>#</th>\n                <th>Name</th>\n\n                ",n=c.unless.call(b,b.course,{hash:{},inverse:t.noop,fn:t.program(5,h,e),data:e}),(n||0===n)&&(p+=n),p+="\n\n            </tr>\n        </thead>\n\n        <tbody>\n\n            ",o={hash:{},inverse:t.noop,fn:t.programWithDepth(7,i,e,b),data:e},(n=c.students)?n=n.call(b,o):(n=b.students,n=typeof n===q?n.apply(b):n),c.students||(n=u.call(b,n,o)),(n||0===n)&&(p+=n),p+="\n\n        </tbody>\n\n    </table>\n\n</section>\n"});