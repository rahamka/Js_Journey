let textArea = document.getElementById("textarea");
let counterPara = document.getElementById("counterPara");
const MAX_CHARS = 50;

textArea.addEventListener("input", () => {
  let currentLength = textArea.value.length;

  // Prevent typing beyond MAX_CHARS
  if (currentLength > MAX_CHARS) {
    textArea.value = textArea.value.slice(0, MAX_CHARS);
    currentLength = MAX_CHARS;
  }

  // Update counter
  counterPara.innerText = `${currentLength} / ${MAX_CHARS} characters`;

  // Change outline color based on length
  if (currentLength >= 45) {
    textArea.style.outlineColor = "red"; // danger
  } else if (currentLength >= 40) {
    textArea.style.outlineColor = "orange"; // warning
  } else {
    textArea.style.outlineColor = "black"; // normal
  }
});
