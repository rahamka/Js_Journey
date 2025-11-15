//  Part D: DOM Selection & Manipulation (101-130).

// // 101.
// // Get a reference to an HTML element by its ID and change its text content.
// // my code
// // let htmlElement_101 = document.getElementById("heading");
// // console.log(htmlElement_101.textContent);

// //  102.
// // Get a reference to an element by its ID and change its background color
// // my code.
// // let htmlElement_102 = document.getElementById("heading");
// // htmlElement_102.style.background = "red";

// //  103. Select the first <p> tag on the page and change its font size
// // my code.
// // let para_103 = document.getElementsByTagName("p");
// // console.log(para_103[0].textContent);

// // 104.
// // start from this.
// // let all_list_items_104 = document.querySelectorAll("li>a");
// // all_list_items_104.forEach((val) => {
// //   val.style.color = "red";
// // });

// // 105.
// // let element_105 = document.querySelector(".container");
// // element_105.style.border = "2px solid black";

// // 106.
// // let items_106 = document.querySelectorAll(".item");
// // console.log(items_106.length);

// // 107.
// let newDiv_107 = document.createElement("div");
// newDiv_107.setAttribute("ID", "newDiv");
// newDiv_107.textContent = "New Div 1";

// // 108.
// document.writeln(newDiv_107.textContent);

// // 109.
// let listItem2_109 = document.createElement("li");
// listItem2_109.textContent = "List Item 2";

// // getting the ul element for appeding & prepending
// let ulElement_109 = document.getElementById("ul");
// ulElement_109.append(listItem2_109);

// // 110.
// let listItem1_109 = document.createElement("li");
// listItem1_109.textContent = "List Item 1";
// ulElement_109.prepend(listItem1_109);

// // 111.
// let specificDiv_111 = document.getElementById("container");
// // why 57 line isn't working what is the difference lastChild vs lastElementChild?
// specificDiv_111.removeChild(specificDiv_111.lastChild);
// specificDiv_111.removeChild(specificDiv_111.lastElementChild);

// // 112.
// // why by this code container is removing it should've to pick the first element of body?
// let specificElement_112 = document.getElementsByTagName("div");
// specificElement_112[0].remove();

// // 113.
// // how to replace the container_113 element with newElement_113?
// // let existingEl_113 = document.getElementById("newDiv");
// // let newElement_113 = document.createElement("div");
// // newElement_113.textContent = "New Div 113.";

// // // gettting container for accessing the element
// // let container_113 = document.getElementById("container");
// // container_113.childNodes[1].isEqualNode = newElement_113;

// // 114.
// let container_114 = document.getElementById("newDiv");
// let parentElement_114 = container_114.parentElement;
// parentElement_114.style.backgroundColor = "gray";

// // 115.
// let ulList_Element_115 = document.getElementById("ul");
// ulList_Element_115.childNodes.forEach((val) => {
//   console.log(val.textContent);
// });

// // 116.
// // line. . Check if an element has a specific class and, if it does, remove it. If it doesn't, add it.
// // my understanding to check the element which has specific class it means have class available in the body
// //  1. can we remove the class of this element
// // 2. can we add the class to this element.
// // my code
// let element_116 = document.getElementById("container2");
// let elId_116 = element_116.getAttribute("id");
// let setAttribute_116 = element_116.setAttribute("id", "container133");
// console.log(element_116.getAttribute("id"));

// // 117. Set a custom HTML5 data attribute (e.g., data-user-id ) on an element and then read its value using JavaScript.
// // what this question is want to say?

// 118.
// let toggleBtn_118 = document.getElementById("toggleBtn");
// let toggleDiv_118 = document.getElementById("toggleDiv");
// let toggleValue_118 = "Hide";
// toggleBtn_118.addEventListener("click", () => {
//   if (toggleValue_118 === "Hide") {
//     toggleDiv_118.remove();
//     toggleValue_118 = "Show";
//     toggleBtn_118.textContent = "Show";
//   } else {
//     document.body.prepend(toggleDiv_118);
//     toggleValue_118 = "Hide";
//     toggleBtn_118.textContent = "Hide";
//   }
// });

