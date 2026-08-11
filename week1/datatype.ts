let userName:string ="Aswini";
let userAge:number=25;
let isMember:boolean=true;
console.log("Data type of Name is -->"+typeof userName);
console.log("Data type of Age is -->"+typeof userAge);
console.log("Data type of Member is -->"+typeof isMember);

function displayUserProfile(name: string,age:number,active:boolean):void{
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ?"Active" : "Inactive"}`);
}
displayUserProfile(userName,userAge,isMember);