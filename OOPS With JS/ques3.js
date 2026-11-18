// Constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method
Product.prototype.applyDiscount = function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
};

// Creating products
let product1 = new Product("Laptop", 50000);
let product2 = new Product("Phone", 30000);
let product3 = new Product("Headphones", 5000);

// Applying discounts
console.log(product1.name, product1.applyDiscount(10));
console.log(product2.name, product2.applyDiscount(20));
console.log(product3.name, product3.applyDiscount(15));