// 119.
// let imgElement_119 = document.createElement("img");
// imgElement_119.setAttribute("src", "dev.png");
// imgElement_119.setAttribute("height", "150px");
// imgElement_119.setAttribute("width", "150px");
// document.body.appendChild(imgElement_119);

// 120.
// let anchors_120 = document.querySelectorAll("a");
// anchors_120.forEach((val) => {
//   val.setAttribute("href", "#");
//   console.log(val.getAttribute("href"));
// });

// 121.
// let allButtons_121 = document.querySelectorAll("button");
// allButtons_121.forEach((val) => {
//   val.remove();
// });

// 122. Clone an existing node and append the clone to its parent, creating a duplicate.

// 123.

let table = document.createElement("table");
let thead = document.createElement("thead");
let thead_tr = document.createElement("tr");
let th1 = document.createElement("th");
th1.textContent = "#Roll No.";
let th2 = document.createElement("th");
th2.textContent = "Name:";
let th3 = document.createElement("th");
th3.textContent = "Marks:";
thead_tr.appendChild(th1);
thead_tr.appendChild(th2);
thead_tr.appendChild(th3);
thead.appendChild(thead_tr);
table.appendChild(thead);

let tbody = document.createElement("tbody");
table.appendChild(tbody);

// tbody
document.body.appendChild(table);

function table123(Roll, Name, Marks) {
  let tbody_tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = Roll;

  let td2 = document.createElement("td");
  td2.textContent = Name;

  let td3 = document.createElement("td");
  td3.textContent = Marks;

  tbody_tr.appendChild(td1);
  tbody_tr.appendChild(td2);
  tbody_tr.appendChild(td3);

  tbody.appendChild(tbody_tr);
}

table123("123", "Waheed", "39");
table123("456", "Ali", "85");

// 125.
let htmlContent_125 = document.getElementById("htmlContent");
htmlContent_125.innerHTML =
  "<header>This is 125 Problem</header.><p>This is 125 Header.</p>";

// 126.
// not showing the textContent why?
let Input_126 = document.getElementById("input_126");
let button_126 = document.getElementById("button_126");

button_126.addEventListener("click", () => {
  console.log(Input_126.value);
});

// 127.
Input_126.setAttribute("value", "text");

// 128.
Input_126.removeAttribute("value");

// 129.
Input_126.setAttribute("placeholder", "Enter Any Value.");

// 130.
let btn1_130 = document.getElementById("progressBtn1");
let btn2_130 = document.getElementById("progressBtn2");
let btn3_130 = document.getElementById("progressBtn3");
let progressBar = document.getElementById("progressDiv");

btn1_130.addEventListener("click", () => {
  progressBar.style.width = "160px";
  progressBar.textContent = "Completed in 1 day ";
});

btn2_130.addEventListener("click", () => {
  progressBar.style.width = "200px";
  progressBar.textContent = "Completed in 2 days ";
});

btn3_130.addEventListener("click", () => {
  progressBar.style.width = "300px";
  progressBar.textContent = "Completed in 3 days ";
});

// ** Part E: Event Handling & Forms (131-160) ** \\

// 131.
let button_131 = document.getElementById("button_131");
button_131.addEventListener("click", () => {
  console.log("Button Clicked!");
});

// 132.

let para_132 = document.getElementById("para_132");
button_131.addEventListener("click", () => {
  para_132.textContent = "Paragraph Text Changed.";
});

// 133.
let toggleValue = true;
let image_133 = document.getElementById("image_133");
image_133.addEventListener("dblclick", () => {
  if (toggleValue == true) {
    image_133.style.borderWidth = "2px";
    image_133.style.borderStyle = "solid";
    image_133.style.borderColor = "blue";
    toggleValue = false;
  } else if (toggleValue == false) {
    image_133.style.border = null;
    toggleValue = true;
  }
});

// 134.
let div_134 = document.getElementById("div_134");
div_134.addEventListener("mouseover", () => {
  div_134.style.backgroundColor = "yellow";
});

div_134.addEventListener("mouseleave", () => {
  div_134.style.backgroundColor = "aqua";
});

// 135.
// Get a grip on problems like these
document
  .getElementById("myInput")
  .addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
  });

// 136.
//  Add a keyup event listener to an input that logs the current value of the input.

