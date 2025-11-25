const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const myScore = document.getElementById("myScore");
const computerScore = document.getElementById("computerScore");
const statusBtn = document.getElementById("statusBtn");

let myPoints = 0;
let compPoints = 0;

const choices = ["rock", "paper", "scissors"];

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    statusBtn.textContent = "Draw! Both picked " + userChoice;
    statusBtn.style.background = "#6c757d";
    return;
  }

  const win =
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper");

  if (win) {
    myPoints++;
    myScore.textContent = myPoints;
    statusBtn.textContent = `You Win! Computer chose ${computerChoice}`;
    statusBtn.style.background = "#2ecc71";
  } else {
    compPoints++;
    computerScore.textContent = compPoints;
    statusBtn.textContent = `You Lost! Computer chose ${computerChoice}`;
    statusBtn.style.background = "#e74c3c";
  }
}

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));
