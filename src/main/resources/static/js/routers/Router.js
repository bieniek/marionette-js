define(['backbone', 'marionette'], function(Backbone, Marionette) {
	
	var Router = Marionette.AppRouter.extend({
		appRoutes: {
			'hello': 'hello',
			'*filter': 'filterItems'
		}
	});
	
	return Router;
});