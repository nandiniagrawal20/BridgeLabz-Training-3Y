class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 75) {
            return "B";
        } else if (average >= 50) {
            return "C";
        } else {
            return "F";
        }
    }
}

// Creating 3 students
let student1 = new Student("Rahul", [90, 85, 95]);
let student2 = new Student("Priya", [70, 75, 80]);
let student3 = new Student("Aman", [40, 45, 35]);

console.log(student1.name, student1.calculateAverage(), student1.getGrade());
console.log(student2.name, student2.calculateAverage(), student2.getGrade());
console.log(student3.name, student3.calculateAverage(), student3.getGrade());