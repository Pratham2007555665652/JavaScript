// in the console.log it is show like this rohan
const name = "rohan";
const repoCount = 32;

console.log(`his name is ${name} and my repo count is ${repoCount}`);


// in the console.log it is show like this [String: 'game2423']
const gameName = new String("game2423");

//output is g
console.log(gameName[0]);

//output is empty object( {} )
console.log(gameName.__proto__);

//the length of gameName is 8.
console.log(gameName.length);

//it is game2423 convert to GAME2423 but the original gameName is not changed.
console.log(gameName.toUpperCase())

//the output is m because m is second charcter of a string.
console.log(gameName.charAt(2));

//the output is 2 because 2 is second charcter of a string.
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4);

//the output is game because 
//g at 0
//a at 1
//m at 2
//e at 3 but 4 is not include.
console.log(newString);


const anotherString = gameName.slice(0, 2);
//print ga
console.log(anotherString);

const newString1 = "           hello          ";

console.log(newString1);

//remove all whitespaces
console.log(newString1.trim());


const url = "https://google.com/web%233page";

//remove %233 and replace with -
console.log((url.replace('%233', '-')));

//in the variable have com so it is shows true if not it shows false
console.log((url.includes('com')));

let userName = "sohan_skdk_skd";

//it is splits userName based on _ -> [ 'sohan', 'skdk', 'skd' ]
console.log(userName.split('_'));