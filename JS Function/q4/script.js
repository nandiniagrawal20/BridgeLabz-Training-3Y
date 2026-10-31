// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};

// Creating two car objects
let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("Honda", "City");

// Calling prototype method
car1.getDetails();

console.log("-------------");

car2.getDetails();