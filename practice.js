// Question 1.
// let newArr = [100, 98, 89, 69, 78];
// newArr.map((val, idx /* array:number[] */) => {
//   console.log(`Array No: ${idx + 1} = ${val}`);
// here how array:number[] is working?
// note: i know about callbackfn:, index:number?
// define only the  array:number[] with two simple examples for me?
// });

// Examples:
// 1.
let nums = [10, 20, 30];

nums.map((value, index, array) => {
  console.log(array);
});

// 2.
let scores = [5, 10, 15];

scores.map((v, i, array) => {
  console.log(`Current: ${v}, Full array: ${array}`);
});

// Question 2.
// Is it correct for finding factorial of 4?
function factorialFun(val) {
  let arr = [];
  for (let i = 1; i <= val; i++) {
    arr.push(i);
  }
  let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
  });
  return factorial;
}

console.log(factorialFun(4));
// Question 3.
// why here this code isn't working while paras gives us list of elements?
// let paras = document.getElementsByClassName("paras");
// paras.forEach((val) => {
//   console.log(val);
// });

// let paras2 = document.querySelectorAll(".paras");
// paras2.forEach((val) => {
//   console.log(val);
// });

let items = document.getElementsByClassName("item");
// items.forEach(...) ❌

Array.from(items).forEach((el) => {
  // ✔
  console.log(el);
});
