function getComputerChoice() {
  let choiceNum = Math.ceil(Math.random() * 3);

  switch (choiceNum) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function capitalize(str) {
  str = str.toLowerCase();
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

function startBattle(playerSelection, computerSelection) {

  if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")) {
      return `You Lose... ${computerSelection} beats ${playerSelection}`;
  }

  if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Rock")) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
    return "Invalid Input!";
  }

  if (playerSelection == computerSelection) {
    return "Tie!";
  }

  return startBattle(playerSelection, computerSelection);
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