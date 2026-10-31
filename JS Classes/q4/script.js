"use strict";

// Create FormBuilder class
class FormBuilder {

    constructor(fields) {
        this.fields = fields;
    }

    // Create form dynamically
    createForm() {

        let formHTML = "";

        this.fields.forEach(field => {

            formHTML += `
                <label>${field.label}</label>

                <input
                    type="${field.type}"
                    id="${field.name}"
                    placeholder="Enter ${field.label}"
                    required
                >

                <br><br>
            `;

        });

        formHTML += `<button type="submit">Submit</button>`;

        document.getElementById("formContainer").innerHTML =
            `<form id="dynamicForm">${formHTML}</form>`;

        // Handle form submission
        document.getElementById("dynamicForm")
            .addEventListener("submit", (event) => {

                event.preventDefault();

                const formData = this.getFormData();

                console.log("Form Data:", formData);

            });
    }

    // Get all entered values
    getFormData() {

        const data = {};

        this.fields.forEach(field => {

            data[field.name] =
                document.getElementById(field.name).value;

        });

        return data;
    }
}

// Define form fields
const fields = [

    { type: "text", label: "Username", name: "username" },

    { type: "email", label: "Email", name: "email" },

    { type: "password", label: "Password", name: "password" }

];

// Create FormBuilder object
const form = new FormBuilder(fields);

// Generate form
form.createForm();