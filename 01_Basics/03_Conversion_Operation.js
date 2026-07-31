//here 65 is not a Number but a String.
// let score = "65";

let score = "65abc";


//here output is String
console.log(typeof(score));


//it is convert a score into a Number
let valueInNumber = Number(score);


//here output is number
console.log(typeof(valueInNumber));


//here output is NaN because we are convert a "65abc" into a number and than output is NaN
console.log(valueInNumber);


//this happend with Null, undefined.
//if we have a String we cannot convert into the Number. this is give NaN in output

//here value is a Number
let isLoggedIn = 1;


//this line for to convert Number to Boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);


//here show the True or false Based on value assign to the isLoggedIn.
console.log("isLoggedIn is ",booleanIsLoggedIn);


//1 -> True 0 -> False
//"" -> false
//"abc" -> True


//***************Operations***************

let value =23;
let negValue = -value;
console.log(negValue);
// console.log(2+2); //basic operation

let str1 = "hello";
let ster2 = " World";
let str3 = str1 + ster2;
console.log(str3);

console.log("1"+ 2);
console.log(1 + "2");

//output is 122
console.log("1" + 2 + 2);

//output is (1+2) = 3  + "2" = 32
console.log(1 + 2 + "2");


//tricky
//output is true
console.log(true);

//output is 1
console.log(+true);

//output is 0
console.log(+"");

let num1, num2, num3

num1= num2 = num3 = 2+2



let gameCounter = 100;
gameCounter++;

//add 100 than add 1 = 101
console.log(gameCounter);



let gameCounter2 = 50;

++gameCounter;

//add 1 than add  50 = 51
console.log(gameCounter);