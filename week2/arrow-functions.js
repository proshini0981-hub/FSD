"use strict";
function calculateTotalTraditional(price, taxRate) {
    return price + (price * taxRate);
}
const calculateTotalArrow = (price, taxRate) => {
    return price + (price * taxRate);
};
const getWelcomeMessage = (theatre) => `Welcome to ${theatre}Cinemas!`;
const ticketPrice = 250;
const gstRate = 0.18;
console.log(getWelcomeMessage("SRT"));
const total1 = calculateTotalTraditional(ticketPrice, gstRate);
console.log(`total(Traditional):${total1}`);
const total2 = calculateTotalArrow(ticketPrice, gstRate);
console.log(`Total(Arrow):${total2}`);
