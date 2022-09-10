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
    return "You Lose... Paper beats Rock";
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose... Rock beats Scissors";
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose... Scissors beats Paper";
  }

  if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  }
}

function game() {
  let yourScore = 0;
  let compScore = 0;

  for (let i = 0; i < 5; i++) {
    let yourSelection = prompt("Choose a handsign");
    let compSelection = getComputerChoice();
    let result = playRound(yourSelection, compSelection);

    console.log(result);

    if (result == "Invalid Input!") {
      alert("You are disqualified!");
      return;
    }

    if (result == "Tie!") {
      yourScore += 0.5;
      compScore += 0.5;
    } else if (result[4] === "L") {
      compScore++;
    } else if (result[4] === "W") {
      yourScore++;
    }
  }

  if (yourScore > compScore) console.log("You win the game!");
  if (compScore > yourScore) console.log("You lose the game...");
  if (yourScore === compScore) console.log("It's a draw!");
}