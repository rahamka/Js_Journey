// // New Things.
// window.location.href;
// window.history.back();
// console.log(window.navigator.userAgent);

// Type Coercion
// Control Flow => if, else, if-else , else-if
// Problem. 1
let data = 7;
while (data >= 0) {
  if (data <= 5) {
    data--;
    continue;
  }
  console.log(data);
  data--;
}

// Problem 2.
let i = 5;
while (true) {
  console.log(i);
  i += 5;
  if (i > 30) {
    break;
  }
}

// Problem 3.
for (let i = 0; i < 3; i++) {
  if (i === 1) break;
  console.log(i);
}
