//Map object

var Map = function() {
	//canvas variables
	this.canvas = document.getElementById('game-area');
	this.ctx = this.canvas.getContext('2d');
};

Map.prototype.init = function(snake) {
  //the intro screen
  this.ctx.fillStyle = 'black';
	this.ctx.font = '16px sans-serif';
	this.ctx.fillText('Welcome to Online Snake', ((this.canvas.width / 2) - (this.ctx.measureText('Welcome to Online Snake').width / 2)), (this.canvas.height / 2));

	this.ctx.font = '14px sans-serif';
	this.ctx.fillText('Press the shift key to begin', ((this.canvas.width / 2) - (this.ctx.measureText('Press the shift key to begin').width / 2)), ((this.canvas.height / 2) + 25));

	this.startGame(snake);
};

Map.prototype.render = function(snake) {
	var self = this;

	//moves down the snake pieces, starting at the bottom
	for (var i = snake.body.length - 1; i >= 0; i--) {

		//functions for the snake's head (snake[0])
		if (i === 0) {
			//moves the snake
			switch (snake.direction) {
				case 0: //right
					snake.body[0] = {x: snake.body[0].x + 1, y: snake.body[0].y};
					break;
				case 1: //left
					snake.body[0] = {x: snake.body[0].x - 1, y: snake.body[0].y};
					break;
				case 2: //up
					snake.body[0] = {x: snake.body[0].x, y: snake.body[0].y - 1};
					break;
				case 3: //down
					snake.body[0] = {x: snake.body[0].x, y: snake.body[0].y + 1};
					break;
			}

			//checks if snake is out of bounds, returns game over
			if (snake.body[0].x < 0 || snake.body[0].x >= mapSize ||
					snake.body[0].y < 0 || snake.body[0].y >= mapSize) {
						snake.active = false;
						this.gameOver(snake);
						return;
			}

			//checks for food; increases score, and regenerates food
			if (this.map[snake.body[0].x][snake.body[0].y] === snakeFood) {
				snake.score += 1;
				this.generateFood();

				//adds length to snake
				snake.body.push({x: snake.body[snake.body.length - 1].x, y: snake.body[snake.body.length - 1].y});
				this.map[snake.body[snake.body.length - 1].x][snake.body[snake.body.length - 1].y] = 2;

				//levels up after 10 points
				if ((snake.score % 10) === 0) {
					snake.level += 1;
				}

		//checks if snake has hit itself
		} else if (this.map[snake.body[0].x][snake.body[0].y] === snakeBody) {
				snake.active = false;
				this.gameOver(snake);
				return;
			}

			//grows the snake at the head
			this.map[snake.body[0].x][snake.body[0].y] = snakeHead;
		} else {
			//removes the last piece of the snake
			if (i === (snake.body.length - 1)) {
				this.map[snake.body[i].x][snake.body[i].y] = null;
			}

			//moves the snake up
			snake.body[i] = {x: snake.body[i - 1].x, y: snake.body[i - 1].y};
			this.map[snake.body[i].x][snake.body[i].y] = snakeBody;
		}
	}


	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	//put up the canvas frame and score
	this.drawMap(snake);
	this.drawItems(snake);

	//uses active variable to make sure game isnt over before continuing
	if (snake.active) {
		setTimeout(function() {
			self.render(snake);
		}, snake.speed - ((snake.level - 1) * 8.77));
	}
};

Map.prototype.buildMatrix = function() {
  this.map = new Array(mapSize);
	for(var i = 0; i < this.map.length; i++) {
		this.map[i] = new Array(mapSize);
	}
};

//draws the main frame of the game
Map.prototype.drawMap = function(snake) {
	//draw a border around the edge of the canvas element
	this.ctx.lineWidth = 2;
	this.ctx.strokeStyle = "black";
	this.ctx.strokeRect(2, 20, this.canvas.width - 4, this.canvas.height - 24);

	//display the score and level
	this.ctx.fillStyle = 'black';
	this.ctx.font = '14px sans-serif';
	this.ctx.fillText('Score: ' + snake.score + ' - Level: ' + snake.level, 2, 12);
};

