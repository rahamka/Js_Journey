// target , clientX & clientY
let btn = document.getElementById("btn");
let value = 34;

btn.addEventListener("click", () => {
  console.log(!Number.isNaN(value));
});
