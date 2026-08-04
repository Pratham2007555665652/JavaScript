const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//(1) merging two Arrays
// let push = marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

let all_heros =  marvel_heros.concat(dc_heros);
console.log(all_heros);

//OR

// merging two Arrays
const new_Heros = [...marvel_heros,...dc_heros]
console.log(new_Heros);


// (2)
const another_Array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5] ]];
const real_Another_Array = another_Array.flat(Infinity)

console.log(real_Another_Array);

// (3) Check the given input is array or not
let IsArray =  Array.isArray("rohan");
console.log(IsArray);

// (4) convert any datatype input to Array
let from =  Array.from("rohan");
console.log(from);

let from2 = Array.from({name: "rohan"}); //give the empty {}
console.log(from2);


let score1 = 100;
let score2 = 200;
let score3 = 300;

//three numbers to a single array
console.log(Array.of(score1, score2, score3));