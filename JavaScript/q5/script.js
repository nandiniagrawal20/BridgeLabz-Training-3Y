// Q5. Weather Activity Planner

// Weather information
let temperature = 28;
let isRaining = false;
let windSpeed = 12;

// Check weather conditions
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
}
else if (temperature > 35) {
    console.log("Go swimming.");
}
else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
}
else if (!isRaining && temperature >= 15 && temperature <= 35 && windSpeed <= 20) {
    console.log("Perfect day for a walk.");
}
else {
    console.log("Choose an indoor activity.");
}