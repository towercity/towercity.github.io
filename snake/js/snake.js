//Snake object

var Snake = function() {
	this.speed = 100;
};

Snake.prototype.init = function() {
	var self = this;

	this.createSnake();

	//pulls in keystrokes to control snake
	window.addEventListener('keydown', function(e) {
		if (e.keyCode === 38 && self.direction != 3) {
			self.direction = 2; //up
		} else if (e.keyCode === 40 && self.direction != 2) {
			self.direction = 3; //down
		} else if (e.keyCode === 37 && self.direction !== 0) {
			self.direction = 1; //left
		} else if (e.keyCode === 39 && self.direction != 1) {
			self.direction = 0; //right
		}
	});
};

Snake.prototype.createSnake = function() {
	//starting gameplay variables
	this.score = 0;
	this.level = 1;
	this.direction = 0;
	this.active = true;

	//the array of whose length contains our snake
	this.body = new Array(3);
};

Snake.prototype.gameOver = function() {
	this.body = null;
};
