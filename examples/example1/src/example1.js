var Example1 = {
	prototype: Tiara,

	load: function() {
		Tiara.graphics.setBackgroundColor(0, 0, 0);
		Tiara.graphics.setColor(0, 0, 0);
		
		this.blocks = [];
		this.max_blocks = 1000;
		
		Tiara.load(this);
	},
	
	draw: function() {
		var blocks_length = this.blocks.length;
		for (i = 0; i < blocks_length; i++) {
			var block = this.blocks[i];
			Tiara.graphics.setColor(block[2].r, block[2].g, block[2].b);
			Tiara.graphics.point(block[0], block[1]);
		}
	},
	
	update: function() {
		// This will draw a black dot at a random point
		var x = Math.floor(Math.random() * Tiara.graphics.getWidth());
		var y = Math.floor(Math.random() * Tiara.graphics.getHeight());
		
		var color = {
			r: Math.floor(Math.random() * 255),
			g: Math.floor(Math.random() * 255),
			b: Math.floor(Math.random() * 255)
		};
		
		if (this.blocks.length >= this.max_blocks) {
			this.blocks.shift();
		}
		
		this.blocks.push([x, y, color]);
	},
	
	keypressed: function(key, unicode) {
		if (key == 'escape') {
			Tiara.event.push('q');
		}
	}
}

Example1.load();