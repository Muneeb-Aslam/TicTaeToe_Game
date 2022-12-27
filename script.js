let box = document.querySelectorAll(".items");
let changePlayer = document.querySelector(".scores");
let player2 = document.getElementById("player2");
let score2 = document.querySelector(".score2");
let score1 = document.querySelector(".score1");
let TieScore = document.querySelector(".TieScore");
let game = document.querySelector(".game");
let windata = document.getElementById("windata");
let Afterwin = document.getElementById("Afterwin");
let refreshbutton = document.getElementById("refresh");
let notation;
let turn = true;
let winningcombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
];
let flagforDraw = 0;

refreshbutton.addEventListener("click", () => {
  location.reload();
});

box.forEach((e) => {
  e.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  notation = turn ? "X" : "O";
  markNotation(cell, notation);

  if (checkWinner() && notation == "X") {
    windata.innerText = "Player 1 Wins!";
    Afterwin.classList.add("show");
  } else if (checkWinner() && notation == "O") {
    windata.innerText = "Player 2 wins!";
    Afterwin.classList.add("show");
  } else if (flagforDraw == 18) {
    windata.innerText = "Draw!";
    Afterwin.classList.add("show");
  }

  switchTurn();
}

function markNotation(cell, notation) {
  cell.innerText = notation;
}

function switchTurn() {
  turn = !turn;
}

function checkWinner() {
  let win = false;
  for (let i = 0; i <= 7; i++) {
    const comb = winningcombinations[i];
    if (
      box[comb[0]].textContent === "" ||
      box[comb[1]].textContent === "" ||
      box[comb[2]].textContent === ""
    )
      continue;
    if (
      box[comb[0]].textContent === box[comb[1]].textContent &&
      box[comb[1]].textContent === box[comb[2]].textContent
    ) {
      win = true;
      break;
    }
  }
  flagforDraw = flagforDraw + 1;
  return win;
}
