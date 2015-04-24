define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var MainLayout = Backbone.Marionette.LayoutView.extend({
	  el: '#app',
	 
	  regions: {
		  menu: "#menu",
		  content: "#content",
		  filter: "#filter"
			  
	  }
	});		
	
	return MainLayout
});