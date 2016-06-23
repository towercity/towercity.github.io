/*
	Snake game based on tutorial from http://www.andrespagella.com/snake-game
*/

//Explanatory variables
var snakeFood = 1,
		snakeBody = 2,
		snakeHead = 3,
		mapSize = 50;

//create our map and snake
var world = new Map();
var hero = new Snake();

world.init(hero);
