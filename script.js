let box = document.querySelectorAll(".items");
let changePlayer = document.querySelector(".scores");
let player2 = document.getElementById("player2");
let computer = document.getElementById("computer");
let score2 = document.querySelector(".score2");
let score1 = document.querySelector(".score1");
let TieScore = document.querySelector(".TieScore");
let game = document.querySelector(".game");
let windata = document.getElementById("windata");
let Afterwin = document.getElementById("Afterwin");
let refreshbutton = document.getElementById("refresh");
let notation;
let turn = true;
let winningcombinations = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
let indexOfClickedBox_O = [];
let indexOfClickedBox_X = [];

refreshbutton.addEventListener('click',()=>{
    location.reload();
});

changePlayer.addEventListener("click", () => {
    if (window.getComputedStyle(player2).display == "none") {
        player2.style.display = "block";
        computer.style.display = "none";
    }
    else {
        computer.style.display = "block";
        player2.style.display = "none";
    }
    score2.innerText = 0;
});


box.forEach((e) => {
    e.addEventListener("click", handleClick, { once: true })
});

function handleClick(e) {
    const cell = e.target;
    notation = turn ? "X" : "O";
    markNotation(cell, notation)
    if (turn) indexOfClickedBox_X.push(Array.from(cell.parentElement.children).indexOf(cell)) 
    else indexOfClickedBox_O.push(Array.from(cell.parentElement.children).indexOf(cell))

    
    if(checkWinnerX()){
        windata.innerText="Player 1 Wins!";
        Afterwin.classList.add('show');
    }else if(checkWinnerO()){
        windata.innerText="Player 2 wins!";
        Afterwin.classList.add('show');
    }
    checkDraw()
    switchTurn()
}

function markNotation(cell, notation) {
    cell.innerText = notation;
}

function switchTurn() {
    turn = !turn
}

function checkWinnerX() {
    let win = winningcombinations.some((row)=>{
        if(JSON.stringify(row)===JSON.stringify(indexOfClickedBox_X))
            return true;
    });
    return win;
}
function checkWinnerO() {
    let win = winningcombinations.some((row)=>{
        if(JSON.stringify(row)===JSON.stringify(indexOfClickedBox_O))
            return true;
    });
    return win;
}
function checkDraw() {

}