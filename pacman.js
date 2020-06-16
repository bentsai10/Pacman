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
                output+= "<div class = 'pacman'></div>";
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