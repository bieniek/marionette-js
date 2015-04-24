define(['backbone', 'marionette', 'views/SimpleViews', 'views/HeaderView', 'views/FilterView'], 
		function(Backbone, Marionette, SimpleViews, HeaderView, FilterView) {
	
	var MainController = Marionette.Controller.extend({
		initialize: function () {
			console.log('Controller initialized');
		},
		
		start: function(app) {
			this.app = app;
			console.log('start controller');
			app.root.getRegion('menu').show(new HeaderView());
			app.root.getRegion('content').show(new SimpleViews.Simple());
			app.root.getRegion('filter').show(new FilterView());
		},
		
		//response to routs - see router;
		filterItems: function (filter) {			
			console.log('route filter', filter);
			this.app.root.getRegion('content').show(new SimpleViews.Creazy());
		}
	
	});
	
	return MainController;
})