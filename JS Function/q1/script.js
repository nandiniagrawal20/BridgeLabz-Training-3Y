// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute callback function
    callback();
}

// Calling the function
greetUser("Nandini", showEndMessage);