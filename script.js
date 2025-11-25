let rockImg = document.getElementById("img-1");
let paperImg = document.getElementById("img-2");
let scissorImg = document.getElementById("img-3");
let myCounter = document.getElementById("myCounterPara");
let compCounter = document.getElementById("compCounter");
let resultDiplayBtn = document.getElementById("resultBtn");

let randomNum;
let rockValue = 0.3;
let MyresultCounter = 0;
let compResultCounter = 0;
rockImg.addEventListener("click", () => {
  randomNum = Number(Math.random());
  if (randomNum <= rockValue) {
    MyresultCounter += 1;
    myCounter.innerText = MyresultCounter;
    resultDiplayBtn.style.backgroundColor = "green";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Won Computer Beats.";
  } else if (randomNum > rockValue) {
    compResultCounter += 1;
    compCounter.innerText = compResultCounter;
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost.";
  }
  if (randomNum > rockValue && randomNum < paperValue) {
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost Computer Select Paper.";
    resultDiplayBtn.style.margin = "0px 10px 0px 10px ";
  }
  if (randomNum > paperValue && randomNum < scissorValue) {
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost Computer Select Scissor.";
    resultDiplayBtn.style.margin = "0px 15px 0px 15px ";
  }
});

let paperValue = 0.6;
paperImg.addEventListener("click", () => {
  randomNum = Math.random();
  if (randomNum <= paperValue && randomNum > rockImg) {
    MyresultCounter += 1;
    myCounter.innerText = MyresultCounter;
    resultDiplayBtn.style.backgroundColor = "green";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Won Computer Beats.";
  } else if (randomNum > paperValue) {
    compResultCounter += 1;
    compCounter.innerText = compResultCounter;
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost.";
  }
  if (randomNum <= rockValue) {
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost Computer Select Rock.";
  }
  if (
    randomNum > rockValue &&
    randomNum <= scissorValue &&
    randomNum > paperValue
  ) {
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost Computer Select Scissor.";
  }
});

let scissorValue = 0.9;
scissorImg.addEventListener("click", () => {
  randomNum = Math.random();
  if (randomNum <= scissorValue && randomNum > paperValue) {
    MyresultCounter += 1;
    myCounter.innerText = MyresultCounter;
    resultDiplayBtn.style.backgroundColor = "green";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Won Computer Beats.";
  } else if (randomNum < scissorValue) {
    compResultCounter += 1;
    compCounter.innerText = compResultCounter;
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost.";
  }
  if (randomNum <= rockValue) {
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost Computer Select Rock.";
  }
  if (randomNum <= paperValue && randomNum > rockValue) {
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost Computer Select Paper.";
  }
});
