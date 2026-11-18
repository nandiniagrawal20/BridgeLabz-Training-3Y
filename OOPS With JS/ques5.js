class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleName, vehicleNumber) {
        super(name, rating);
        this.vehicleName = vehicleName;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Distance must be a valid positive number!");
        }

        let farePerKm = 10;
        return this.distance * farePerKm;
    }
}

// Creating driver
let driver = new Driver("Rahul", 4.8, "Swift", "UP85AB1234");

// Valid trip
try {
    let trip1 = new Trip("Mathura", "Agra", 60);

    console.log("Driver:", driver.name);
    console.log("Vehicle:", driver.vehicleName);
    console.log("Fare:", trip1.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

// Invalid trip
try {
    let trip2 = new Trip("Mathura", "Agra", -10);

    console.log("Fare:", trip2.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}