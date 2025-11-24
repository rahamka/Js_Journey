// task 1
let textArea = document.getElementById("textarea");
let counterPara = document.getElementById("counterPara");
const MAX_CHARS = 50;

textArea.addEventListener("input", () => {
  let currentLength = textArea.value.length;

  // Update counter
  counterPara.innerText = `${currentLength} / ${MAX_CHARS} characters`;

  // Change outline color based on length
  if (currentLength >= 45) {
    textArea.style.outlineColor = "red";
    textArea.disabled = true; // stop typing
  } else if (currentLength >= 40) {
    textArea.style.outlineColor = "orange";
  } else {
    textArea.style.outlineColor = "black";
    textArea.disabled = false;
  }

  // Optional: prevent typing beyond max limit
  if (currentLength > MAX_CHARS) {
    textArea.value = textArea.value.slice(0, MAX_CHARS);
  }
});

// task 2
let myImg = document.getElementById("myImg");
let once = false;
myImg.addEventListener("dblclick", () => {
  once = !once;
  myImg.style.transform = once ? "scale(1.5)" : "";
});
