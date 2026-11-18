let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 30000, stock: 2 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 10 },
    { id: 4, name: "Shoes", category: "Footwear", price: 2000, stock: 3 },
    { id: 5, name: "Watch", category: "Accessories", price: 5000, stock: 8 }
];

// 1. Low stock products
function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

// 2. Sort products by price
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group products by category
function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);

        return groups;
    }, {});
}

// Testing
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Sorted Products:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("Grouped Products:");
console.log(groupByCategory());