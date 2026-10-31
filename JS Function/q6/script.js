// First constructor: Person
function Person(name) {
    this.name = name;
}

// Person method
Person.prototype.showPerson = function() {
    console.log("Name: " + this.name);
};


// Second constructor: Faculty
function Faculty(name, department) {
    Person.call(this, name);

    this.department = department;
}

// Faculty inherits Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

// Faculty method
Faculty.prototype.showFaculty = function() {
    console.log("Department: " + this.department);
};


// Third constructor: Professor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);

    this.subject = subject;
}

// Professor inherits Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

// Professor method
Professor.prototype.showProfessor = function() {
    console.log("Subject: " + this.subject);
};


// Creating Professor object
let professor1 = new Professor(
    "Rahul",
    "Computer Science",
    "JavaScript"
);

// Accessing all methods
professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();