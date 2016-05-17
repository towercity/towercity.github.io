/*
	Snake game based on tutorial from http://www.andrespagella.com/snake-game
*/

//variables

//canvas variables
var canvas = document.getElementById('game-area'),
	ctx = canvas.getContext('2d'),
//Gameplay variables
	score = 0,
	level = 1,
	direction = 0,
	snake = new Array(3),
	speed = 100,
	active = true,
//explanatory variables
	snakeFood = 1,
	snakeBody = 2;
	//snakeHead = 3;

//matrix
var map = new Array(50);
for (var i = 0; i < map.length; i++) {
	map[i] = new Array(50);
}

//functions

//pulls in keystrokes to control snake
window.addEventListener('keydown', function(e) {
	if (e.keyCode === 38 && direction != 3) {
		direction = 2; //up
	} else if (e.keyCode === 40 && direction != 2) {
		direction = 3; //down
	} else if (e.keyCode === 37 && direction != 0) {
		direction = 1; //left
	} else if (e.keyCode === 39 && direction != 1) {
		direction = 0; //right
	}
});

//clears the canvas, redraws the frame
function drawGame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//moves down the snake pieces, starting at the bottom
	for (var i = snake.length - 1; i >= 0; i--) {
		//functions for the snake's head (snake[0])
		if (i === 0) {
			switch (direction) {
				case 0: //right
					snake[0] = {x: snake[0].x + 1, y: snake[0].y};
					break;
				case 1: //left
					snake[0] = {x: snake[0].x - 1, y: snake[0].y};
					break;
				case 2: //up
					snake[0] = {x: snake[0].x, y: snake[0].y - 1};
					break;
				case 3: //down
					snake[0] = {x: snake[0].x, y: snake[0].y + 1};
					break;
			}

			//checks if snake is out of bounds, returns game over
			if (snake[0].x < 0 ||
				snake[0].x >= 50 ||
				snake[0].y < 0 ||
				snake[0].y >= 50) {
				showGameOver();
				return;
			}

			//checks for food; increases score, and regenerates food
			if (map[snake[0].x][snake[0].y] === snakeFood) {
				score += 1;
				map = generateFood(map);

				//adds length to snake
				snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
				map[snake[snake.length - 1].x][snake[snake.length - 1].y] = 2;

				//levels up after 10 points
				if ((score % 10) === 0) {
					level += 1;
				}

			//checks if snake has hit itself
			} else if (map[snake[0].x][snake[0].y] === snakeBody) {
				showGameOver();
				return;
			}

			//keeps the head as part of the snake
			map[snake[0].x][snake[0].y] = snakeBody;
		} else {
			//removes the last piece of the snake
			if (i === (snake.length - 1)) {
				map[snake[i].x][snake[i].y] = null;
			}

			//moves the snake up
			snake[i] = {x: snake[i - 1].x, y: snake[i - 1].y};
			map[snake[i].x][snake[i].y] = snakeBody;
		}
	}

	//put up the canvas frame and score
	drawMain();

	//Cycles the matrix and draws the graphics
	for (var x = 0; x < map.length; x++) {
		for (var y = 0; y < map[x].length; y++) {
			if (map[x][y] === snakeFood) {
				ctx.fillStyle = 'black';
				ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
			}
			if (map[x][y] === snakeBody) {
				ctx.fillStyle = 'orange';
				ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
			}
		}
	}

	//uses active variable to make sure game isnt over before continuing
	if (active) {
		setTimeout(drawGame, speed - ((level - 1) * 50));
	}
}

//draws the frame of the game
function drawMain() {
	//draw a border around the edge of the canvas element
	ctx.lineWidth = 2;
	ctx.strokeStyle = "black";
	ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);

	//display the score and level
	ctx.fillStyle = 'black';
	ctx.font = '14px sans-serif';
	ctx.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
}

function generateFood(map) {
	//Generates random x and y for food
	var rndX = Math.round(Math.random() * 19),
		rndY = Math.round(Math.random() * 19);

	//Assures food doesn't land on the snake's body
	while (map[rndX][rndY] === snakeBody) {
		var rndX = Math.round(Math.random() * 19),
			rndY = Math.round(Math.random() * 19);
	}

	//places the food out there
	map[rndX][rndY] = snakeFood;
	return map;
}

function generateSnake(map) {
	var rndX = Math.round(Math.random() * 19),
		rndY = Math.round(Math.random() * 19);

	//makes sure our hero isn't born outside our walled city
	//also makes sure his tail is inside the walls
	while ((rndX - snake.length) < 0) {
		rndX = Math.round(Math.random() * 19);
	}

	//draws our snake onto the map
	for (var i = 0; i < snake.length; i++) {
		snake[i] = {x: rndX - i, y: rndY};
		map[rndX - i][rndY] = snakeBody;
	}

	return map;
}

//potentially buggy--not showing when called in the console
function showGameOver() {
	active = false;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'black';
	ctx.font = '16px sans-serif';
	ctx.fillText('Game over', ((canvas.width / 2) - (ctx.measureText('Game over') / 2)), (canvas.height / 2));

	ctx.font = '14px sans-serif';
	ctx.fillText('Your score was ' + score, ((canvas.width / 2) - (ctx.measureText('Your score was ' + score) / 2)), ((canvas.height / 2) + 25));
}

//canvas manipulation

map = generateFood(map);
map = generateSnake(map);
drawGame();
