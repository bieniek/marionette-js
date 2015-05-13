define(['backbone', 'marionette'], function(Backbone, Marionette) {
	
	var Router = Marionette.AppRouter.extend({
		appRoutes: {
			//'hello': 'hello',
			//'active': 'filterItems',
			//'creazy': 'filterItems'
			"": "filterItems",
			"index": "showView"
		}
	});
	
	
	
 	return Router;
});