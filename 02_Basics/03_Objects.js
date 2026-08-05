//singleton Object
//Object.create

//Objects Literals

const mySym = Symbol("key1");

const appUser = {
    name: "mohan",
    "full name": "mohan patel",
    [mySym]:"mykey1", //symbol
    age: 24,
    location: "surat",
    email: "mohan@example.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

console.log(appUser.name); 
        //OR
console.log(appUser["name"]);

// this is better for data access from object
console.log(appUser["full name"]);

console.log(appUser[mySym]); //access a symbol from object

//change email of mohan
appUser.email = "mohan1234@example.com";

//freeze the appUser object now we cannot change any data
// Object.freeze(appUser);

appUser.email = "mohan14@example.com";
console.log(appUser);


appUser.greeting = function(){
    console.log("Hello App User");
}


appUser.greetingtwo = function(){
    console.log(`Hello App User, ${this.name}`);
}

// console.log(appUser.greeting); 
// console.log(appUser.greeting()); 

console.log(appUser.greetingtwo()); 