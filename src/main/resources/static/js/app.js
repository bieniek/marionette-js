requirejs.config({
	paths: {
		jquery: "/js/libs/jquery-2.1.3",		
		underscore: "/js/libs/underscore",
		backbone: "/js/libs/backbone",
		layoutmanager: "/js/libs/backbone.layoutmanager",
		marionette: "/js/libs/backbone.marionette",
		'backbone.babysitter': '/js/libs/backbone.babysitter',
        'backbone.wreqr': '/js/libs/backbone.wreqr',
		d3: '/js/libs/d3',
		nvd3: '/js/libs/nv.d3'
	},
	
	shim: {				
		backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette : {
        	deps: ['backbone'],
        	exports: 'Marionette'
        }
	}
});

requirejs(['main']);

