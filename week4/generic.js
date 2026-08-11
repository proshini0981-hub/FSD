"use strict";
//generic variables
class Locker {
    contents;
    constructor(initialItem) {
        this.contents = initialItem;
    }
    getItem() {
        console.log("Accessing locker...");
        return this.contents;
    }
    setItem(newItem) {
        this.contents = newItem;
    }
}
const cashLocker = new Locker(5000);
let cash = cashLocker.getItem();
console.log(`Current Balance: ₹${cash}`);
const documentLocker = new Locker("Property Papers - Mumbai Flat");
console.log(`Stored Document: ${documentLocker.getItem()}`);
const goldLocker = new Locker({ weightGrams: 50, purity: "24K" });
const myGold = goldLocker.getItem();
console.log(`Gold Weight: ${myGold.weightGrams}g`);
function getFirstPackage(items) {
    return items[0];
}
//generic functions
function wrapInBox(item) {
    return {
        parcel: item,
        timestamp: new Date()
    };
}
const cities = ["Mumbai", "Delhi", "Hyderabad", "Bangalore"];
const firstCity = getFirstPackage(cities);
console.log(`First city: ${firstCity.toUpperCase()}`);
const pincodes = [400001, 110001, 560001];
const firstPin = getFirstPackage(pincodes);
console.log(`Starting delivery at pincode: ${firstPin}`);
const phone = {
    brand: "Samsung",
    model: "S24"
};
const packedPhone = wrapInBox(phone);
console.log(`Packed item: ${packedPhone.parcel.brand} ${packedPhone.parcel.model} at ${packedPhone.timestamp}`);
function printLength(item) {
    return item.length;
}
console.log(printLength("TypeScript"));
console.log(printLength([1, 2, 3]));
