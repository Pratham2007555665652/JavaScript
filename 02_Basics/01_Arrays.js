const myArray = [0, 1, 2, 3, 4, 5, true, "rohan"];
const myHeroes = ["shaktiman", "iron man"];
const myArray1 = new Array(0, 1, 2, 3, 4, 5);

console.log(myArray[0]);

//Array Methods

let method1 = myArray1.push(6);
let method1_1 = myArray1.push(7);
console.log(myArray1);

let method2 = myArray1.pop();
console.log(myArray1);

let method3 = myArray1.unshift(100);
console.log(myArray1);

let method4 = myArray1.shift();
console.log(myArray1);

let method5 = console.log(myArray1.includes(4));
console.log(myArray1);

let method6 = console.log(myArray1.indexOf(4));
console.log(myArray1);

const newArr = myArray1.join();

console.log(myArray1);
console.log(typeof newArr);


//slice , splice
console.log("A", myArray1);
const myn1 = myArray1.slice(1, 3);
console.log(myn1);

console.log("B", myArray1);

const myn2 = myArray1.splice(1, 3);
console.log("C", myArray1);
console.log(myn2);
