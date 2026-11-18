let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Fries", price: 80 }
];

function calculateBill(orderItems) {
    // Using map() to get prices
    let priceList = orderItems.map(item => {
        let menuItem = menu.find(food => food.name === item);

        if (!menuItem) {
            throw new Error(item + " is not available in the menu!");
        }

        return menuItem.price;
    });

    // Using reduce() to calculate total
    let total = priceList.reduce((sum, price) => sum + price, 0);

    return total;
}

// Valid order
try {
    let order = ["Pizza", "Burger", "Fries"];
    console.log("Total Bill:", calculateBill(order));
} catch (error) {
    console.log("Error:", error.message);
}

// Invalid order
try {
    let order = ["Pizza", "Sushi"];
    console.log("Total Bill:", calculateBill(order));
} catch (error) {
    console.log("Error:", error.message);
}