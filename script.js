const buttons = document.querySelectorAll("#buttons > button");
buttons.forEach(btn => btn.addEventListener("click", startMatch));

const yourScoreBar = document.querySelector("#your-score");
const compScoreBar = document.querySelector("#comp-score");

const rematchBtn = document.createElement("button");
rematchBtn.setAttribute("id", "rematch");
rematchBtn.addEventListener("click", resetBattle);
rematchBtn.textContent = "Rematch";

const result = document.querySelector("#result");
const body = document.querySelector("body");

let yourPoints = 0;
let compPoints = 0;

function resetBattle() {
  body.removeChild(rematchBtn);
  yourScoreBar.textContent = "Your Score: 0";
  compScoreBar.textContent = "Comp Score: 0";
  result.textContent = "";
  for (const btn of buttons) {
    btn.removeAttribute("disabled", "");
  }
}

function startMatch() {
  const points = playRound(this.id, getComputerChoice());
  yourPoints += points.player;
  compPoints += points.comp;
  yourScoreBar.textContent = `Your Score: ${yourPoints}`;
  compScoreBar.textContent = `Comp Score: ${compPoints}`;

  if (compPoints === 5 || yourPoints === 5) {
    body.append(rematchBtn);

    if (yourPoints === 5) {
      result.textContent = "You won the game!!";
    } else if (compPoints === 5) {
      result.textContent = "You lost the game...";
    }

    yourPoints = 0;
    compPoints = 0;

    for (const btn of buttons) {
      btn.setAttribute("disabled", "");
    }
  }
}

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

  if (playerSelection == computerSelection) {
    console.log("Tie!");
    result.textContent = "Tie!";
    return {"player": 0, "comp": 0};
  }

  if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
      console.log(`You Win!! ${playerSelection} beats ${computerSelection}`);
      result.textContent = "You scored!";
      return {"player": 1, "comp": 0};
  }

  if ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")) {
      console.log(`You Lose... ${computerSelection} beats ${playerSelection}`);
      result.textContent = "Computer scored.."
      return {"player": 0, "comp": 1};
  }
}