var Example3 = {
	load: function() {
		this.background = Tiara.graphics.newImage('./images/bg.jpg');
		this.dot_sprite = Tiara.graphics.newImage('./images/dot.png');
				
		this.player = {
			score: 0,
			x: Tiara.graphics.getWidth() / 2 - 19.5,
			y: 400,
			speed_x: 3,
			velocity_x: 0,
			max_velocity_x: 1.2,
			width: 39,
			height: 39,
			state: 'ship_idle',
			animations: {
				'ship_idle': Tiara.graphics.newImage('./images/ship_idle.png'),
				'ship_idle_left': Tiara.graphics.newImage('./images/ship_idle_left.png'),
				'ship_idle_right': Tiara.graphics.newImage('./images/ship_idle_right.png')
			}
		};
		
		this.max_dots = 10;
		this.dots = [];
		for (var i = 0; i < this.max_dots; i += 1) {
			this.dots.push({
				x: Math.floor(Math.random() * Tiara.graphics.getWidth() - 14),
				y: 1,
				velocity_x: Math.floor((this.player.score + 20 - this.player.score + 15 * Math.random() + this.player.score + 15)),
				velocity_y: Math.floor((this.player.score + 20 - this.player.score + 15 * Math.random() + this.player.score + 15))
			});
		};
		
		Tiara.load(this);
	},
	
	draw: function() {
		/* Draw the Background */
		Tiara.graphics.draw(this.background, 0, 0);
		
		/* Draw the Player */
		Tiara.graphics.draw(this.player.animations[this.player.state], this.player.x, this.player.y);
		
		/* Draw all of the dots */
		for (var i = 0; i < this.dots.length; i+= 1) {
			Tiara.graphics.draw(this.dot_sprite, this.dots[i].x, this.dots[i].y);
		}
		
		/* Debug Information */
		Tiara.graphics.setColor(255, 255, 255);
		Tiara.graphics.print('FPS: ' + Tiara.timer.getFPS(), 5, 475);
		Tiara.graphics.print('Score: ' + this.player.score, 60, 475);
	},
	
	update: function(dt) {
		/* Player Movement Updates */
		if (Tiara.keyboard.isDown('right')) {
			this.player.state = 'ship_idle_right';
			
			this.player.velocity_x += this.player.speed_x * dt;
			if (this.player.velocity_x > this.player.max_velocity_x) {
				this.player.velocity_x = this.player.max_velocity_x;
			}
		} else if (Tiara.keyboard.isDown('left')) {
			this.player.state = 'ship_idle_left';
			
			this.player.velocity_x -= this.player.speed_x * dt;
			if (this.player.velocity_x < -this.player.max_velocity_x) {
				this.player.velocity_x = -this.player.max_velocity_x;
			}
		} else {
			this.player.state = 'ship_idle';
		}
		
		/* Bind the player to the screen */
		this.player.x += this.player.velocity_x;
		if (this.player.x <= 0) {
			this.player.x = 0;
			this.player.velocity_x = 0;
		} else if (this.player.x >= Tiara.graphics.getWidth() - 39) {
			this.player.x = Tiara.graphics.getWidth() - 39;
			this.player.velocity_x = 0;
		}
		
		/* Dot Movement Updates */
		for (var i = 0; i < this.dots.length; i+= 1) {
			this.dots[i].x += this.dots[i].velocity_x * dt;
			this.dots[i].y += this.dots[i].velocity_y * dt;
			
			/* Bind the dots to the screen */
			if ((this.dots[i].x >= Tiara.graphics.getWidth() - 15) || (this.dots[i].x <= 0)) {
				this.dots[i].velocity_x *= -1;
			}
			
			if ((this.dots[i].y >= Tiara.graphics.getHeight() - 15) || (this.dots[i].y <= 0)) {
				this.dots[i].velocity_y *= -1;
			}
			
			/* Is the dot colliding with the player */
			if ((this.dots[i].x >= this.player.x) && (this.dots[i].y >= this.player.y) && (this.dots[i].x + 15 <= this.player.x + this.player.width) && (this.dots[i].y + 15 <= this.player.y + this.player.width)) {
				this.dots.splice(i, 1);
				this.player.score += 10;
			}
			
			/* Do we need more dots? */
			if (this.dots.length < this.max_dots) {
				this.dots.push({
					x: Math.floor(Math.random() * Tiara.graphics.getWidth() - 14),
					y: 1,
					velocity_x: Math.floor((this.player.score + 20 - this.player.score + 15 * Math.random() + this.player.score + 15)),
					velocity_y: Math.floor((this.player.score + 20 - this.player.score + 15 * Math.random() + this.player.score + 15))
				});
			}
		}
	
	},
	
	keyreleased: function(key, unicode) {
		if (key == 'escape') {
			Tiara.event.push('q');
		}
	}
}

Example3.load();