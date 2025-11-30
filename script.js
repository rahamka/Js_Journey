let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let userChoice = (val) => {
  console.log(`User Choice = ${val}`);
};

let compChoice = () => {
  let choices = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  console.log(`Computer Choice = ${choices[randomNum]}`);
  return choices[randomNum];
};
choices.forEach((val) => {
  val.addEventListener("click", () => {
    let userId = val.getAttribute("id");
    userChoice(userId);
    compChoice();
  });
});
