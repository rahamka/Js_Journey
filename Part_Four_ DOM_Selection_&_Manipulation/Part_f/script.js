// Part F: Browser APIs & Storage (161-180)

//  161.
let str = "Hello, LocalStorage!";
localStorage.setItem("str", str);

// 162.
console.log(localStorage.getItem("str"));

// 163.
let student = {
  Name: "Raham",
  Marks: "92%",
  Class: "Enter",
};

localStorage.setItem("student", JSON.stringify(student));

// 164.
//  Retrieve a JavaScript object from localStorage . (Hint: JSON.parse() )
// let value = localStorage.getItem(JSON.parse("student"));
// console.log(value);

// 165.
let itemRemove = localStorage.removeItem("str");

// 166.
localStorage.clear();

// 167.
// 161 for 167.
let str2 = "Hello SessionStorage";
sessionStorage.setItem("str2", str2);
// 162 for 167
console.log(sessionStorage.getItem("str2"));
// 163 for 167.
// object -saving in sessionStorage
let student2 = {
  Name: "Raham Ali",
  Marks: "87%",
  Class: "Enter",
};
sessionStorage.setItem("student2", JSON.stringify(student2));
// 164 for 167.
// isn't working
// console.log(sessionStorage.getItem(JSON.parse("student2")));

// 165 for 167.
sessionStorage.removeItem("str2");

// 166 for 167.
sessionStorage.clear();

// 168.
// Get the user's current geographical coordinates using the Geolocation API.

// 169.
//  Display the user's latitude and longitude on a web page.

// 170.
// Show an alert if the browser does not support the Geolocation API.

// 171.
// Create a <canvas> element and draw a rectangle.

// 172.
// Draw a circle (or arc) on the <canvas>

// 173.
//  Draw a line on the <canvas> .

// 174.
// Create a simple animation of a rectangle moving from left to right across the
//  <canvas> .

// 175.
//  Use fetch to get data from the JSONPlaceholder API (e.g.,
//  https://jsonplaceholder.typicode.com/posts/1 ) and log the response.

// 176.
//  Display the fetched post's title from the previous problem in a div on your page.

// 177.
//  Use fetch to get a list of posts (e.g., https://jsonplaceholder.typicode.com/posts )
//  and display the titles in an unordered list ( <ul> ).

// 178.
//  Handle errors for the fetch call (e.g., if the URL is wrong) using .catch() or
//  try...catch .

// 179.
// Use the History API to change the URL without reloading the page ( pushState ).

// 180.
//  Detect when the user presses the browser's back/forward buttons using the
//  popstate event.
