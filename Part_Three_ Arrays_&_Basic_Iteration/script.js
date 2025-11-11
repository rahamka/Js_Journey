// 61.
let array_61 = [20, 30, 40, 50];
for (let i = 0; i < array_61.length; i++) {
  console.log(array_61[i]);
}

// 62.
for (let element_62 of array_61) {
  console.log(element_62);
}

// 63.
for (let index_63 in array_61) {
  console.log(`Index = ${index_63} & Element = ${array_61[index_63]}`);
}

// 64.
array_61.forEach((val_64) => {
  console.log(val_64);
});

// 65.
array_61.map((val_65) => {
  console.log(val_65 + val_65);
});

// 66.
let newArray_66 = [];
array_61.filter((val_66) => {
  if (val_66 % 2 === 0) {
    newArray_66.push(val_66);
  }
});
console.log(newArray_66);

// 67.  Find the first element > 10
let array_67 = [5, 12, 8, 20];
let firstOver10_67 = array_67.find((val_67) => val_67 > 10);
console.log(firstOver10_67);

// 68. Find index of first element > 10
let firstIndexOver10_68 = array_67.findIndex((val_68) => val_68 > 10);
console.log(firstIndexOver10_68);

// 69. Check if all elements are even
array_61.every((val_69) =>
  val_69 % 2 === 0 ? console.log("Even") : console.log("Not Even")
);

// 70. Check if any negative number
array_61.some((val_70) => {
  if (val_70 < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
});

// 71. Sum using reduce
let sum_71 = array_61.reduce((prev_71, curr_71) => prev_71 + curr_71);
console.log(sum_71);

// 72. Sort ascending
let sortedAsc_72 = [...array_61].sort((a_72, b_72) => a_72 - b_72);
console.log(sortedAsc_72);

// 73. Sort array of strings alphabetically
let arrayStrings_73 = ["banana", "apple", "mango"];
let sortedStrings_73 = arrayStrings_73.sort();
console.log(sortedStrings_73);

// 74. Sort descending
let sortedDesc_74 = [...array_61].sort((a_74, b_74) => b_74 - a_74);
console.log(sortedDesc_74);

// 75. Reverse array
let reversedArray_75 = [...array_61].reverse();
console.log(reversedArray_75);

// 76. Push element
let array_76 = [...array_61];
array_76.push(90);
console.log(array_76);

// 77. Pop element
let array_77 = [...array_76];
array_77.pop();
console.log(array_77);

// 78. Unshift element
let array_78 = [...array_61];
array_78.unshift(73);
console.log(array_78);

// 79. Shift element
let array_79 = [...array_78];
array_79.shift();
console.log(array_79);

// 80. Index of 20
let index_80 = array_61.indexOf(20);
console.log(index_80);

// 81. Remove first element using splice
let array_81 = [...array_61];
array_81.splice(0, 1);
console.log(array_81);

// 82. Insert an element at specific index
let array_82 = [20, 30, 40, 50];
array_82.splice(2, 0, 100); // insert 100 at index 2
console.log(array_82);

// 83. Copy array (shallow copy)
let array_83 = array_82.map((val_83) => val_83);
console.log(array_83);

// 84. Merge two arrays
let array_84 = [20, 30, 50, 90];
let merged_84 = array_84.concat(array_82);
console.log(merged_84);

// 85. Intersection of two arrays
let array1_85 = [90, 45, 67, 87];
let array2_85 = [56, 89, 90, 76, 20];
let intersection_85 = array1_85.filter((val_85) => array2_85.includes(val_85));
console.log(intersection_85);

// 86. Compare two arrays element by element
let array1_86 = [40, 60, 87, 98, 68];
let array2_86 = [40, 80, 98, 79, 68];
let result_86 = [];
for (let i_86 = 0; i_86 < array1_86.length; i_86++) {
  if (array1_86[i_86] === array2_86[i_86]) {
    result_86.push(array1_86[i_86]);
  }
}
console.log(result_86);

// 87. Flatten nested array
let nested_87 = [1, [2, [3, 4]], 5];
let flat_87 = nested_87.flat(2);
console.log(flat_87);

// 88. Check for objects
let array_88 = [30, 89, 86, 84, 64, null];
array_88.forEach((val_88) => {
  typeof val_88 === "object"
    ? console.log("Object is available")
    : console.log("Object isn't available");
});

// 89. Remove falsy values
let array_89 = [89, null, 90, 56, undefined, "", NaN, 90, true];
let cleaned_89 = array_89.filter((val_89) => val_89 && !Number.isNaN(val_89));
console.log(cleaned_89);

// 90. Group array of objects by property
// Note: i don't understand this?
let users_90 = [
  { name: "Raham", role: "frontend" },
  { name: "Ali", role: "backend" },
  { name: "Kalhoro", role: "frontend" },
];
let grouped_90 = users_90.reduce((acc_90, user_90) => {
  if (!acc_90[user_90.role]) {
    acc_90[user_90.role] = [];
  }
  acc_90[user_90.role].push(user_90.name);
  return acc_90;
}, {});
console.log(grouped_90);
