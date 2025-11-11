// // 31
// function num(sqr) {
//   console.log(sqr * sqr);
//   return sqr * sqr;
// }

// num(9);

// // 32
// function numbers(num1, num2) {
//   console.log(num1 + num2);
//   return num1 + num2;
// }

// numbers(23, 83);

// 33
// function isEven(num) {
//   console.log(num % 2 == 0 ? "Even" : "Odd");
//   return num % 2 == 0 ? "Even" : "Odd";
// }

// isEven(3);

// 34

// function nmbers(num1, num2) {
//   console.log(num1 > num2 ? `num1 ${num1}` : `num2 ${num2}`);
//   return num1 > num2 ? `num1 ${num1}` : `num2 ${num2}`;
// }

// nmbers(21, 20);

// 35
// function largest(num1, num2, num3) {
//   console.log(Math.max(num1, num2, num3));
// }

// largest(20, 30, 40); // Output: 40

// 36. Write a function that returns a factorial of a number (using a loop).

// 37. Write a function that returns a factorial of a number (using recursion)

//  38. Write a function to check if a number is prime

//  39.
// function reverseString(str) {
//   let value = [...str];
//   value.reverse();
//   let newStr = "";
//   for (let items of value) {
//     newStr += items;
//   }
//   console.log(`Reverse of ${str} = ${newStr}`);
// }

// reverseString("hello world");

//  40.
// function palindromeFun(str) {
//   let string = `${str}`;
//   let startIndex = string.at(0);
//   let lastIndex = string.at(-1);
//   if (startIndex == lastIndex) {
//     console.log("Palindrome.");
//   } else {
//     console.log("Not Palindrome.");
//   }
// }
// palindromeFun("hello");

//  41. Write a function that returns the nth Fibonacci number
// I'm wrong here?
// function fibonacciNumber(num) {
//   let array1 = [...num];
//   array1.reduce((prev, curr) => {
//     if (prev + 1 == curr) {
//       console.log("Fibonacci Number.");
//     } else {
//       console.log("Not Fibonacci Number.");
//     }
//   });
// }

// fibonacciNumber([0, 1, 1, 2, 3, 5, 8, 13, 21]);
// Fibonacci Number → F(n) = F(n-1) + F(n-2)

// 42. Write a function that converts a Celsius value to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//   let oneCelsisu = 33.8;
//   return oneCelsisu;
// }

//  43. Write a function that converts a Fahrenheit value to Celsius

// 44
// function v/s arrow function
// Simple Function: A function which we're creating with function keyword and that function we can't assign in another variable.
// Arrow Function: A function which we're creating with Arrow keyword(=>) and we can store the arrow function in another variable.

//  45.

// function defaultParameter(arg) {
//   return arg;
// }

// 46. Write a function that takes a variable number of arguments (using the rest parameter).

// 47.  Demonstrate a function with block scope using let and const .

// 48. Create a simple counter function using closures

// 49. Write a function that simulates a private variable using closures.

// 50.
// function delayFunction() {
//   console.log("Original Function Running...");

//   setTimeout(() => {
//     console.log("Original Function Completed.");
//     console.log("Second Function Running.");
//   }, 500);

//   setTimeout(() => {
//     function secondFun() {
//       console.log("Second Function completed.");
//     }
//     secondFun();
//   }, 3000);
// }

// delayFunction();

// 51. Write a function that executes another function at intervals using setInterval .

// 52. Write a function that returns a promise which resolves after a given time.

// 53. Write a function to fetch data from a public API and log the response.

// 54.  Write an async function that uses await with the previous fetch call.

// 55.  Handle errors in the async function using try...catch

// 56.  Write a function that uses .then() and .catch() to handle a promise.

// 57.  Write a function that takes a callback function and executes it.

// 58. Create a function that memoizes the result of an expensive function.

// 59. Write a higher-order function that takes a function and a number, and calls the function that many times

// 60. Write a function that composes two other functions ( f(g(x)) ).
