"use strict";

// Create Employee class
class Employee {

    constructor(id, name, department, salary) {

        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;

    }

    // Calculate annual salary
    getAnnualSalary() {

        return this.salary * 12;

    }

    // Apply bonus
    applyBonus(percent) {

        this.salary = this.salary + (this.salary * percent / 100);

    }

}

// Create 5 employee objects
const employees = [

    new Employee(1, "Amit", "IT", 40000),

    new Employee(2, "Sara", "HR", 35000),

    new Employee(3, "Kiran", "Finance", 50000),

    new Employee(4, "Rahul", "IT", 45000),

    new Employee(5, "Priya", "Marketing", 38000)

];

// Display employee details
console.log("----- EMPLOYEE DETAILS -----");

employees.forEach(employee => {

    console.log("\nEmployee ID:", employee.id);

    console.log("Name:", employee.name);

    console.log("Department:", employee.department);

    console.log("Monthly Salary:", employee.salary);

    console.log("Annual Salary:", employee.getAnnualSalary());

});

// Apply 10% bonus to each employee
employees.forEach(employee => {

    employee.applyBonus(10);

});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce((total, employee) => {

    return total + employee.getAnnualSalary();

}, 0);

// Display final result
console.log("\n----- COMPANY PAYOUT -----");

console.log("Total Annual Payout After Bonus: ₹" + totalAnnualPayout);