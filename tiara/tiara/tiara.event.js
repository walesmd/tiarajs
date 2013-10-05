var Tiara_Event = {
	Event: {
		'kp': function(a) { Tiara.keypressed(a); },
		'q': function() { Tiara.running = false; }
	},
	
	
	'push': function(e, a, b, c) {
		if (this.Event[e]) {
			this.Event[e](a, b, c);
		}
	}
};