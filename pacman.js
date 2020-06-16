var defaultWorld = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 10, 2, 2, 2, 2, 2, 2, 2, 2, 20, 0],
    [0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 2,2, 2, 2, 2, 2, 0, 0],
    [0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0],
    [0, 2, 2, 0, 3, 3, 3, 3, 0, 2, 2, 0],
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0],
    [0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 0, 100, 2, 0, 2, 2, 0, 0],
    [0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 15, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var world = JSON.parse(JSON.stringify(defaultWorld));
var numOfGoods = 93;

var score = 0;

var lives = 3;
var defaultX = 5;//starting column index for pacman
var defaultY = 11;//starting row index for pacman
var pacmanX = defaultX; //X variable keeping track of current column index for pacman
var pacmanY = defaultY; //Y variable keeping track of current row index for pacman

var defaultOrangeX = 1;//starting column index for orange ghost
var defaultOrangeY = 1;//starting row index for orange ghost
var orangeX = defaultOrangeX; //X variable keeping track of current column index for orange ghost
var orangeY = defaultOrangeY; //Y variable keeping track of current row index for orange ghost
var orangeHold = 3;

var defaultTealX = 10;//starting column index for teal ghost
var defaultTealY = 13;//starting row index for teal ghost
var tealX = defaultTealX; //X variable keeping track of current column index for teal ghost
var tealY = defaultTealY; //Y variable keeping track of current row index for teal ghost
var tealHold = 2;

var defaultRedOneX = 10;//starting column index for red ghost 1
var defaultRedOneY = 1;//starting row index for red ghost 1
var redOneX = defaultRedOneX; //X variable keeping track of current column index for red ghost 1
var redOneY = defaultRedOneY; //Y variable keeping track of current row index for red ghost 1
var redOneHold = 3;

var gameStart = false;

function displayWorld(){
    var output = "";
    for(var i = 0; i<world.length; i++){
        output += "\n<div class = 'row'>"
        for(var j = 0; j <world[i].length; j++){
            if(world[i][j] == 0){
                output += "<div class = 'border'></div>";
            }
            else if (world[i][j] == 1){
                output+="<div class = 'empty'></div>";
            }
            else if(world[i][j] == 2){
                output+="<div class = 'coin'></div>";
            }
            else if(world[i][j] == 3){
                output+="<div class = 'cherry'></div>";
            }
            else if(world[i][j] == 10){
                output+= "<div class = 'orange_ghost'></div>";
            }
            else if(world[i][j] == 15){
                output+= "<div class = 'teal_ghost'></div>";
            }
            else if(world[i][j] == 20){
                output+= "<div class = 'red_ghost'></div>";
            }
            else if(world[i][j] == 100){
                output+= "<div id = 'pacman'></div>";
            }
        }
        output += "\n</div>";
    }

    document.getElementById('world').innerHTML = output;
}
function displayScore(){
    document.getElementById('score').innerHTML = "<h2>Score: " + score + "</h2>";
}
function displayLives(){
    var output = "<h2>Lives: ";
    for(var i = 0; i < lives; i++){
        output+="<img class = 'pacman_life' src='pacman still.png' alt='still pacman'>";
    }
    output+= "</h2>";
    document.getElementById('lives').innerHTML = output;
}
function displayStart(){
    if (gameStart == true){
        document.getElementById('start').style.visibility = "hidden";
    }else{
        document.getElementById('start').style.visibility = "visible";
    }
}
function moveGhosts(){
    if (gameStart == true){
        moveOrangeGhost();
        moveTealGhost();
        moveRedOneGhost();
    }
}
function moveOrangeGhost(){
    var direction = Math.floor(Math.random() * 4);
    if(direction == 0){
        if(world[orangeY][orangeX-1] == 0 || world[orangeY][orangeX-1] == 20 || world[orangeY][orangeX-1] == 15){

        }else if(world[orangeY][orangeX-1] == 100){
            lives--;
            displayLives();
            world[orangeY][orangeX] = orangeHold;
            orangeHold = 1;
            world[pacmanY][pacmanX] = 10;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[orangeY][orangeX] = orangeHold;
            orangeX--;
            orangeHold = world[orangeY][orangeX]
            world[orangeY][orangeX] = 10;
            displayWorld();
        }

    }else if (direction == 1){
        if(world[orangeY-1][orangeX] == 0 || world[orangeY-1][orangeX] == 20 || world[orangeY-1][orangeX] == 15){

        }else if(world[orangeY-1][orangeX] == 100){
            lives--;
            displayLives();
            world[orangeY][orangeX] = orangeHold;
            orangeHold = 1;
            world[pacmanY][pacmanX] = 10;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[orangeY][orangeX] = orangeHold;
            orangeY--;
            orangeHold = world[orangeY][orangeX]
            world[orangeY][orangeX] = 10;
            displayWorld();
        }
    }else if (direction ==2){
        if(world[orangeY][orangeX+1] == 0 || world[orangeY][orangeX+1] == 20 || world[orangeY][orangeX+1] == 15){

        }else if(world[orangeY][orangeX+1] == 100){
            lives--;
            displayLives();
            world[orangeY][orangeX] = orangeHold;
            orangeHold = 1;
            world[pacmanY][pacmanX] = 10;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[orangeY][orangeX] = orangeHold;
            orangeX++;
            orangeHold = world[orangeY][orangeX]
            world[orangeY][orangeX] = 10;
            displayWorld();
        }
    }else{
        if(world[orangeY+1][orangeX] == 0 || world[orangeY+1][orangeX] == 20 || world[orangeY+1][orangeX] == 15){

        }else if(world[orangeY+1][orangeX] == 100){
            lives--;
            displayLives();
            world[orangeY][orangeX] = orangeHold;
            orangeHold = 1;
            world[pacmanY][pacmanX] = 10;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[orangeY][orangeX] = orangeHold;
            orangeY++;
            orangeHold = world[orangeY][orangeX]
            world[orangeY][orangeX] = 10;
            displayWorld();
        }
    }

}
function moveTealGhost(){
    var direction = Math.floor(Math.random() * 4);
    if(direction == 0){
        if(world[tealY][tealX-1] == 0 || world[tealY][tealX-1] == 20 || world[tealY][tealX-1] == 10){

        }else if(world[tealY][tealX-1] == 100){
            lives--;
            displayLives();
            world[tealY][tealX] = tealHold;
            tealHold = 1;
            world[pacmanY][pacmanX] = 15;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[tealY][tealX] = tealHold;
            tealX--;
            tealHold = world[tealY][tealX]
            world[tealY][tealX] = 15;
            displayWorld();
        }

    }else if (direction == 1){
        if(world[tealY-1][tealX] == 0 || world[tealY-1][tealX] == 20 || world[tealY-1][tealX] == 10){

        }else if(world[tealY-1][tealX] == 100){
            lives--;
            displayLives();
            world[tealY][tealX] = tealHold;
            tealHold = 1;
            world[pacmanY][pacmanX] = 15;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[tealY][tealX] = tealHold;
            tealY--;
            tealHold = world[tealY][tealX]
            world[tealY][tealX] = 15;
            displayWorld();
        }
    }else if (direction ==2){
        if(world[tealY][tealX+1] == 0 || world[tealY][tealX+1] == 20 || world[tealY][tealX+1] == 10){

        }else if(world[tealY][tealX+1] == 100){
            lives--;
            displayLives();
            world[tealY][tealX] = tealHold;
            tealHold = 1;
            world[pacmanY][pacmanX] = 15;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[tealY][tealX] = tealHold;
            tealX++;
            tealHold = world[tealY][tealX]
            world[tealY][tealX] = 15;
            displayWorld();
        }
    }else{
        if(world[tealY+1][tealX] == 0 || world[tealY+1][tealX] == 20 || world[tealY+1][tealX] == 10){

        }else if(world[tealY+1][tealX] == 100){
            lives--;
            displayLives();
            world[tealY][tealX] = tealHold;
            tealHold = 1;
            world[pacmanY][pacmanX] = 15;
            
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[tealY][tealX] = tealHold;
            tealY++;
            tealHold = world[tealY][tealX]
            world[tealY][tealX] = 15;
            displayWorld();
        }
    }
}
function moveRedOneGhost(){
    var direction = Math.floor(Math.random() * 4);
    if(direction == 0){
        if(world[redOneY][redOneX-1] == 0 || world[redOneY][redOneX-1] == 15 || world[redOneY][redOneX-1] == 10){

        }else if(world[redOneY][redOneX-1] == 100){
            lives--;
            displayLives();
            world[redOneY][redOneX] = redOneHold;
            redOneHold = 1;
            world[pacmanY][pacmanX] = 20;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[redOneY][redOneX] = redOneHold;
            redOneX--;
            redOneHold = world[redOneY][redOneX]
            world[redOneY][redOneX] = 20;
            displayWorld();
        }
    }else if(direction == 1){
        if(world[redOneY-1][redOneX] == 0 || world[redOneY-1][redOneX] == 15 || world[redOneY-1][redOneX]== 10){

        }else if(world[redOneY-1][redOneX] == 100){
            lives--;
            displayLives();
            world[redOneY][redOneX] = redOneHold;
            redOneHold = 1;
            world[pacmanY][pacmanX] = 20;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[redOneY][redOneX] = redOneHold;;
            redOneY--;
            redOneHold = world[redOneY][redOneX]
            world[redOneY][redOneX] = 20;
            displayWorld();
        }

    }else if(direction ==2){
        if(world[redOneY][redOneX+1] == 0 || world[redOneY][redOneX+1] == 15 || world[redOneY][redOneX+1]== 10){

        }else if(world[redOneY][redOneX+1] == 100){
            lives--;
            displayLives();
            world[redOneY][redOneX] = redOneHold;
            redOneHold = 1;
            world[pacmanY][pacmanX] = 20;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[redOneY][redOneX] = redOneHold;;
            redOneX++;
            redOneHold = world[redOneY][redOneX]
            world[redOneY][redOneX] = 20;
            displayWorld();
        }
    }else{
        if(world[redOneY+1][redOneX] == 0 || world[redOneY+1][redOneX] == 15 || world[redOneY+1][redOneX]== 10){

        }else if(world[redOneY+1][redOneX] == 100){
            lives--;
            displayLives();
            world[redOneY][redOneX] = redOneHold;
            redOneHold = 1;
            world[pacmanY][pacmanX] = 20;
            pacmanX = defaultX;
            pacmanY = defaultY;
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            if (lives == 0){
                document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
        }else{
            world[redOneY][redOneX] = redOneHold;;
            redOneY++;
            redOneHold = world[redOneY][redOneX]
            world[redOneY][redOneX] = 20;
            displayWorld();
        }
    }
}
displayWorld();
displayScore();
displayLives();
displayStart();

document.onkeydown = function (event) {
    if (event.keyCode == 37){ //left
        if(world[pacmanY][pacmanX-1] == 0 || gameStart == false){
            moveGhosts();
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanX--;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
                pacmanX = defaultX;
                pacmanY = defaultY;
                if (lives == 0){
                    document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                    gameStart = false;
                    displayStart();
                }
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(180deg)";
            displayScore();
            displayLives();
            if (numOfGoods == 0){
                document.getElementById('start').innerHTML = "<h2>You Win!...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
            moveGhosts();
        }
        
    }else if(event.keyCode == 38){ //up
        if(world[pacmanY-1][pacmanX] == 0 || gameStart == false){
            moveGhosts();
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanY--;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
                pacmanX = defaultX;
                pacmanY = defaultY;
                if (lives == 0){
                    document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                    gameStart = false;
                    displayStart();
                }
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(270deg)";
            displayScore();
            displayLives();
            if (numOfGoods == 0){
                document.getElementById('start').innerHTML = "<h2>You Win!...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
            moveGhosts();
        }
    }
    else if(event.keyCode == 39){//right
        if(world[pacmanY][pacmanX+1] == 0|| gameStart == false){
            moveGhosts();
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanX++;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
                pacmanX = defaultX;
                pacmanY = defaultY;
                if (lives == 0){
                    document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                    gameStart = false;
                    displayStart();
                }
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(360deg)";
            displayScore();
            displayLives();
            if (numOfGoods == 0){
                document.getElementById('start').innerHTML = "<h2>You Win!...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
            moveGhosts();
        }
    }
    else if (event.keyCode == 40){//down
        if(world[pacmanY+1][pacmanX] == 0|| gameStart == false){
            moveGhosts();
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanY++;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
                numOfGoods--;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
                pacmanX = defaultX;
                pacmanY = defaultY;
                if (lives == 0){
                    document.getElementById('start').innerHTML = "<h2>Game Over...Press Space to Play Again!</h2>";
                    gameStart = false;
                    displayStart();
                }
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(90deg)";
            displayScore();
            displayLives();
            if (numOfGoods == 0){
                document.getElementById('start').innerHTML = "<h2>You Win!...Press Space to Play Again!</h2>";
                gameStart = false;
                displayStart();
            }
            moveGhosts();
        }
    }
    else if (event.keyCode == 32){ //space
        if(gameStart == false){
            gameStart = true;
            world = JSON.parse(JSON.stringify(defaultWorld));
            pacmanX = defaultX;
            pacmanY = defaultY;
            lives = 3;
            score = 0;
            orangeX = defaultOrangeX;
            orangeY = defaultOrangeY;
            orangeHold = 3;
            tealX = defaultTealX;
            tealY = defaultTealY;
            tealHold = 2;
            redOneX = defaultRedOneX;
            redOneY = defaultRedOneY;
            redOneHold = 3;
            displayStart();
            displayScore();
            displayLives();
            displayWorld();
        }   
    }
}