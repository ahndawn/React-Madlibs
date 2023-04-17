const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

// Test case 1: Number with no commas needed
let num = 123;
let result = addCommas(num);
console.log(result); // Output: "123"

// Test case 2: Number with commas needed
num = 1234567;
result = addCommas(num);
console.log(result); // Output: "1,234,567"

// Test case 3: Number with decimals
num = 1234.5678;
result = addCommas(num);
console.log(result); // Output: "1,234.5678"

// Test case 4: Number with negative sign
num = -12345;
result = addCommas(num);
console.log(result); // Output: "-12,345"

// Test case 5: Number with one comma needed
num = 12345;
result = addCommas(num);
console.log(result); // Output: "1,2345"
