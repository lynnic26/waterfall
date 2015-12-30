define(function(require, exports, module) {
	var waterfall = require('./waterfall');

	window.onload = function() {
	    
	    //some emulated json data 
		var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
	    
	    //initiate data
	    waterfall.init('main', 'box');

	}
});
