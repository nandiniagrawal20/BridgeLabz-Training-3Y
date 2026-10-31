"use strict";

// Create Product class
class Product {

    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to product
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id},
Name: ${this.name},
Price: ₹${this.price},
Category: ${this.category}`;
    }
}

// Create product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 500, "Accessories"),
    new Product(3, "Mobile", 15000, "Electronics"),
    new Product(4, "Keyboard", 1200, "Accessories"),
    new Product(5, "Headphones", 800, "Electronics")
];

// Apply 10% discount to all products
products.forEach(product => {
    product.applyDiscount(10);
});

// Display all products
console.log("----- ALL PRODUCTS -----");

products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products having price greater than 1000
const filteredProducts = products.filter(product => {
    return product.price > 1000;
});

console.log("\n----- PRODUCTS ABOVE ₹1000 -----");

filteredProducts.forEach(product => {
    console.log(product.displayDetails());
});