const result1 = 5 - 4;
const result2 = 17 % 9;
const result3 = 10 - Math.pow(3, 1 / 3); // Using Math.pow for cube root
const product = Math.floor(result1) * Math.floor(result2) * Math.floor(result3);

// Displaying the individual results and the final product as an integer
console.log(`Result 1: ${Math.floor(result1)}`);
console.log(`Result 2: ${Math.floor(result2)}`);
console.log(`Result 3: ${Math.floor(result3)}`);
console.log(`Product of the expressions (as an integer): ${product}`);
