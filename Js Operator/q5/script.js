// Q5. Boolean Logic Access System

// Security conditions
let isDoorLocked = true;

let isWindowClosed = true;

let isAlarmOn = true;

let isOwnerInside = true;

// Check security conditions
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {

    console.log("Secure");

}
else {

    console.log("Unsafe");

}

// Test different conditions
isWindowClosed = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
}
else {
    console.log("Unsafe");
}

// Demonstrate NOT operator
console.log("Door is unlocked:", !isDoorLocked);