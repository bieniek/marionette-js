define(['jquery', 'underscore', 'backbone', 'marionette', 'main', 'layout/Main', 'layout/SubMain', 'controllers/Main', 'controllers/Doc', 
        'routers/Router',
        'views/SimpleViews'], 
		function($, _, Backbone, Marionette, Main, MainLayout, SubMainLayout, MainController, DocController, Router, SimpleViews) {
				
	var app = new Marionette.Application();
	
	app.navigate = function(route,  options) {
		console.log('router', route, options);
	    options || (options = {});
	    Backbone.history.navigate(route, options);
	 };
	
	app.on('start', function() {				
		var mainRouter = new Router({controller:new MainController()});		
		
		var layout = new MainLayout();								
		layout.render();
		
		//menu stays with us all the time!
		layout.getRegion('menu').show(new SimpleViews.Creazy());				
				
		//store layout in app
		app.layout = layout;
		console.log('started ....');				
	});
	
	var channel = Backbone.Wreqr.radio.channel('global');
	
	//Change layouts on events.
	channel.vent.on('ui:show_shelf', function() {
		app.layout.getRegion('content').show(new SubMainLayout());
	});
	
	channel.vent.on('ui:hide_shelf', function() {
		app.layout.getRegion('content').show(new SimpleViews.Hello());
	});
	
	
	app.start();
	
});
