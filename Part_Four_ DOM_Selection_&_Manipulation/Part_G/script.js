// 181.
let book = {
  title: "Rk Dev Book",
  author: "Rk Person",
  year: "2026",
};

// 182.
// statement:  Add a method getSummary to the Book object that returns a descriptive string.
// my code:
function getSummary(val) {
  if (val == book) {
    return "This book is created for the developers, whose are actually working in the Web Development Field. ";
  } else {
    return "This Book Summary is unavailable.";
  }
}

console.log(getSummary(book));

// 183.
// Create a constructor function for creating Book objects.
// my code
function constructor(bookName) {
  return (bookName = {
    title: bookName,
  });
}

console.log(constructor("Rk Book"));

// 184.
// Add the getSummary method to the Book constructor's prototype.
