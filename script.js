// target , clientX & clientY
let btn = document.getElementById("btn");

btn.addEventListener("click", (evt) => {
  console.log(evt.x);
  if (evt.x == "16px") {
    console.log("hello world");
  }
});
