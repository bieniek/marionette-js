define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var FilterView = Backbone.Marionette.ItemView.extend({		
		template : 'script#tpl_filter',
		
		onRender: function () {
			//this.$el.html('hello___');
		}
	});
	
	return FilterView;
});