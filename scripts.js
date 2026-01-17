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
const resultEl = document.querySelector(".result");
const scoreEl = document.querySelector(".score");

rockBtn.addEventListener("click", (e) => {
  playRound("Rock", getComputerChoice());
});

paperBtn.addEventListener("click", (e) => {
  playRound("Paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", (e) => {
  playRound("Scissors", getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  resultEl.textContent = "";
  if (humanChoice === computerChoice) {
    humanScore += 1;
    computerScore += 1;
    resultEl.textContent = `Tie, you both selected ${humanChoice}`;
  } else if ((humanChoice === "Paper") & (computerChoice === "Rock")) {
    resultEl.textContent = `You win! Your pick ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
  } else if ((humanChoice === "Scissors") & (computerChoice === "Paper")) {
    resultEl.textContent = `You win! Your pick ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore += 1;
    resultEl.textContent = `You win! Your pick ${humanChoice} beats ${computerChoice}`;
  } else {
    resultEl.textContent = `You lose! Your pick ${humanChoice} loses to ${computerChoice}`;
    computerScore += 1;
  }

  scoreEl.textContent = `Your score ${humanScore} Computer score ${computerScore}`;
}
