const $startButton = document.querySelector(".start-button");

const $stoneButton1 = document.querySelector(".player1-stone-button");
const $paperButton1 = document.querySelector(".player1-paper-button");
const $scissorsButton1 = document.querySelector(".player1-scissors-button");

const $stoneButton2 = document.querySelector(".player2-stone-button");
const $paperButton2 = document.querySelector(".player2-paper-button");
const $scissorsButton2 = document.querySelector(".player2-scissors-button");

const $fieldPlayer1 = document.querySelector(".player1-gamefield");
const $fieldPlayer2 = document.querySelector(".player2-gamefield");

const $winnerField = document.querySelector(".win-text");

const $scoreField1 = document.querySelector(".scorePlayer1");
const $scoreField2 = document.querySelector(".scorePlayer2");

const $resetButton = document.querySelector(".reset-button");

let winner = null;
let movePlayer1 = "";
let movePlayer2 = "";
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function verifyWinner() {
  if (movePlayer1 == "stone" && movePlayer2 == "paper") {
    winner = 2;
  } else if (movePlayer1 == "stone" && movePlayer2 == "scissors") {
    winner = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "stone") {
    winner = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
    winner = 2;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "stone") {
    winner = 2;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "paper") {
    winner = 1;
  } else if (movePlayer1 == movePlayer2) {
    winner = 0;
  }
}

function printWinner() {
  if (winner == 1) {
    $winnerField.innerHTML = "A jogadora 1 venceu!";
  } else if (winner == 2) {
    $winnerField.innerHTML = "A jogadora 2 venceu";
  } else if (winner == 0) {
    $winnerField.innerHTML = "Empate! Joguem novamente.";
  }
}

function scoreCount() {
  if (winner == 1) {
    $scoreField1.innerHTML = scorePlayer1++ + 1;
  } else if (winner == 2) {
    $scoreField2.innerHTML = scorePlayer2++ + 1;
  }
}

function checker() {
  if (movePlayer1 != "" && movePlayer2 != "") {
    verifyWinner();
    printWinner();
    scoreCount();
  }
}

function buttons() {
  $stoneButton1.addEventListener("click", function () {
    $fieldPlayer1.innerHTML = '<img class="move-image"src="stone.png"/>';
    movePlayer1 = "stone";
    checker();
  });
  $paperButton1.addEventListener("click", function () {
    $fieldPlayer1.innerHTML = '<img class="move-image"src="paper.png"/>';
    movePlayer1 = "paper";
    checker();
  });
  $scissorsButton1.addEventListener("click", function () {
    $fieldPlayer1.innerHTML = '<img class="move-image"src="scissors.png"/>';
    movePlayer1 = "scissors";
    checker();
  });
  $stoneButton2.addEventListener("click", function () {
    $fieldPlayer2.innerHTML = '<img class="move-image"src="stone.png"/>';
    movePlayer2 = "stone";
    checker();
  });
  $paperButton2.addEventListener("click", function () {
    $fieldPlayer2.innerHTML = '<img class="move-image"src="paper.png"/>';
    movePlayer2 = "paper";
    checker();
  });

  $scissorsButton2.addEventListener("click", function () {
    $fieldPlayer2.innerHTML = '<img class="move-image"src="scissors.png"/>';
    movePlayer2 = "scissors";
    checker();
  });

  $resetButton.addEventListener("click", function () {
    $fieldPlayer1.innerHTML = "";
    $fieldPlayer2.innerHTML = "";
    movePlayer1 = "";
    movePlayer2 = "";
  });
}

$startButton.addEventListener("click", function () {
  buttons();
  $winnerField.innerHTML = "Aguardando jogada...";
});
