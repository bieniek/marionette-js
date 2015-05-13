define(['backbone', 'marionette'], function(Backbone, Marionette) {
	var SubMainLayout = Marionette.LayoutView.extend({
		template: 'script#tpl_sub_app',
		
		regions: {
			shelf:'#shelf',
			body: '#body'
		}
	});
	
	return SubMainLayout;
});