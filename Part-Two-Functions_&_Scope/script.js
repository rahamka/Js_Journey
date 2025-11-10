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
// Problem.  Write a function to find the maximum of three numbers.
// function largest(num1, num2, num3) {
//   console.log(Math.max(num1, num2, num3));
// }

// largest(20, 30, 40); // Output: 40

// 36
//  Write a function that returns a factorial of a number (using a loop)

// function factorialOfNum(nmbr) {}
// factorialOfNum(20);

// 37. Write a function that returns a factorial of a number (using recursion)

//  38. Write a function to check if a number is prime
// function IsPrimeNmbr(num) {
//   console.log(num % 2 !== 0 ? "Prime" : "Not Prime");
//   return num % 2 !== 0 ? "Prime" : "Not Prime";
// }
// IsPrimeNmbr(12);

//  39. Write a function that reverses a string

function ReverseStr(str) {
  let value = `${str}`;
  for (let i = 0; i < value.length; i++) {
    console.log(value[i]);
  }
}

ReverseStr("Hello");
