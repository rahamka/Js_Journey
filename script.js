// task 1
let textArea = document.getElementById("textarea");
let counter = 0;
let counterPara = document.getElementById("counterPara");
textArea.addEventListener("keydown", (evt) => {
  counter += 1;
  if (textArea.value.length > 45) {
    textArea.style.outlineColor = "red";
  }
  if (textArea.value.length < 45) {
    textArea.style.outlineColor = "black";
  }
  if (evt.key == "Backspace") {
    counter -= 2;
    console.log(counter);
  }
  counterPara.innerText = counter;
});
