describe('Students view', function () {

    var studentsView = new codebrowser.view.StudentsView();

    it('should have correct id', function () {

        expect(studentsView.id).toEqual('students-container');
    });

    it('should have correct template', function () {

        expect(studentsView.template).toBe(Handlebars.templates.StudentsContainer);
    });
    
    
    it('should return search query from input field', function() {
		
		var myStudentsView = new codebrowser.view.StudentsView();
		myStudentsView.$el = $('<div><input data-id="query-string" value="dent_100" /></div>');
		
		expect(myStudentsView._getQueryString()).toEqual('dent_100');
	});
	
	it('should return trimmed search query from input field', function() {
		
		var myStudentsView = new codebrowser.view.StudentsView();
		myStudentsView.$el = $('<div><input data-id="query-string" value="&nbsp;some-value" /></div>');
		
		expect(myStudentsView._getQueryString()).toEqual('some-value');
	});

    it('should return node text matches', function() {
		
		var $node = $('<a href="#">abba</a>');
		
		expect(studentsView._nodeTextMatches($node, 'bba')).toBe(true);
	});
	
	it('should not return node text matches', function() {
		
		var $node = $('<a href="#">abba</a>');
		
		expect(studentsView._nodeTextMatches($node, 'bbba')).toBe(false);
	});
	
	it('should not return node text matches text in href', function() {
		
		var $node = $('<a href="abba">acca</a>');
		
		expect(studentsView._nodeTextMatches($node, 'abba')).toBe(false);
	});
	
	it('should highlight the matched part inside given node', function() {
		
		var $node = $('<a href="#">i got needle in my haystack</a>');
		
		studentsView._highlightMatch($node, 'needle');
		
		expect($node.html()).toEqual('i got <span class="search-highlight">needle</span> in my haystack');
	});
});
