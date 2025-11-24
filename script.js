// Today test cases for know the errors?
let btn = document.getElementById("btn");
let value = "Dark Mode";

// usage of toggle button by functions
// this is working perfectly.
// btn.onclick = () => {
//   if (value == "Dark Mode") {
//     document.body.style.backgroundColor = "black";
//     value = "Light Mode";
//     console.log("Dark Mode");
//   } else {
//     document.body.style.backgroundColor = "white";
//     value = "Dark Mode";
//     console.log("Light Mode");
//   }
// };

// usage of toggle button by switch statement
// isn't working why?
// btn.addEventListener("click", () => {
//   switch (value) {
//     case "Dark Mode":
//       document.body.style.backgroundColor = "black";
//       value = "Light Mode";
//       console.log("Dark Mode");
//       break;
//     case "Light Mode":
//       document.body.style.backgroundColor = "white";
//       value = "Dark Mode";
//       console.log("Light Mode");
//       break;
//   }
// });

let isDark = false;

btn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.style.backgroundColor = isDark ? "black" : "white";
});
