function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", (e) => {
  playRound("Rock", getComputerChoice());
});

paperBtn.addEventListener("click", (e) => {
  playRound("Paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", (e) => {
  playRound("Scissors", getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Tie, you both selected ${humanChoice}`);
  } else if ((humanChoice === "Paper") & (computerChoice == "Rock")) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if ((humanChoice === "Scissors") & (computerChoice === "Paper")) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === "Rock" && computerChoice == "Scissors") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${humanChoice} beats ${computerChoice}`);
  }

  computerSelection = getComputerChoice();
}

let computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
