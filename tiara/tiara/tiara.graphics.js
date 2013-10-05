var Tiara_Graphics = {
	backgroundColor: {
		r: 255, 
		g: 255, 
		b: 255
	},
	canvas: document.getElementById('tiara'),
	color: {
		r: 0,
		g: 0,
		b: 0
	},

	init: function() {
		this.canvasContext = this.canvas.getContext('2d');
		this.clear();
	},
	
	circle: function(mode, x, y, radius, segments) {
		this.canvasContext.beginPath();
		this.canvasContext.arc(x, y, radius, 0, Math.PI * 2, false);
		if (mode === 'line') {
			this.canvasContext.stroke();
		} else if (mode === 'fill') {
			this.canvasContext.fill();
		}
	},
	
	clear: function() {
		this.canvasContext.fillStyle = "rgb(" + this.backgroundColor.r + ", " + this.backgroundColor.g + ", " + this.backgroundColor.b + ")";
		this.canvasContext.fillRect(0, 0, this.getWidth(), this.getHeight());
		
		// Set the fillStyle back to the primary color
		this.canvasContext.fillStyle = "rgb(" + this.color.r + ", " + this.color.g + ", " + this.color.b + ")";
	},
	
	draw: function(image, x, y) {
		this.canvasContext.drawImage(image, x, y);
	},
	
	getBackgroundColor: function() {
		return this.backgroundColor;
	},
	
	getCaption: function() {
		return document.title;
	},
	
	getColor: function() {
		return this.color;
	},
	
	getHeight: function() {
		return this.canvas.height;
	},
	
	getWidth: function() {
		return this.canvas.width;
	},
	
	line: function(x1, y1, x2, y2) {
		this.canvasContext.beginPath();
		this.canvasContext.moveTo(x1, y1);
		this.canvasContext.lineTo(x2, y2);
		this.canvasContext.stroke();
	},
	
	newImage: function(filename) {
		var img = new Image();
		img.src = filename;
		return img;
	},
	
	print: function(text, x, y, r, sx, sy) {
		this.canvasContext.fillText(text, x, y);
	},
	
	point: function(x, y) {
		this.canvasContext.fillRect(x, y, 1, 1);
	},
	
	rectangle: function(mode, x, y, width, height) {
		if (mode === 'line') {
			this.canvasContext.strokeRect(x, y, width, height);
		} else if (mode === 'fill') {
			this.canvasContext.fillRect(x, y, width, height);
		}
	},
	
	setBackgroundColor: function(r, g, b) {
		this.backgroundColor = {r: r, g: g, b: b};
	},
	
	setCaption: function(caption) {
		document.title = caption;
	},
	
	setColor: function(r, g, b) {
		this.color = {r: r, g: g, b: b};
		this.canvasContext.fillStyle = "rgb(" +  this.color.r + ", " + this.color.g + ", " + this.color.b + ")";
		this.canvasContext.strokeStyle = "rgb(" +  this.color.r + ", " + this.color.g + ", " + this.color.b + ")";
	},
	
	triangle: function(mode, x1, y1, x2, y2, x3, y3) {
		this.canvasContext.beginPath();
		this.canvasContext.moveTo(x1, y1);
		this.canvasContext.lineTo(x2, y2);
		this.canvasContext.lineTo(x3, y3);
		this.canvasContext.closePath();
		
		if (mode === 'line') {
			this.canvasContext.stroke();
		} else if (mode === 'fill') {
			this.canvasContext.fill();
		}
	}
};

Tiara_Graphics.init();