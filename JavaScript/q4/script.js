// Q4. Academic Performance Evaluator

// Input marks of five subjects
let marks = [];

for (let i = 1; i <= 5; i++) {
    let mark = Number(prompt("Enter marks of subject " + i));
    marks.push(mark);
}

// Validate marks
let invalid = marks.some(mark => mark < 0 || mark > 100 || !Number.isFinite(mark));

if (invalid) {
    console.log("Invalid Marks");
}
else {

    // Calculate total and percentage
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / 5;
    let percentage = (total / 500) * 100;

    console.log("Total Marks:", total);
    console.log("Average:", average.toFixed(2));
    console.log("Percentage:", percentage.toFixed(2) + "%");

    // Check promotion criteria
    let failed = marks.some(mark => mark < 35);

    if (failed || percentage < 50) {
        console.log("Detained");
    }
    else if (percentage >= 85) {
        console.log("Promoted with Distinction");
    }
    else if (percentage >= 50 && percentage < 85) {
        console.log("Promoted");
    }
}