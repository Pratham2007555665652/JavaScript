//for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello World!";

for (const val of greetings) {
  // console.log(`each char is ${val }`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");

for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

// TypeError: myObj is not iterable
// const myObj = {
//     Game1: 'NFS',
//     Game2: 'Spiderman'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }