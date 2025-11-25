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
    resultDiplayBtn.innerText = "You Won.";
  } else if (randomNum > rockValue) {
    compResultCounter += 1;
    compCounter.innerText = compResultCounter;
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost.";
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
    resultDiplayBtn.innerText = "You Won.";
  } else if (randomNum > paperValue) {
    compResultCounter += 1;
    compCounter.innerText = compResultCounter;
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost.";
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
    resultDiplayBtn.innerText = "You Won.";
  } else if (randomNum < scissorValue) {
    compResultCounter += 1;
    compCounter.innerText = compResultCounter;
    resultDiplayBtn.style.backgroundColor = "red";
    resultDiplayBtn.style.color = "white";
    resultDiplayBtn.innerText = "You Lost.";
  }
});
