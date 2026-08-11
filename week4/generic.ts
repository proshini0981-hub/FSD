//generic variables
class Locker<T> {
    private contents: T;
    constructor(initialItem: T) {
        this.contents = initialItem;
    }
    public getItem(): T {
        console.log("Accessing locker...");
        return this.contents;
    }
    public setItem(newItem: T): void {
        this.contents = newItem;
    }
}
const cashLocker = new Locker<number>(5000);
let cash = cashLocker.getItem();
console.log(`Current Balance: ₹${cash}`);

const documentLocker = new Locker<string>("Property Papers - Mumbai Flat");
console.log(`Stored Document: ${documentLocker.getItem()}`);

interface Gold {
    weightGrams: number;
    purity: string;
}

const goldLocker = new Locker<Gold>({ weightGrams: 50, purity: "24K" });
const myGold = goldLocker.getItem();
console.log(`Gold Weight: ${myGold.weightGrams}g`);


function getFirstPackage<T>(items: T[]): T {
    return items[0];
}

//generic functions
function wrapInBox<T>(item: T): { parcel: T; timestamp: Date } {
    return {
        parcel: item,
        timestamp: new Date()
    };
}
const cities = ["Mumbai", "Delhi", "Hyderabad", "Bangalore"];
const firstCity = getFirstPackage<string>(cities);
console.log(`First city: ${firstCity.toUpperCase()}`);

const pincodes = [400001, 110001, 560001];
const firstPin = getFirstPackage<number>(pincodes);
console.log(`Starting delivery at pincode: ${firstPin}`);

interface Electronic {
    brand: string;
    model: string;
}

const phone: Electronic = {
    brand: "Samsung",
    model: "S24"
};

const packedPhone = wrapInBox<Electronic>(phone);
console.log(
    `Packed item: ${packedPhone.parcel.brand} ${packedPhone.parcel.model} at ${packedPhone.timestamp}`
);

//generic constraints
interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(item: T): number {
    return item.length;
}

console.log(printLength("TypeScript"));
console.log(printLength([1, 2, 3]));