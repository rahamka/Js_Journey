let btn = document.getElementById("btn");
let value = "Dark Mode";
btn.onclick = () => {
  if (value == "Dark Mode") {
    document.body.style.backgroundColor = "black";
    value = "Light Mode";
    console.log("Dark Mode");
  } else {
    document.body.style.backgroundColor = "white";
    value = "Dark Mode";
    console.log("Light Mode");
  }
};
