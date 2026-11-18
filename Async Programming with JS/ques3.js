// Q3: Callback to Promise Migration

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.3;

            if (isSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs!");
            }
        }, 1000);
    });
}

// Fetch bugs using Promise
getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });