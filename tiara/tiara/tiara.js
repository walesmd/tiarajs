var Tiara = {
	graphics: Tiara_Graphics,
	'event': Tiara_Event,
	keyboard: Tiara_Keyboard,
	timer: Tiara_Timer,
	running: true,
	
	load: function(game) {
		this.game = game;
		
		myself = this;
		myself.update();
		setInterval('myself.update()', 1);
	},
	
	draw: function() {
		this.graphics.clear();
		this.game.draw();
	},
	
	update: function() {
		if (this.running) {	
			this.timer.step();
			this.game.update(this.timer.getDelta());
			this.draw();
		}
	},
	
	keypressed: function(key, unicode) {
		Tiara.keyboard.currentKey = key;
		if (typeof this.game.keypressed === 'function') {
			this.game.keypressed(key, unicode);
		}
	},
	
	keyreleased: function(key, unicode) {
		Tiara.keyboard.currentKey = '';
		if (typeof this.game.keyreleased === 'function') {
			this.game.keyreleased(key, unicode);
		}
	}
};

document.onkeydown = function(event) {
	keyCode = event.keyCode;
	if (event.shiftKey) {
		keyCode = 'S' + event.keyCode;
	}
	Tiara.keypressed(Tiara.keyboard.KeyConstant[keyCode], keyCode);
}

document.onkeyup = function(event) {
	keyCode = event.keyCode;
	if (event.shiftKey) {
		keyCode = 'S' + event.keyCode;
	}
	Tiara.keyreleased(Tiara.keyboard.KeyConstant[keyCode], keyCode);
};