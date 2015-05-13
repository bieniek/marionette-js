define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var SimpleViews = {};
	
	SimpleViews.Simple = Backbone.Marionette.ItemView.extend({		
		template : _.template('So simple'),
		
		
	});
	
	SimpleViews.Creazy = Backbone.Marionette.ItemView.extend({		
		template : _.template('So Creazy'),
		
		
	});
	
	SimpleViews.Hello = Backbone.Marionette.ItemView.extend({		
		template : _.template('Hello !!!!'),
				
	});
	
	return SimpleViews;
});