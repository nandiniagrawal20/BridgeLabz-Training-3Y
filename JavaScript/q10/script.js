// Q10. Citizen Eligibility Validator

// Input age and citizenship
let age = Number(prompt("Enter your age:"));

let isCitizen = confirm("Are you a citizen?");

// Check eligibility
if (isCitizen) {

    if (age >= 21) {
        console.log("Eligible for all services.");
    }
    else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    }
    else {
        console.log("Not eligible yet.");
    }

}
else {

    if (age >= 18) {
        console.log("Only age criteria met.");
    }
    else {
        console.log("Not eligible yet.");
    }

}