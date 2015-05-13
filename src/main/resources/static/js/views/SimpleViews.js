define(['../main', 'backbone', 'marionette'], function(App, Backbone, Marionette) {
	var SimpleViews = {};
	
	SimpleViews.Simple = Backbone.Marionette.ItemView.extend({		
		template : _.template('So simple'),
	});
	
	SimpleViews.Creazy = Backbone.Marionette.ItemView.extend({		
		template : _.template('Creazy'),
	});
	
	SimpleViews.Hello = Backbone.Marionette.ItemView.extend({		
		template : _.template('Hello !!!!'),
				
	});
	
	return SimpleViews;
});