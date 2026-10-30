// Q6. Progressive Discount System

// Input purchase amount
let total = Number(prompt("Enter purchase amount:"));

let discount = 0;

// Check discount conditions
if (total >= 10000) {
    discount = 25;
}
else if (total >= 5000) {
    discount = 15;
}
else if (total >= 2000) {
    discount = 5;
}
else {
    discount = 0;
}

// Calculate final price
let discountAmount = total * discount / 100;
let finalPrice = Math.round(total - discountAmount);

// Display results
console.log("Original Total: Rs.", total);
console.log("Discount:", discount + "%");
console.log("Final Price: Rs.", finalPrice);