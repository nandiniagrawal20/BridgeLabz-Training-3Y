// Q9: Predict the Execution Order

/*
Predicted Output:

Script start
Script end
Promise callback
Timeout callback

Reason:
1. Synchronous code runs first.
2. Promise.then() is a microtask.
3. setTimeout() is a macrotask.
4. Microtasks execute before macrotasks.
*/

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");