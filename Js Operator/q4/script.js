// Q4. Array Performance Analyzer

// Generate 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    let randomScore = Math.floor(Math.random() * 71) + 30;
    scores.push(randomScore);
}

// Calculate highest and lowest scores
let highest = Math.max(...scores);

let lowest = Math.min(...scores);

// Calculate total using reduce()
let total = scores.reduce(function(sum, score) {
    return sum + score;
}, 0);

// Calculate average
let average = total / scores.length;

// Count students who passed
let passedStudents = scores.filter(function(score) {
    return score >= 50;
});

// Display results
console.log("Student Scores:", scores);

console.log("Highest Score:", highest);

console.log("Lowest Score:", lowest);

console.log("Average Score:", average.toFixed(2));

console.log("Passed Students:", passedStudents.length);

// Display updated scores using map()
let updatedScores = scores.map(function(score) {
    return score;
});

console.log("All Scores:", updatedScores);