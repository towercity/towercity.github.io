'use stict';

// Enemies our player must avoid
var Enemy = function () {
    this.x = (Math.round(Math.random() * 10) * 90.9);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    var locAdd = (dt * this.speed) * 1.01;
    this.x += locAdd;

    //moves enemy back to the far edge of the screen and
    //re-randomizes y axis
    //Right exit
    if (this.x >= 909) {
        this.x = -101;
        this.y = this.setY(this.row);
    //Left exit
    } else if (this.x <= -102) {
        this.x = 909;
        this.y = this.setY(this.row);
    }
};

Enemy.prototype.setY = function(row) {
    switch (row) {
        case 'top':
            return 60;
        case 'middle':
            return 143;
        case 'bottom':
            return (Math.round(Math.random()) * 83) + 226;
    }
};

var Enemy1 = function() {
    Enemy.call(this);
    this.sprite = 'images/enemy-bug.png';
    this.row = "bottom";
    this.y = (Math.round(Math.random()) * 83) + 226;
    this.speed = (Math.round(Math.random() * 20) * 10) + 50;
};
Enemy1.prototype = Object.create(Enemy.prototype);

var Enemy2 = function() {
    Enemy.call(this);
    this.sprite = 'images/enemy-bug-2.png';
    this.row = "middle";
    this.y = 143;
    this.speed = ((Math.round(Math.random() * 20) * 10) * -1) - 150;
};
Enemy2.prototype = Object.create(Enemy.prototype);

var Enemy3 = function() {
    Enemy.call(this);
    this.sprite = 'images/enemy-bug-3.png';
    this.row = "top";
    this.y = 60;
    this.speed = (Math.round(Math.random() * 20) * 10) + 150;
};
Enemy3.prototype = Object.create(Enemy.prototype);



// Now write your own player class
var Player = function() {
    this.sprite = 'images/char-boy.png';
    //x and y are set in the reset() below
    this.x = 0;
    this.y = 0;
    this.direction = null;
};

Player.prototype.update = function() {
    switch (this.direction) {
        case 'left':
            this.x -= 101;
            break;
        case 'right':
            this.x += 101;
            break;
        case 'up':
            this.y -= 83;
            break;
        case 'down':
            this.y += 83;
            break;
    }

    //stops player from leaving the screen
    //left exit
    if (this.x < 0) {
        this.x += 101;
    //right exit
    } else if (this.x > 900) {
        this.x -= 101;
    //bottom exit
    } else if (this.y > 400) {
        this.y -= 83;
    //top exit
    }
  this.direction = null;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode) {
    this.direction = keyCode;
};



//Collectibles
var Coin = function() {
    this.sprite = 'images/Gem Green.png';
    this.x = (Math.round(Math.random() * 8) * 101);
    this.y = (Math.round(Math.random() * 3) * 83) + 60;
    this.value = 1;
    this.wait = 200;
    this.visible = false;
};

Coin.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Coin.prototype.respawn = function() {
    this.x = (Math.round(Math.random() * 8) * 101);
    this.y = (Math.round(Math.random() * 3) * 83) + 60;
};

Coin.prototype.dissapear = function() {
    this.x = 1100;
};

Coin.prototype.update = function() {
    //counts down respawn by frames
    if (this.visible === false) {
        if (this.wait > 0) {
            this.wait--;
        } else if (this.wait === 0) {
            this.respawn();
            this.visible = true;
        }
    }
};

Coin.prototype.collect = function() {
    score += this.value;
    this.visible = false;
    this.wait = 500;
    this.dissapear();
    console.log("Score: " + score);
};
