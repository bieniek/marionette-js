define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var HeaderView = Backbone.Marionette.ItemView.extend({		
		template : 'script#tpl_menu',
		
		events: {
			'click #show_shelf':'show_shelf',
			'click #hide_shelf':'hide_shelf',
			'click #say_hello': 'say_hello'
		},
	
		show_shelf: function() {			
			Backbone.Wreqr.radio.channel('global').vent.trigger('ui:show_shelf');
		},
		
		hide_shelf: function() {
			Backbone.Wreqr.radio.channel('global').vent.trigger('ui:hide_shelf');
		}
	});
	
	return HeaderView;
});