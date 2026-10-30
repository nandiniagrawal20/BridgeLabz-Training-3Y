// Q7. Smart Guessing Game

// Generate random number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Take user guess
let userGuess = Number(prompt("Guess a number between 1 and 50:"));

// Check guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
}
else {

    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    }
    else if (userGuess > secretNumber) {
        console.log("Too high");
    }
    else {
        console.log("Too low");
    }
}

console.log("Secret Number:", secretNumber);