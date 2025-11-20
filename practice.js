// Question 3.
// why here this code isn't working while paras gives us list of elements?
// let items = document.getElementsByClassName("paras");
// // items.forEach(...) ❌

// Array.from(items).forEach((el) => {
//   // ✔
//   console.log(el);
// });

let ul = document.querySelector("#menu");
// console.log(ul.textContent);
// text Node
// my understanding for this.
// actually text is automatically created by the browser for align the elements in the body.

// paras
let para1 = document.getElementById("para_1");
console.log(para1.textContent);
console.log(para1.innerText);
