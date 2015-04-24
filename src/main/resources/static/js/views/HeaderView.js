define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var HeaderView = Backbone.Marionette.ItemView.extend({		
		template : 'script#tpl_main_content',
		
		onRender: function () {
			//this.$el.html('hello___');
		}
	});
	
	return HeaderView;
});