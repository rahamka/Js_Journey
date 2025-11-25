let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("handler - 1");
});

let handler2 = (evt) => {
  console.log("handler - 2");
  console.log(evt);
};
btn.addEventListener("click", handler2);

// removing the eventListener.
btn.removeEventListener("click", handler2);

btn.addEventListener("click", () => {
  console.log("handler - 3");
});
