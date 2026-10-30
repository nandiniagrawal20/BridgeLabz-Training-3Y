// Q6. Event-Based Counter Simulation

// Global counter variable
let count = 0;

// Increment function
function increment() {

    count++;

    console.log("After Increment:", count);
}

// Decrement function
function decrement() {

    count--;

    console.log("After Decrement:", count);
}

// Nested function to demonstrate scope
function counterDetails() {

    function displayCount() {
        console.log("Current Count:", count);
    }

    displayCount();
}

// Simulate click events
increment();

increment();

increment();

decrement();

decrement();

// Display final count
counterDetails();