// task 1
let btn = document.getElementById("btn");
let value = false;
btn.addEventListener("click", () => {
  if (value == false) {
    document.body.style.backgroundColor = "black";
    value = true;
  } else {
    document.body.style.backgroundColor = "white";
    value = false;
  }
});

// task 1 way = > 2

btn.addEventListener("click", () => {
  value = !value;
  document.body.style.backgroundColor = value ? "black" : "white";
});

// task 2
let mousePara = document.getElementById("mousemovePara");
mousePara.addEventListener("mousemove", (evt) => {
  mousePara.innerText = `clientX = ${evt.x}, & clientY = ${evt.y}`;
});

// task 3
let inputField = document.getElementById("input");
inputField.addEventListener("keydown", (evt) => {
  if (inputField.value.length >= 11) {
    let arr = [];
    arr.push(inputField.value);
    for (let i = 1; i <= 11; i++) {
      inputField.value = arr[i];
    }

    inputField.style.outlineColor = "red";
  } else if (inputField.value.length <= 11) {
    inputField.style.outlineColor = "black";
  }
  if (evt.key == "Enter") {
    inputField.value = `Entered total ${inputField.value.length} chars.`;
  }
});

// note: i can append the innerField in another element but i want to simple get results.

// task 4.
let img = document.getElementById("myImg");

img.addEventListener("dblclick", () => {
  value = !value;
  img.style.width = value ? "150px" : "100px";
  img.style.height = value ? "150px" : "100px";
});

// task 5.
let form = document.getElementById("submitForm");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let name = form.querySelector("input").value;
  alert("Hello " + name + "!");
});
