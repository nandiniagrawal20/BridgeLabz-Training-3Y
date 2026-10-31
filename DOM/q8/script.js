const dropdown = document.getElementById("dropdown");

const dropdownButton = document.getElementById("dropdownButton");

const dropdownOptions = document.getElementById("dropdownOptions");

// Show or hide dropdown
dropdownButton.addEventListener("click", function(event) {

    event.stopPropagation();

    dropdownOptions.style.display =
        dropdownOptions.style.display === "block"
        ? "none"
        : "block";

});

// Select an option
dropdownOptions.addEventListener("click", function(event) {

    if (event.target.tagName === "DIV") {

        dropdownButton.textContent = event.target.textContent;

        dropdownOptions.style.display = "none";

    }

});

// Close dropdown using capturing phase
document.addEventListener("click", function(event) {

    if (!dropdown.contains(event.target)) {

        dropdownOptions.style.display = "none";

    }

}, true);