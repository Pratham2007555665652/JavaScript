let myDate = new Date();
let checkType = typeof(myDate);
console.log(checkType);

//Methods
console.log("1st method",myDate.toString());
console.log("2nd method",myDate.toDateString());
console.log("3rd method",myDate.toISOString());
console.log("4th method",myDate.toJSON());
console.log("5th method",myDate.toLocaleDateString());

console.log("\n");


//different syntax for date
let myNewDate = new Date(2021, 0, 25);
console.log(myNewDate.toDateString());

let myNewDate1 = new Date(2021, 0, 25, 5, 3);
console.log(myNewDate1.toLocaleString());

let myNewDate2 = new Date("2024-01-14");
console.log(myNewDate2.toLocaleString());


//conversion
let myNewDate3 = new Date("02-07-2025");
console.log(myNewDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.round(Date.now()/1000));


let myNewDate4 = new Date();

// also Methods
console.log(myNewDate4);
console.log(myNewDate4.getMonth());
console.log(myNewDate4.getDay());
console.log(myNewDate4.getFullYear());
console.log(myNewDate4.getHours());

//custom toLocaleString method
myNewDate.toLocaleString('default', {weekday: "long"}, )