"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

console.log("----- TRANSACTION VALIDATOR -----");

for (let transaction of transactions) {

    try {

        // Check null transaction
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        // Check missing ID or amount
        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("MISSING_DATA");
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);

        console.log("Valid Transaction:", transaction);

    }
    catch (error) {

        invalid.push({
            transaction: transaction,
            reason: error.message
        });

        console.log("Invalid Transaction:", error.message);
    }
}

// Final Report
console.log("\n----- FINAL REPORT -----");

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);

console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);