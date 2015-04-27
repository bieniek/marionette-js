define(['backbone', 'marionette', 'views/SimpleViews', 'views/HeaderView', 'views/FilterView'], 
		function(Backbone, Marionette, SimpleViews, HeaderView, FilterView) {
	
	var DocController = function() { // Marionette.Controller.extend({
		this.initialize = function () {
			console.log('Controller initialized');
		}	
		
		this.start = function(app) {
			this.app = app;
		}
		
		//response to routs - see router;
		this.hello = function () {			
			console.log('route hello');
			this.app.root.getRegion('content').show(new SimpleViews.Hello());
		};
	
	} //);
	
	return DocController;
})