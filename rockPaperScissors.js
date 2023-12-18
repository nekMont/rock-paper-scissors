//RPS is the acronym for rock paper scissors
function getComputerChoice() {
  const rpsValues = ["rock", "paper", "scissors"];
  const value = Math.floor(Math.random() * rpsValues.length);
  const randomRpsValue = rpsValues[value];

  return randomRpsValue;
}

function setRpsValues(testValue) {
  if (testValue == "rock") {
    document.querySelector(".computer-box-content").textContent = "👊";
  } else if (testValue == "scissors") {
    document.querySelector(".computer-box-content").textContent = "✂️";
  } else if (testValue == "paper") {
    document.querySelector(".computer-box-content").textContent = "🖐️";
  }
}

let playerCount = 0;
let computerCount = 0;
function playRound(playerChoice, computerSelection) {
  if (playerChoice == "rock") {
    if (computerSelection == "paper") {
      computerCount++;
    } else {
      playerCount++;
    }
  }
  if (playerChoice == "scissors") {
    //something
    if (computerSelection == "rock") {
      computerCount++;
    } else {
      playerCount++;
    }
  }
  if (playerChoice == "paper") {
    //something
    if (computerSelection == "scissors") {
      computerCount++;
    } else {
      playerCount++;
    }
  }
  document.querySelector(".player-score").textContent = playerCount;
  document.querySelector(".computer-score").textContent = computerCount;

  if (playerCount == 5) {
    document.querySelector(".player-score").textContent = "You Won!";
    computerCount = 0;
    playerCount = 0;
  } else if (computerCount == 5) {
    //you lose.
    document.querySelector(".player-score").textContent = "You Lost!";
    computerCount = 0;
    playerCount = 0;
  }
}

function getPlayerChoice() {
  let playerChoice = null;
  document.querySelector(".rock").addEventListener("click", () => {
    playerChoice = "rock";
    document.querySelector(".player-box-content").textContent = "👊";
    gameLogic(playerChoice);
  });

  document.querySelector(".paper").addEventListener("click", () => {
    playerChoice = "paper";
    document.querySelector(".player-box-content").textContent = "🖐️";
    gameLogic(playerChoice);
  });

  document.querySelector(".scissors").addEventListener("click", () => {
    playerChoice = "scissors";
    document.querySelector(".player-box-content").textContent = "✂️";
    gameLogic(playerChoice);
  });
}

function gameLogic(playerChoice) {
  const computerSelection = getComputerChoice();
  setRpsValues(computerSelection);

  for (i = 0; i < 5; i++) {
    playRound(playerChoice, computerSelection);
  }
}

getPlayerChoice();
