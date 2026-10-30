// Q8. Employee Salary Projection

// Current salary and increment rate
let currentSalary = 30000;
let incrementRate = 10;

let salary = currentSalary;

// Store salary details
let salaryDetails = [];

for (let year = 1; year <= 5; year++) {

    // Calculate yearly increment
    salary += salary * incrementRate / 100;

    salaryDetails.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

// Display salary table
console.table(salaryDetails);