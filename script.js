let img_1 = document.getElementById("img-1");
let img_2 = document.getElementById("img-2");
let img_3 = document.getElementById("img-3");
let resultBtn = document.getElementById("resultBtn");

let comp_Counter = 0;
let my_Counter = 0;
let randomNum = "";
img_1.addEventListener("click", () => {
  let img_1Value = 0.3;
  randomNum = Math.random();
  if (randomNum > img_1Value) {
    resultBtn.innerText = "You Lost";
    resultBtn.style.backgroundColor = "red";
    resultBtn.style.color = "white";
  } else if (randomNum <= img_1Value) {
    resultBtn.innerText = "You Win, Computer Beats";
    resultBtn.style.backgroundColor = "green";
    resultBtn.style.width = "auto";
    resultBtn.style.color = "white";
  }
});

img_2.addEventListener("click", () => {
  randomNum = Math.random();
  console.log(randomNum);
});

img_3.addEventListener("click", () => {
  randomNum = Math.random();
  console.log(randomNum);
});
