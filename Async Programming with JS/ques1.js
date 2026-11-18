// Q1: Asynchronous Coffee Process

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Water boiled successfully!");
                resolve();
            } else {
                reject("Failed to boil water!");
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee brewed successfully!");
                resolve();
            } else {
                reject("Failed to brew coffee!");
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee poured into cup!");
                resolve();
            } else {
                reject("Failed to pour coffee!");
            }
        }, 1500);
    });
}

// Promise chaining
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee preparation failed:", error);
    });