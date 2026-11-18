// Q2: Microtask vs Macrotask

console.log("Start");

// Macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Synchronous task
console.log("Synchronous log");

console.log("End");

/*
Output:

Start
Synchronous log
End
Promise callback
Timeout callback

Explanation:
1. Synchronous code executes first.
2. Promise callbacks are microtasks.
3. setTimeout callbacks are macrotasks.
4. Microtasks execute before macrotasks.
*/