casper.test.begin('List view filter', 3, function suite(test) {

    mockData = {
        'tagnames': [],
        'tagcategories': [],
        'comments\\?page=0&size=1': [],
        'courses': [
            {id: 11, name: '<b><i>Course åäö</i></b>', exercises: [{}, {}], amountOfStudents: 4},
            {id: 12, name: 'course 2', exercises: [{}, {}, {}], amountOfStudents: 5}
        ],

        'studentgroups': [],
    };

    casper.start('http://localhost:8000');

    casper.then(function() {

        this.clickLabel('Courses', 'a');
        this.waitForSelector('#courses-container');
    });

    casper.then(function() {

        this.echo('Searching courses with string "äÖ</i>"');
        this.sendKeys('#courses-container input', 'äÖ</i>');

        test.assertVisible('tbody tr:first-child', 'has "<b><i>Course åäö</i></b>" row visible');
        test.assertNotVisible('tbody tr:last-child', 'has "course 2" row invisible');
        var highlighted = '<a href="./#/courses/11/">&lt;b&gt;&lt;i&gt;Course å<span class="search-highlight">äö&lt;/i&gt;</span>&lt;/b&gt;</a>';
        test.assertTruthy(this.getHTML().indexOf(highlighted) !== -1, 'has search string highlighted with correct html escaping');
    });

    casper.run(function() {

        this.echo('');
        test.done();
    });
});