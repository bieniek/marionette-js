define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var SimpleViews = {};
	
	SimpleViews.Simple = Backbone.Marionette.ItemView.extend({		
		template : _.template('So simple'),
		
		onRender: function () {
			//this.$el.html('hello___');
		}
	});
	
	SimpleViews.Creazy = Backbone.Marionette.ItemView.extend({		
		template : _.template('So Creazy'),
		
		onRender: function () {
			//this.$el.html('hello___');
		}
	});
	
	return SimpleViews;
});