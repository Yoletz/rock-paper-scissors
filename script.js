function getComputerChoice() {
  let choiceNum = Math.ceil(Math.random() * 3);

  switch (choiceNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors"
  }
}