// Q2. String Manipulation Report

// Original product name
let productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Split string into words
let words = cleanedName.split(" ");

// Capitalize first letter of each word
let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

// Join words into a string
let finalName = capitalizedWords.join(" ");

// Replace Pro with Pro Edition
finalName = finalName.replace("Pro", "Pro Edition");

// Display result
console.log("Original Name:", productName);
console.log("Cleaned Title:", finalName);
console.log("Title Length:", finalName.length);