Map.prototype.drawItems = function(snake) {
  //Cycles the matrix and draws the graphics
	for (var x = 0; x < this.map.length; x++) {
		for (var y = 0; y < this.map[x].length; y++) {
			if (this.map[x][y] === snakeFood) {
				this.ctx.fillStyle = 'black';
				this.ctx.fillRect(x * 10 + 2, y * 10 + 20, 10, 10);
			}
			if (this.map[x][y] === snakeHead) {
				this.ctx.fillStyle = '#ffcc00';
				this.ctx.fillRect(x * 10 + 2, y * 10 + 20, 10, 10);
        //eyes!
        this.ctx.fillStyle = 'black';
        switch(snake.direction) {
          case 0: //right
            this.ctx.fillRect(x * 10 + 8, y * 10 + 21, 2, 2);
            this.ctx.fillRect(x * 10 + 8, y * 10 + 25, 2, 2);
  					break;
  				case 1: //left
            this.ctx.fillRect(x * 10 + 4, y * 10 + 21, 2, 2);
            this.ctx.fillRect(x * 10 + 4, y * 10 + 25, 2, 2);
  					break;
  				case 2: //up
            this.ctx.fillRect(x * 10 + 7, y * 10 + 22, 2, 2);
            this.ctx.fillRect(x * 10 + 3, y * 10 + 22, 2, 2);
  					break;
  				case 3: //down
            this.ctx.fillRect(x * 10 + 7, y * 10 + 26, 2, 2);
            this.ctx.fillRect(x * 10 + 3, y * 10 + 26, 2, 2);
  					break;
          }
      	}
			if (this.map[x][y] === snakeBody) {
				this.ctx.fillStyle = '#ffcc77';
				this.ctx.fillRect(x * 10 + 2, y * 10 + 20, 10, 10);
			}
		}
	}
}

Map.prototype.startGame = function(snake) {
  var self = this;

  function startGame(e) {
    if (e.keyCode === 16) {
      snake.init();
      self.buildMatrix();
    	self.generateSnake(snake);
  		self.generateFood();
  		self.render(snake);
      window.removeEventListener('keydown', startGame);
    }
  }

  window.addEventListener('keydown', startGame);
};

//adds food to the map
Map.prototype.generateFood = function() {
	//Generates random x and y for food
	var rndX = Math.round(Math.random() * 19),
		rndY = Math.round(Math.random() * 19);

	//Assures food doesn't land on the snake's body
	while (this.map[rndX][rndY] === snakeBody) {
		rndX = Math.round(Math.random() * 19);
		rndY = Math.round(Math.random() * 19);
	}

	//places the food out there
	this.map[rndX][rndY] = snakeFood;
};

Map.prototype.generateSnake = function(snake) {
	var rndX = Math.round(Math.random() * 19),
		rndY = Math.round(Math.random() * 19);

	//makes sure our hero isn't born outside our walled city
	//also makes sure his tail is inside the walls
	while ((rndX - snake.body.length) < 0) {
		rndX = Math.round(Math.random() * 19);
	}

	//draws our snake onto the map
	for (var i = 0; i < snake.body.length; i++) {
		snake.body[i] = {x: rndX - i, y: rndY};
		this.map[rndX - i][rndY] = snakeBody;
	}
};

Map.prototype.gameOver = function(snake) {
	this.map = null;

	this.ctx.fillStyle = 'black';
	this.ctx.font = '16px sans-serif';
	this.ctx.fillText('Game over', ((this.canvas.width / 2) - (this.ctx.measureText('Game over').width / 2)), (this.canvas.height / 2));

	this.ctx.font = '14px sans-serif';
	this.ctx.fillText('Your score was ' + snake.score, ((this.canvas.width / 2) - (this.ctx.measureText('Your score was ' + snake.score).width / 2)), ((this.canvas.height / 2) + 25));

  this.ctx.fillText('Press the shift key to try again', ((this.canvas.width / 2) - (this.ctx.measureText('Press the shift key to try again').width / 2)), ((this.canvas.height / 2) + 50));

	snake.gameOver();

  this.startGame(snake);
};
