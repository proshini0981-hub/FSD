function calculateTotalTraditional(price:number,taxRate:number):number{
    return price+(price*taxRate);
}
const calculateTotalArrow=(price:number,taxRate:number):number=>{
    return price+(price*taxRate);
};
const getWelcomeMessage=(theatre:string):string=>`Welcome to ${theatre}Cinemas!`;
const ticketPrice:number=250;
const gstRate:number=0.18;
console.log(getWelcomeMessage("SRT"));
const total1=calculateTotalTraditional(ticketPrice,gstRate);
console.log(`total(Traditional):${total1}`);
const total2=calculateTotalArrow(ticketPrice,gstRate);
console.log(`Total(Arrow):${total2}`);