// Q3. Math Utility Dashboard

// Declare number
let x = 16.75;

// Perform mathematical operations
let roundedValue = Math.round(x);

let squareRoot = Math.sqrt(x);

let powerValue = Math.pow(x, 3);

// Generate random number between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary
console.log("Math Utility Dashboard");

console.log(`Original Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power (x^3): ${powerValue.toFixed(2)}`);
console.log(`Random Number: ${randomNumber}`);