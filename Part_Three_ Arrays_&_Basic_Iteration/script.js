// 61.
let array = [20, 30, 40, 50];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 62.
// for (let elements of array) {
//   console.log(elements);
// }

// 63.
// for (let elements in array) {
//   console.log(`Index = ${elements} & Element = ${array[elements]}`);
// }

// 64.
// array.forEach((val) => {
//   console.log(val);
// });

// 65.
// array.map((val) => {
//   console.log(val + val);
// });

// 66.
// let newArray_66 = [];
// array.filter((val) => {
//   if (val % 2 == 0) {
//     newArray_66.push(val);
//   }
// });
// console.log(newArray_66);

// 67.  Find the first element in an array that is greater than 10 using .find()

// 68. Find the index of the first element that is greater than 10 using .findIndex()

// 69.

// array.every((val) =>
//   val % 2 == 0 ? console.log("Positive") : console.log("Not Positive")
// );

// 70.

// array.some((val) => {
//   if (val < 0) {
//     console.log("Negative");
//   } else {
//     console.log("Positive");
//   }
// });

// 71.
// let result_71 = array.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(result_71);

// 72.
// let result_72 = array.sort((a, b) => a - b);
// console.log(result_72);

// 73. Sort an array of strings in alphabetical order.

// 74.
// let result_74 = array.sort((a, b) => b - a);
// console.log(result_74);

// 75.
// array.reverse();
// console.log(array);

// 76.
// array.push(90);

// 77.
// array.pop();

// 78.
// array.unshift(73);

// 79.
// array.shift();

// 80.
// let index_80 = array.indexOf(20);
// console.log(index_80);

// 81.
// array.splice(0, 1);
// console.log(array);

// 82. . Insert an element at a specific index in an array.
// my code:
let array_82 = [20, 30, 40, 50];
// let result_82 = array.at(0);
// console.log(result_82);

// 83. Copy an array (shallow copy)
// my code.
// let array_83 = array_82.map((val) => {
//   return val;
// });

// console.log(array_83);

// 84.  Merge two arrays into one.
// my code:
// let array_84 = [20, 30, 50, 90];
// array_84 = array_84.concat(array_82);
// console.log(array_84);

// 85.  Find the intersection of two arrays (elements common to both)
// my code.
// let array1_85 = [90, 45, 67, 87];
// let array2_85 = [56, 89, 90, 76, 20];
// let result_85 = [];
// let arrayLength_85 = Math.max(array1_85.length, array2_85.length);
// for (let i = 0; i < arrayLength_85; i++) {
//   result_85.push(array1_85[i] - array2_85[i]);
// }
// console.log(result_85);

// 86.
// let array1_86 = [40, 60, 87, 98, 68];
// let array2_86 = [40, 80, 98, 79, 68];
// let result_86 = [];
// let maxLength_86 = Math.max(array1_86.length, array2_86.length);
// for (let i = 0; i < array1_86.length; i++) {
//   if (array1_86[i] == array2_86[i]) {
//     result_86.push(array1_86[i]);
//   }
// }

// console.log(result_86);

// 87.  Flatten a nested array (one level deep)

// 88.
