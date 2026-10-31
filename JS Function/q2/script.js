// Function that accepts an array and callback
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Array of numbers
let numbers = [1, 2, 3, 4];

// Double operation
function double(number) {
    return number * 2;
}

// Square operation
function square(number) {
    return number * number;
}

// Calling the function
let doubleResult = applyOperation(numbers, double);
let squareResult = applyOperation(numbers, square);

console.log("Doubled Numbers:", doubleResult);
console.log("Squared Numbers:", squareResult);