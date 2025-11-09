// 1
console.log("Hello world");

// 2
let nameVar = "Raham";
console.log(nameVar);

// 3
let valueUndef = undefined;
console.log(typeof valueUndef);

let valueNull = null;
console.log(typeof valueNull);

let valueNum = 12;
console.log(typeof valueNum);

let valueStr = "Raham";
console.log(typeof valueStr);

let valueBool = true;
console.log(typeof valueBool);

// 4
let num1_4 = 12;
let num2_4 = 15;
console.log(num1_4 + num2_4);

// 5
let remainder_5 = num1_4 % num2_4;
console.log(remainder_5);

// 6 Swap
let var1_6 = 5;
let var2_6 = 10;
[var1_6, var2_6] = [var2_6, var1_6];
console.log(var1_6, var2_6);

// 7 Celsius → Fahrenheit
let tempC_7 = 45;
let tempF_7 = (tempC_7 * 9) / 5 + 32;
console.log(`${tempC_7}°C = ${tempF_7}°F`);

// 8 Rectangle Area
let rectLength_8 = 4;
let rectWidth_8 = 6;
console.log(`Area = ${rectLength_8 * rectWidth_8}`);

// 9 Triangle Area
let triHeight_9 = 12;
let triBase_9 = 6;
console.log(`Triangle Area = ${0.5 * triHeight_9 * triBase_9}`);

// 10 Even/Odd
let num_10 = 22;
console.log(num_10 % 2 === 0 ? "Even" : "Odd");

// 11 Positive/Negative/Zero
let num_11 = -5;
if (num_11 < 0) console.log("Negative");
else if (num_11 > 0) console.log("Positive");
else console.log("Zero");

// 12 Largest of 2 numbers
let a_12 = 10,
  b_12 = 20;
console.log(a_12 > b_12 ? "Largest = a_12" : "Largest = b_12");

// 13 Largest of 3 numbers
let a_13 = 10,
  b_13 = 20,
  c_13 = 15;
let largest_13 = a_13;
if (b_13 > largest_13) largest_13 = b_13;
if (c_13 > largest_13) largest_13 = c_13;
console.log("Largest =", largest_13);

// 14 Leap year
let year_14 = 2024;
if ((year_14 % 4 === 0 && year_14 % 100 !== 0) || year_14 % 400 === 0)
  console.log("Leap Year");
else console.log("Not a Leap Year");

// 15 Vowel or consonant
let char_15 = "a";
char_15 = char_15.toLowerCase();
console.log(
  ["a", "e", "i", "o", "u"].includes(char_15) ? "Vowel" : "Consonant"
);

// 16 Uppercase
let str16 = "raham";
console.log(str16.toUpperCase());

// 17 Lowercase
let str17 = "Raham";
console.log(str17.toLowerCase());

// 18 Concatenate
let str18a = "Raham";
let str18b = " Kalhoro";
console.log(str18a + str18b);

// 19 String length
let str19 = "Raham";
console.log(str19.length);

// 20 First character
let str20 = "Raham";
console.log(str20[0]);

// 21 Last character
let str21 = "Raham";
console.log(str21.at(-1));

// 22 Trim spaces
let str22 = "  Raham  ";
console.log(str22.trim());

// 23 Check contains word
let str23 = "Raham";
console.log(str23.includes("Hello") ? "Hello found" : "Wrong word");

// 24 Replace word
let str24 = "Hello world";
console.log(str24.replace("world", "JavaScript"));

// 25 Substring
let text25 = "Hello, World!";
console.log(text25.substring(0, 5));

// 26 Split into array
let str26 = "Hello World";
console.log(str26.split(" "));

// 27 & 28 Number → String → Number
let num27 = 12.3456;
let num27str = num27.toFixed(2);
let num27final = Number(num27str);
console.log(num27final);

// 29 Round to 2 decimals
let num29 = 12.3456;
num29 = Number(num29.toFixed(2));
console.log(num29);

// 30 Random number 10–15
let randomNum30 = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
console.log(randomNum30);

// Bonus Replace all / case-insensitive
let strBonus = "I like apple. Apple is my favorite fruit.";
console.log(strBonus.replace(/apple/gi, "mango"));
