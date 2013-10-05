var Example2 = {
	prototype: Tiara,

	load: function() {
		this.square = {
			x: Tiara.graphics.getWidth() / 2 - 24,
			y: Tiara.graphics.getHeight() / 2 - 24,
			width: 48,
			height: 48,
			velocity_x: 300,
			velocity_y: 300
		}

		Tiara.load(this);
	},
	
	draw: function() {
		var guy = Tiara.graphics.newImage('8bit.png');
		Tiara.graphics.draw(guy, 200, 200);
		
		Tiara.graphics.triangle('fill', 10, 100, 20, 100, 15, 50);
	
		Tiara.graphics.line(0, 0, Tiara.graphics.getWidth(), Tiara.graphics.getHeight());
	
		Tiara.graphics.setColor(200, 0, 0);
		Tiara.graphics.circle('line', 100, 100, 20);
		
		Tiara.graphics.setColor(0, 0, 0);
		Tiara.graphics.rectangle('fill', this.square.x, this.square.y, this.square.width, this.square.height);
		
		Tiara.graphics.print('FPS: ' + Tiara.timer.getFPS(), 0, 475);
	},
	
	update: function(dt) {
		this.square.x += this.square.velocity_x * dt;
		this.square.y += this.square.velocity_y * dt;
		
		if ((this.square.x >= Tiara.graphics.getWidth() - this.square.width) || (this.square.x <= 0)) {
			this.square.velocity_x *= -1;
		}
		
		if ((this.square.y >= Tiara.graphics.getHeight() - this.square.height) || (this.square.y <= 0)) {
			this.square.velocity_y *= -1;
		}
	},
	
	keyreleased: function(key) {
		if (key == 'escape') { 
			Tiara.event.push('q');
		}
	}
}

Example2.load();