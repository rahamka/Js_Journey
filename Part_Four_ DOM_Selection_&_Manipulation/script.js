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
