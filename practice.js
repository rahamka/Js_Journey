// let ul = document.querySelector("#menu");
// console.log(ul.textContent);
// text Node
// my understanding for this.
// actually text is automatically created by the browser for align the elements in the body.

let para1 = document.getElementById("para_1");
let newPara = document.createElement("p");
newPara.textContent = "ali";
document.getElementById("para_1").replaceWith(newPara);

// replaceChild single element
let ul = document.getElementById("menu");
let explore = document.createElement("li");
explore.textContent = "Explore";
ul.childNodes[0].replaceWith(explore);

// replaceChildren all elements
let newChild = document.createElement("li");
newChild.textContent = "New Child";
ul.replaceChildren(newChild);
