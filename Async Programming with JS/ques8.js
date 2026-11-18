// Q8: Retry Mechanism

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject("Order submission failed");
            }
        }, 1000);
    });
}

async function processOrder() {
    let success = false;

    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await submitOrder();

            console.log(`Attempt ${attempt}: Success`);
            success = true;
            break;

        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    if (!success) {
        throw new Error("Order could not be processed");
    }
}

async function main() {
    try {
        await processOrder();
        console.log("Order processing completed!");

    } catch (error) {
        console.log(error.message);
    }
}

main();