const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

// Update character counter
function updateCounter() {

    const remaining = maxCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.classList.remove("warning", "danger");

    if (remaining <= 0) {
        counter.classList.add("danger");
    }
    else if (remaining <= 20) {
        counter.classList.add("warning");
    }
}

// Prevent typing after 100 characters
message.addEventListener("keydown", function(event) {

    const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab"
    ];

    if (
        message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }
});

// Update counter while typing or pasting
message.addEventListener("input", updateCounter);

// Reset everything
resetButton.addEventListener("click", function() {

    message.value = "";

    updateCounter();
});