let box = document.querySelectorAll(".items");
let changePlayer = document.querySelector(".scores");
let player2 = document.getElementById("player2");
let computer = document.getElementById("computer");
let score2 = document.querySelector(".score2");
let score1 = document.querySelector(".score1");
let TieScore = document.querySelector(".TieScore");
let game = document.querySelector(".game");

changePlayer.addEventListener("click", () => {

    if (player2.style.display == "" || player2.style.display == "none") {
        player2.style.display = "block";
        computer.style.display = "none";
    }
    else {
        computer.style.display = "block";
        player2.style.display = "none";
    }
    score2.innerText = 0;
});


game.addEventListener("click",()=>{
    console.log("H");
});