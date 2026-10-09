"use strict";
let flexibleValue = 35;
flexibleValue = "Hello";
flexibleValue = true;
let mysteryValue = "Hello Everyone";
//let length:number= mysteryValue.length;
if (typeof mysteryValue === "string") {
    console.log("Length of unknown string:" + mysteryValue.length);
}
function logNotification(message) {
    console.log("ALERT:" + message);
}
logNotification("Environment setup complete!");
