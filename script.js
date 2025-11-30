let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

const genCompChoice = () => {
  let choices = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const drawGame = () => {
  msg.innerText = "Game was Draw.";
  msg.style.background = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.background = "red";
  }
};

const playGame = (userChoice) => {
  // generating the computer choice.
  const compChoice = genCompChoice();
  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissor
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice === "scissor") {
      // paper, rock
      compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((val) => {
  val.addEventListener("click", () => {
    let userChoice = val.getAttribute("id");
    playGame(userChoice);
    genCompChoice();
  });
});
