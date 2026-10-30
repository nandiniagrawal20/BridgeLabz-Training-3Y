// Q1. Scope Conflict Resolver

// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {

    // Local variable
    let salary = 40000;

    let totalSalary = salary;

    // Add bonus only for permanent employees
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log("Permanent:", isPermanent);
    console.log("Total Salary: Rs.", totalSalary);
}

// Function calls
calculateSalary(true);
calculateSalary(false);

// Check global variable
console.log("Global Bonus:", bonus);