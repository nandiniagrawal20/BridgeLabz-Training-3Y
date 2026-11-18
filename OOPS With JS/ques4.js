class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is working in " + this.department);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overriding work() method
    work() {
        console.log(this.name + " is managing the " + this.department + " department");
    }
}

// Objects
let employee1 = new Employee("Rahul", "IT");
let manager1 = new Manager("Priya", "HR");

// Calling work()
employee1.work();
manager1.work();