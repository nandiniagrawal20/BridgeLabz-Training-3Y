// Q10: Async Delivery Pipeline

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Step 1: Order taken");
            } else {
                reject("Order taking failed");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Step 2: Food prepared");
            } else {
                reject("Food preparation failed");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Step 3: Package ready");
            } else {
                reject("Packaging failed");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Step 4: Out for delivery");
            } else {
                reject("Dispatch failed");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Delivery completed!");
            } else {
                reject("Delivery failed");
            }
        }, 1000 + Math.random() * 1000);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");

        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Error:", error);
    }
}

runPipeline();