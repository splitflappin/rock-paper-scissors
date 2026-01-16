function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    return "Rock";
  } else if (randomNum == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice(instructions = "Rock Paper or Scissors?") {
  let pick = prompt(instructions);

  if (pick.toLowerCase() == "rock") {
    return "Rock";
  } else if (pick.toLowerCase() == "paper") {
    return "Paper";
  } else if (pick.toLowerCase() == "scissors") {
    return "Scissors";
  } else {
    getHumanChoice("Invalid choice. Must be either paper, rock, or scissors");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(`Tie, you both selected ${humanChoice}`);
  } else if ((humanChoice == "Paper") & (computerChoice == "Rock")) {
    humanScore += 1;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if ((humanChoice == "Scissors") & (computerChoice == "Paper")) {
    humanScore += 1;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    humanScore += 1;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore += 1;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();

  playGame();
}
function playGame() {
  if (rounds <= 5) {
    rounds += 1;
    playRound(humanSelection, computerSelection);
  } else {
    if (humanScore > computerScore) {
      return console.log("Game over: you win!");
    } else if (humanScore == computerScore) {
      return console.log("Game over: it's a tie");
    } else {
      return console.log("Game over: you lose!");
    }
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

playGame();
