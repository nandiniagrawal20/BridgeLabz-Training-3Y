"use strict";

// Get form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const seats = Number(document.getElementById("seats").value);

    // Regular expressions
    const namePattern = /^[A-Za-z ]+$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate input
    let isValid = true;

    if (!namePattern.test(name)) {
        console.log("Invalid Name: Alphabets only");
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        console.log("Invalid Email");
        isValid = false;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        console.log("Seats must be between 1 and 10");
        isValid = false;
    }

    // Store booking information
    if (isValid) {

        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        console.log("----- TICKET BOOKING SUCCESSFUL -----");

        console.log("Name:", booking.name);
        console.log("Email:", booking.email);
        console.log("Seats:", booking.seats);

        console.log("Booking Object:", booking);

        document.getElementById("result").innerHTML = `
            <h2>Booking Successful!</h2>
            <p>Name: ${booking.name}</p>
            <p>Email: ${booking.email}</p>
            <p>Seats: ${booking.seats}</p>
        `;

    } else {

        document.getElementById("result").textContent =
            "Booking failed. Please enter valid details.";
    }

});