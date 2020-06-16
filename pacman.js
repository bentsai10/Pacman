var world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0],
    [0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 2,2, 2, 2, 2, 2, 0, 0],
    [0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0],
    [0, 2, 2, 0, 20, 10, 15, 20, 0, 2, 2, 0],
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0],
    [0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0],
    [0, 0, 2, 2, 0, 100, 2, 0, 2, 2, 0, 0],
    [0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var score = 0;

var lives = 3;
var defaultX = 5;//starting column index for pacman
var defaultY = 11;//starting row index for pacman
var pacmanX = defaultX; //X variable keeping track of current column index for pacman
var pacmanY = defaultY; //Y variable keeping track of current row index for pacman

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
    console.log(output);
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
displayWorld();
displayScore();
displayLives();

document.onkeydown = function (event) {
    if (event.keyCode == 37){ //left
        if(world[pacmanY][pacmanX-1] == 0){
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanX--;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
                // pacmanX = defaultX;
                // pacmanY = defaultY;
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(180deg)";
            displayScore();
            displayLives();
        }
        
    }else if(event.keyCode == 38){ //up
        if(world[pacmanY-1][pacmanX] == 0){
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanY--;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(270deg)";
            displayScore();
            displayLives();
        }
    }
    else if(event.keyCode == 39){//right
        if(world[pacmanY][pacmanX+1] == 0){
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanX++;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(360deg)";
            displayScore();
            displayLives();
        }
    }
    else if (event.keyCode == 40){//down
        if(world[pacmanY+1][pacmanX] == 0){
        }else{
            world[pacmanY][pacmanX] = 1;
            pacmanY++;
            if(world[pacmanY][pacmanX] == 3){
                score += 50;
            }
            else if(world[pacmanY][pacmanX] == 2){
                score += 10;
            }
            else if(world[pacmanY][pacmanX] == 20 || world[pacmanY][pacmanX] == 15 || world[pacmanY][pacmanX] == 10){
                lives--;
            }
            world[pacmanY][pacmanX] = 100;
            displayWorld();
            document.getElementById('pacman').style.transform = "rotate(90deg)";
            displayScore();
            displayLives();
        }
    }
    else if (event.keyCode == 32){ //space

    }
}