var Tiara_Timer = {
	frames: 0,
	prevTime: (new Date).getTime(),
	currTime: (new Date).getTime(),
	dt: 0,
	prevFpsUpdate: 0,
	fpsUpdateFrequency: 1,
	fps: 0,
	
	getDelta: function() {
		return this.dt;
	},
	
	getFPS: function() {
		return this.fps;
	},
	
	getTime: function() {
		return (new Date).getTime();
	},
	
	step: function() {
		this.frames += 1;
		this.prevTime = this.currTime;
		this.currTime = this.getTime();
		this.dt = (this.currTime - this.prevTime) / 1000.0;
		
		if ((this.currTime - this.prevFpsUpdate) / 1000.0 > this.fpsUpdateFrequency) {
			this.fps = this.frames / this.fpsUpdateFrequency;
			this.prevFpsUpdate = this.currTime;
			this.frames = 0;
		}
	}
};