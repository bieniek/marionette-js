define(['jquery', 'underscore', 'backbone', 'marionette', 'main', 'layout/Main', 'controllers/Main', 'routers/Router'], 
		function($, _, Backbone, Marionette, Main, MainLayout, MainController, Router) {
			
	var AppScaffold = Marionette.Application.extend({		
		setRootLayout: function() {
		    this.root = new MainLayout();
		}	
	});
	
	var app = new AppScaffold();
	
	app.on('start', function() {		
		app.setRootLayout();				
		Backbone.history.start();
				
		var controller = new MainController();		
		controller.router = new Router({
			controller: controller
		});
		
		console.log('Router', controller.router);
		
		controller.start(this);
		
		console.log('Application started');
	});
		
	app.start();
});
