let pokeBall;
let teamRocket;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(pokebutten, 1000); // 1000 miliseconds = 1 second, every 1 second call pokebutten
    setInterval(pikachu, 2000); // 2000 miliseconds = 2 seconds, every 2 second call pikachu
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function pokebutten() {
    if (gameOver) {
        return;
    }
    if (pokeBall) {
        pokeBall.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./pikachu.png";

    let num = getRandomTile();
    if (teamRocket && teamRocket.id == num) {
        return;
    }
    pokeBall = document.getElementById(num);
    pokeBall.appendChild(mole);
}

function pikachu() {
    if (gameOver) {
        return;
    }
    if (teamRocket) {
        teamRocket.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./teamrocket.png";

    let num = getRandomTile();
    if (pokeBall && pokeBall.id == num) {
        return;
    }
    teamRocket = document.getElementById(num);
    teamRocket.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == pokeBall) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == teamRocket) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}