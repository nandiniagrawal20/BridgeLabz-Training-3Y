// Q4: Promise.all() and Promise.race()

function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A deployment completed");
            } else {
                reject("Server A failed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B deployment completed");
            } else {
                reject("Server B failed");
            }
        }, 3000);
    });
}

// Promise.all()
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch((error) => {
        console.log("Deployment failed:", error);
    });

// Promise.race()
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest server failed:", error);
    });