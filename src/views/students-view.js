codebrowser.view.StudentsView = Backbone.View.extend({

    id: 'students-container',
    template: Handlebars.templates.StudentsContainer,
    
    events: {
			'click [data-action="search"]': 'filterStudentListByName',
			'keyup [data-id="query-string"]': 'filterStudentListByName',
			'keypress [data-id="query-string"]': 'filterStudentListByName'
	 },

    /* Render */

    render: function () {

        // View attributes
        var attributes = {

            students: this.collection.toJSON()

        }

        if (this.course && this.exercise) {
            attributes = _.extend(attributes, { course: this.course.toJSON(), exercise: this.exercise.toJSON() });
        }

        // Template
        var output = this.template(attributes);

        this.$el.html(output);
    },
    
    
    filterStudentListByName: function () {
		  var rowSelector = 'tbody tr';
		  var rowStudentNameCellSelector = 'td:eq(1) a';
		 
		  var query  = this._getQueryString();
		 
		  var $tableRows = this.$el.find(rowSelector);
		 
		  // first show all and clean highlights
		  $tableRows.each(function() {
			  $(this).show();
			  $(this).find(rowStudentNameCellSelector).html( $(this).find(rowStudentNameCellSelector).text() );
		  });
		  
		  
		  if (query !== '') {
			  
			  var that = this;
			  
			  $tableRows.each(function() {
					
					var $nameCell = $(this).find(rowStudentNameCellSelector);
					
					if ( that._nodeTextMatches($nameCell, query) ) {
						that._highlightMatch($nameCell, query);
					} else {
						$nameCell.html( $nameCell.text() );
						$(this).hide();
					}
					
			  });
			  
		  }
	 },
	 
	 _getQueryString: function () {
		 
		 return this.$el.find('input[data-id="query-string"]').val().trim();
	 },
	 
	 _nodeTextMatches: function ($node, query) {
		 
		 return $node.text().indexOf(query) !== -1;
	 },
	 
	 _highlightMatch: function ($node, query) {
		 // wrap matched part of nodes text in span
		 
		 var text = $node.text();
		 var i = text.indexOf(query);
		 var l = query.length;
		 
		 var highlighted = text.substring(0, i) + '<span class="search-highlight">' + query + '</span>' + text.substring(i+l);
		 
		 $node.html( highlighted );
	 }
	 
	 
});
