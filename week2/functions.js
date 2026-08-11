"use strict";
function greet(name) {
    return `Namaste,${name}!`;
}
function getLocation(city = "Hyderabad") {
    return `Location:${city}`;
}
function sendAlert(phoneNumber, message) {
    console.log(`sending SMS to ${phoneNumber}...`);
    if (message) {
        console.log(`content:${message}`);
    }
}
function calculateTotalScores(...scores) {
    return scores.reduce((total, current) => total + current, 0);
}
console.log(greet("Aswini"));
console.log(getLocation());
console.log(getLocation("Amalapuram"));
const total = calculateTotalScores(10, 20, 30, 40);
sendAlert(9876543210);
sendAlert(9876543210, "Movie starts now!");
console.log(`Total Score:${total}`);