// 137.
// problem:  Create a form with one text input and a submit button. Prevent the default form
//  submission and log the input value

// my code am i correct ?
let dataLogBtn = document.getElementById("dataLogBtn_137");
const form = document.getElementById("myForm");
const input = document.getElementById("myInput");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 👉 stop page reload
  console.log("Input Value =", input.value);
});

// 138.
let username = document.getElementById("username");
let password = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault(); // 👉 stop page reload
  console.log(username.value.trim() + username.value.length);
  console.log(password.value.trim());
});

// 139.

password = document.getElementById("password");
password.addEventListener("keypress", (evt) => {
  if (password.value.length > 8) {
    password.style.border = "2px";
    password.style.borderStyle = "2px";
    password.style.borderColor = "red";
  }
});

// 140.
// Implement a character counter for a textarea that shows "X characters
//  remaining"

// 141.

let toggleBtn_141 = document.getElementById("toggleBtn_141");
let toggleBtn_value = true;
toggleBtn_141.addEventListener("click", () => {
  if (toggleBtn_value == true) {
    toggleBtn_141.textContent = "ON";
    toggleBtn_value = false;
  } else if (toggleBtn_value == false) {
    toggleBtn_141.textContent = "OFF";
    toggleBtn_value = true;
  }
});

// 142.
// Create a simple accordion (collapsible content). Clicking a heading should
//  show/hide the content below it.

// 143.
let popupBtn = document.getElementById("popupBtn");
let popupValue = true;
let popup = document.getElementById("popup");
popup.remove();
popupBtn.addEventListener("click", () => {
  if (popupValue == true) {
    document.body.prepend(popup);
    popupBtn.textContent = "Hide Popup";
    popupValue = false;
  } else if (popupValue == false) {
    popup.remove();
    popupBtn.textContent = "Show Popup";
    popupValue = true;
  }
});

// 144.
// Close the modal from the previous problem by also clicking outside the modal's
//  content area.

// 145.
// Create a custom context menu (right-click menu) that appears at the mouse
//  position.

// 146.
//  Implement a "scroll to top" button that appears after scrolling 200px and
//  smoothly scrolls the page to the top when clicked
// my code
let appearBtn = document.getElementById("appearBtn");
appearBtn.remove();
document.body.addEventListener("keydown", (evt) => {
  if (scrollY == "200px") {
    let container = document.getElementById("container2");
    container.append(appearBtn);
  } else {
    console.log("Not appearing the Btn.");
  }
});
// 147.
//  Create a draggable div element.

// 148.
//   Create a drop zone that changes color when a draggable element is dragged over it.

// 149.
// . Implement the drag-and-drop functionality to move the draggable element into
//  the drop zone.

// 150.
// Add an event listener to an element that only fires once.
// my code
let fireElement = document.getElementById("fireonce");
fireElement.addEventListener("click", () => {
  fireElement.style.borderWidth = "2px";
  fireElement.style.borderStyle = "solid";
  fireElement.style.borderColor = "yellow";
});

// 151.
let ul_151 = document.getElementById("ul_151");
let li_151 = document.querySelectorAll("li");
li_151.forEach((val) => {
  val.addEventListener("click", () => {
    console.log(`clicked on ${val.textContent} `);
  });
});

// 152.

let self_disable_btn = document.getElementById("self_disableBtn");
self_disable_btn.addEventListener("click", () => {
  self_disable_btn.remove();
});

// 153.
//  Create a search input that logs the search term only after the user has stopped
//  typing for 500ms (debouncing).
// my code.

let searchInput = document.getElementById("searchInput");
setTimeout(() => {
  console.log(searchInput.value);
}, 500);

// 154.
let counter_154 = document.getElementById("counter");
let likes = document.getElementById("likesPara");
let counter_value = 1;
counter_154.addEventListener("click", () => {
  likes.innerText = counter_value;
  counter_value++;
});

// 155.
let checkBox = document.getElementById("checkbox");
checkBox.addEventListener("change", () => {
  console.log(checkBox);
});

// 156.
// Note: why page reloads if we're not writing the below line?
//  event.preventDefault(); // 👉 stop page reload

// solve this problem before moving ahead.
