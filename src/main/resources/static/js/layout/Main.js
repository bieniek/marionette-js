define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var MainLayout = Marionette.LayoutView.extend({
	  el: '#app',
	  
	  template: 'script#tpl_app',
	 
	  regions: {
		  menu: "#menu",
		  content: "#content",
		  filter: "#filter"
			  
	  }		  
	});		
	
	
	
	return MainLayout
});