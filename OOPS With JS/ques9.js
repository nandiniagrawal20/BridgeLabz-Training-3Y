class FitnessAnalytics {
    constructor(workoutData) {
        if (!workoutData || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty!");
        }

        this.workoutData = workoutData;
    }

    // Active users with steps > 7000
    getActiveUsers() {
        return this.workoutData.filter(user => user.steps > 7000);
    }

    // Average calories
    getAverageCalories() {
        let totalCalories = this.workoutData.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return totalCalories / this.workoutData.length;
    }

    // User summary using map()
    getUserSummary() {
        return this.workoutData.map(user => {
            return `${user.user} completed ${user.steps} steps and burned ${user.calories} calories`;
        });
    }
}

// Workout data
let data = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

// Creating object
try {
    let fitness = new FitnessAnalytics(data);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("Average Calories:");
    console.log(fitness.getAverageCalories());

    console.log("User Summary:");
    console.log(fitness.getUserSummary());

} catch (error) {
    console.log("Error:", error.message);
}