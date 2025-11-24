// removeChild
let wholeDiv = document.getElementById("wholeDiv");
let box_3 = document.getElementById("box-3");
wholeDiv.removeChild(box_3);

// appendChild
let h1 = document.createElement("h1");
h1.textContent = "Heading";
wholeDiv.appendChild(h1);

// practice question
let button = document.createElement("button");
button.textContent = "Click me!";
button.style.background = "red";
button.style.color = "white";

let body = document.getElementById("body");
body.prepend("button");

// practice question - 2
let el = document.getElementById("para");
el.classList.add("newClass");
