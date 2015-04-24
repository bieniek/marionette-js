define(['backbone', 'marionette'], function(Backbone, Marionette) {
	
	var Router = Marionette.AppRouter.extend({
		appRoutes: {
			'*filter': 'filterItems'
		}
	});
	
	return Router;
});