define(['jquery', 'underscore', 'backbone', 'marionette', 'main', 'layout/Main', 'controllers/Main', 'controllers/Doc', 'routers/Router'], 
		function($, _, Backbone, Marionette, Main, MainLayout, MainController, DocController, Router) {
			
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
		controller.start(this);
		
		var dc = new DocController();
		dc.start(this);
		
		
		var router = new Router({
			controller: _.extend({}, controller, dc)
		});			
		
		console.log('Application started');
	});
		
	app.start();
});
