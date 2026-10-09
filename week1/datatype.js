"use strict";
let userName = "Aswini";
let userAge = 25;
let isMember = true;
console.log("Data type of Name is -->" + typeof userName);
console.log("Data type of Age is -->" + typeof userAge);
console.log("Data type of Member is -->" + typeof isMember);
function displayUserProfile(name, age, active) {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}
displayUserProfile(userName, userAge, isMember);
