// Q3. Monthly Expense Tracker

// Monthly expenses
let expenses = [5000, 2000, 10000, 1500, 1000];

// Calculate total expense
let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// Calculate average
let average = total / expenses.length;

// Add 10% tax
let tax = total * 10 / 100;
let finalAmount = total;

finalAmount += tax;

// Display results
console.log("Total Expense: Rs.", total.toFixed(2));
console.log("Average Expense: Rs.", average.toFixed(2));
console.log("Tax: Rs.", tax.toFixed(2));
console.log("Final Amount: Rs.", finalAmount.toFixed(2));