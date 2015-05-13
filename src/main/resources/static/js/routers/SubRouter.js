define(['backbone', 'marionette'], function(Backbone, Marionette) {
	
	var SubRouter = Marionette.AppRouter.extend({
		appRoutes: {
			"say_hello": "hello"	
		}
	});
		
 	return SubRouter;
});