// target , clientX & clientY
let btn = document.getElementById("btn");

// how to remove the addEventListener ?
let handler1 = (evt) => {
  console.log("handler - 1", evt);
};
let value1 = btn.addEventListener("click", handler1);

btn.addEventListener("click", (evt) => {
  console.log("handler - 2", evt);
});

btn.removeEventListener("click", handler1);
