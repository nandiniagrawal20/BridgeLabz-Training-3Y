const steps = document.querySelectorAll(".step");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const summary = document.getElementById("summary");

let currentStep = 0;

// Display current step
function showStep() {

    steps.forEach((step, index) => {

        step.classList.toggle("active", index === currentStep);

    });

    backButton.style.display =
        currentStep === 0 ? "none" : "inline";

    nextButton.textContent =
        currentStep === steps.length - 1 ? "Submit" : "Next";
}

// Validate current step
function validateStep() {

    const input = steps[currentStep].querySelector("input");

    if (input.value.trim() === "") {

        alert("Please enter " + input.id);

        input.focus();

        return false;
    }

    if (input.id === "email") {

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {

            alert("Please enter a valid email");

            input.focus();

            return false;
        }
    }

    if (input.id === "password" && input.value.length < 6) {

        alert("Password must contain at least 6 characters");

        input.focus();

        return false;
    }

    return true;
}

// Next button
nextButton.addEventListener("click", function() {

    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {

        currentStep++;

        showStep();

    } else {

        // Show final summary
        summary.innerHTML = `
            <h2>Registration Successful!</h2>
            <p>Name: ${document.getElementById("name").value}</p>
            <p>Email: ${document.getElementById("email").value}</p>
            <p>Password: ${"*".repeat(
                document.getElementById("password").value.length
            )}</p>
        `;

        document.getElementById("registrationForm").style.display = "none";
    }
});

// Back button
backButton.addEventListener("click", function() {

    if (currentStep > 0) {

        currentStep--;

        showStep();
    }
});

showStep();