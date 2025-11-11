// 31
function squareNum_31(num_31) {
  console.log(num_31 * num_31);
  return num_31 * num_31;
}

squareNum_31(9);

// 32
function sumNumbers_32(num1_32, num2_32) {
  console.log(num1_32 + num2_32);
  return num1_32 + num2_32;
}

sumNumbers_32(23, 83);

// 33
function isEven_33(num_33) {
  console.log(num_33 % 2 === 0 ? "Even" : "Odd");
  return num_33 % 2 === 0 ? "Even" : "Odd";
}

isEven_33(3);

// 34
function largerNum_34(num1_34, num2_34) {
  console.log(num1_34 > num2_34 ? `num1 ${num1_34}` : `num2 ${num2_34}`);
  return num1_34 > num2_34 ? `num1 ${num1_34}` : `num2 ${num2_34}`;
}

largerNum_34(21, 20);

// 35
function largest_35(num1_35, num2_35, num3_35) {
  console.log(Math.max(num1_35, num2_35, num3_35));
}

largest_35(20, 30, 40);

// 36. Write a function that returns a factorial of a number (using a loop).

// 37. Write a function that returns a factorial of a number (using recursion)

// 38. Write a function to check if a number is prime

// 39
function reverseString_39(str_39) {
  let value_39 = [...str_39];
  value_39.reverse();
  let newStr_39 = "";
  for (let item_39 of value_39) {
    newStr_39 += item_39;
  }
  console.log(`Reverse of ${str_39} = ${newStr_39}`);
}

reverseString_39("hello world");

// 40
function palindromeFun_40(str_40) {
  let string_40 = `${str_40}`;
  let startIndex_40 = string_40.at(0);
  let lastIndex_40 = string_40.at(-1);
  if (startIndex_40 === lastIndex_40) {
    console.log("Palindrome.");
  } else {
    console.log("Not Palindrome.");
  }
}

palindromeFun_40("hello");

// 41. Write a function that returns the nth Fibonacci number

// 42. Write a function that converts a Celsius value to Fahrenheit

// 43. Write a function that converts a Fahrenheit value to Celsius

// 44. Difference between normal function and arrow function

// 45
function defaultParameter_45(arg_45) {
  return arg_45;
}

// 46. Write a function that takes a variable number of arguments (using the rest parameter).

// 47. Demonstrate a function with block scope using let and const

// 48. Create a simple counter function using closures

// 49. Write a function that simulates a private variable using closures

// 50
function delayFunction_50() {
  console.log("Original Function Running...");

  setTimeout(() => {
    console.log("Original Function Completed.");
    console.log("Second Function Running.");
  }, 500);

  setTimeout(() => {
    function secondFun_50() {
      console.log("Second Function completed.");
    }
    secondFun_50();
  }, 3000);
}

delayFunction_50();

// 51. Write a function that executes another function at intervals using setInterval

// 52. Write a function that returns a promise which resolves after a given time

// 53. Write a function to fetch data from a public API and log the response

// 54. Write an async function that uses await with the previous fetch call

// 55. Handle errors in the async function using try...catch

// 56. Write a function that uses .then() and .catch() to handle a promise

// 57. Write a function that takes a callback function and executes it

// 58. Create a function that memoizes the result of an expensive function

// 59. Write a higher-order function that takes a function and a number, and calls the function that many times

// 60. Write a function that composes two other functions (f(g(x)))
