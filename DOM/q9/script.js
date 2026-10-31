const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const success = document.getElementById("success");

// Validate individual fields
function validateName() {

    const error = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {

        error.textContent = "Name is required";

        return false;

    }

    error.textContent = "";

    return true;
}

function validateEmail() {

    const error = document.getElementById("emailError");

    if (!emailInput.value.includes("@")) {

        error.textContent = "Email must contain @";

        return false;

    }

    error.textContent = "";

    return true;
}

function validatePassword() {

    const error = document.getElementById("passwordError");

    if (passwordInput.value.length < 6) {

        error.textContent = "Password must contain at least 6 characters";

        return false;

    }

    error.textContent = "";

    return true;
}

// Submit form
form.addEventListener("submit", function(event) {

    // Prevent default form submission
    event.preventDefault();

    const isNameValid = validateName();

    const isEmailValid = validateEmail();

    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {

        success.textContent = "Form Submitted Successfully!";

        form.reset();

    } else {

        success.textContent = "";

    }

});

// Automatically remove errors when input is corrected
nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener("input", validatePassword);