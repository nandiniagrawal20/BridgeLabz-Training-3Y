"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined];

let validNumbers = [];
let invalidNumbers = [];

console.log("----- DYNAMIC DATA PARSER -----");

for (let value of apiData) {

    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("\nOriginal Value:", value);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);

    // Whitespace-only strings should be treated as invalid.
    if (typeof value === "string" && value.trim() === "") {
        invalidNumbers.push(value);
    }
    else if (Number.isNaN(num)) {
        invalidNumbers.push(value);
    }
    else {
        validNumbers.push(num);
    }
}

console.log("\n----- FINAL REPORT -----");

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);

console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);