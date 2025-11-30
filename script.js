let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const msg = document.getElementById("msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const playGame = (userChoice) => {
  const UserChoice = userChoice;
  // Generate computer choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    msg.innerText = "Game was Draw!";
    return;
  } else if (userChoice == "rock") {
    // paper, scissors
    if (compChoice == "paper") {
      msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
      compScore++;
    } else if (compChoice == "scissors") {
      msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
      userScore++;
    }
  } else if (userChoice == "scissors") {
    // rock, paper
    if (compChoice == "rock") {
      msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
      compScore++;
    } else if (compChoice == "paper") {
      msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
      userScore++;
    }
  } else if (userChoice == "paper") {
    // scissors, rock
    if (compChoice == "scissors") {
      msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
      compScore++;
    } else if (compChoice == "rock") {
      msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
      userScore++;
    }
  }
};

function scoreStore(Uscore, Cscore) {
  localStorage.setItem("user-score", Uscore);
  localStorage.setItem("comp-score", Cscore);
}

function scoreUpdate() {
  let user_score = localStorage.getItem("user-score");
  let comp_score = localStorage.getItem("comp-score");
  userScorePara.innerText = user_score;
  compScorePara.innerText = comp_score;
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
    genCompChoice();
    scoreStore(userScore, compScore);
    scoreUpdate();
  });
});

scoreUpdate();

// 08: 03: 00 starting time of lacture of this game
// ok create this project using your own logic?
// use localStorage to save scores of user and computer.
