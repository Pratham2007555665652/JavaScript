// Store a primitive number value (340) in a variable
const score = 340;

console.log(score)

// Create a number as an object with a value of 500
const balance = new Number(500);
console.log(balance);

// Change the number to text and print how many letters/digits it has (3)
console.log(balance.toString().length);

// Print the number with exactly 2 decimal places (500.00)
console.log(balance.toFixed(2));

const anotherNum = new Number(23.82);

// Round and print the number using only 2 total digits (24)
console.log(anotherNum.toPrecision(2))

const newNum = 1000000

// Format and print the number using Indian currency/number style commas (e.g., 10,00,000)
console.log(newNum.toLocaleString('en-IN'));

//-----------------------Maths---------------------------

console.log("-----------------------Maths---------------------------");

console.log(Math);

// Turn negative number into positive (gives 234)
console.log(Math.abs(-234));

// Round to nearest whole number (gives 23)
console.log(Math.round(23.34235));

// Round up to next whole number (gives 43)
console.log(Math.ceil(42.32));

// Round down to next whole number (gives 34)
console.log(Math.floor(34.90));

// Find lowest number in the list (gives 3)
console.log(Math.min(3, 36, 135, 753));

// Find highest number in the list (gives 753)
console.log(Math.max(3, 36, 135, 753));



// Get random decimal between 0 and 1
console.log(Math.random());

// Get random decimal between 1 and 11
console.log((Math.random()*10) + 1);

// Get random whole number between 1 and 10
console.log(Math.floor((Math.random()*10)) + 1);


const min = 10;
const max = 50;

// Get random whole number between 10 and 50 inclusive
console.log(Math.floor((Math.random() * (max - min + 1))+min));