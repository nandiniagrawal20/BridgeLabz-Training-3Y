"use strict";

// Get form elements
const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    let isValid = true;

    // Regular expressions
    const namePattern = /^[A-Za-z ]+$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^[0-9]{10}$/;

    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;

    // Function to validate input
    function validateField(input, pattern, message) {

        const error = input.nextElementSibling;

        if (!pattern.test(input.value.trim())) {

            input.style.border = "2px solid red";
            error.textContent = message;
            error.style.color = "red";

            isValid = false;

        } else {

            input.style.border = "2px solid green";
            error.textContent = "Valid";
            error.style.color = "green";
        }
    }

    // Validate all fields
    validateField(name, namePattern, "Enter alphabets only");

    validateField(email, emailPattern, "Enter valid email");

    validateField(phone, phonePattern, "Enter exactly 10 digits");

    validateField(password, passwordPattern,
        "Password needs uppercase, number and special character");

    // Final result
    if (isValid) {
        console.log("Student Registration Successful!");

        console.log({
            name: name.value,
            email: email.value,
            phone: phone.value
        });

        studentForm.reset();

    } else {
        console.log("Please correct the invalid fields.");
    }
});