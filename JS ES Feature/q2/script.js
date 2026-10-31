"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("----- EMPLOYEE BONUS CALCULATOR -----");

try {

    for (let emp of employees) {

        // Validate employee properties
        if (!emp || emp.name === undefined ||
            emp.salary === undefined || emp.years === undefined) {
            throw new Error("Missing employee information");
        }

        // Convert strings into numbers
        let salary = Number(emp.salary);
        let years = Number(emp.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or experience");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        }
        else {
            bonus = salary * 0.05;
        }

        let totalSalary = salary + bonus;

        console.log(`\nEmployee Name: ${emp.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus}`);
        console.log(`Total Salary: ₹${totalSalary}`);
    }

}
catch (error) {
    console.log("Error:", error.message);
}