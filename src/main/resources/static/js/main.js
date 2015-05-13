define(['jquery', 'underscore', 
        'backbone', 'marionette', 'main', 
        'layout/Main', 'layout/SubMain', 'controllers/Main', 'controllers/Doc', 'controllers/Doc', 
        'routers/Router', 'routers/SubRouter',
        'views/SimpleViews', 'views/HeaderView'], 
		function($, _, Backbone, Marionette, Main, MainLayout, SubMainLayout, 
				MainController, SubController, DocController, 
				Router, SubRouter, 
				SimpleViews, HeaderView) {
				
	var app = new Marionette.Application();
	
	app.navigate = function(route,  options) {
		console.log('router', route, options);
	    options || (options = {});
	    Backbone.history.navigate(route, options);
	 };
	
	app.on('start', function() {				
		var mainRouter = new Router({controller:new MainController()});
		
		//var subRouter = new SubRouter({controller:new SubController()});
		
		var layout = new MainLayout();								
		layout.render();
		
		//menu stays with us all the time!
		layout.getRegion('menu').show(new HeaderView());				
				
		//store layout in app
		app.layout = layout;
		
		Backbone.history.start();
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
	
	var commands = new Backbone.Wreqr.Commands();
	commands.setHandler("logMessage", function(message){
		console.log(message);
	});
	
	return app;
	
	//app.start();	
});
