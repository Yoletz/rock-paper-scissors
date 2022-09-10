function getComputerChoice() {
  let choiceNum = Math.ceil(Math.random() * 3);

  switch (choiceNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    return "Invalid Input!";
  }

  if (playerSelection == computerSelection) {
    return "Tie!";
  }

  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  }
}