app.directive( 'selectplugin', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).select2();
		}
	};
});

app.directive( 'ultratable', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).dataTable();
		}
	}
});