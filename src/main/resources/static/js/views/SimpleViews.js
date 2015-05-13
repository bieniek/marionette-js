define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var SimpleViews = {};
	
	SimpleViews.Simple = Backbone.Marionette.ItemView.extend({		
		template : _.template('So simple'),
		
		
	});
	
	SimpleViews.Creazy = Backbone.Marionette.ItemView.extend({		
		template : _.template('<div id="show_shelf">Show shelf</div><div id="hide_shelf">Hide shelf</div>'),
		
		events: {
			'click #show_shelf':'show_shelf',
			'click #hide_shelf':'hide_shelf'
		},
	
		show_shelf: function() {			
			Backbone.Wreqr.radio.channel('global').vent.trigger('ui:show_shelf');
		},
		
		hide_shelf: function() {
			Backbone.Wreqr.radio.channel('global').vent.trigger('ui:hide_shelf');
		}
		
		
	});
	
	SimpleViews.Hello = Backbone.Marionette.ItemView.extend({		
		template : _.template('Hello !!!!'),
				
	});
	
	return SimpleViews;
});