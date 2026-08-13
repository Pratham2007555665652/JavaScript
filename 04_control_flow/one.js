// <, >, <=, >=, ==, !=, ===, !==

//if
// const isUserloggedIn = true;
// const temprature = 41

// if (temprature < 50){
//     console.log("less than 50");
    
// }

// else{
//     console.log("temprature is grater than 50");
    
// }


const score = 200;

if (score > 100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}

// const balance = 1000;

// if ( balance < 500 ) {
//     console.log("less than");
// }
// else if(balance< 750){
//     console.log("less than 750");
    
// }
// else if(balance< 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
    
// }

//  && => and || => or

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmai = true 


if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}


if(loggedInFromGoogle || loggedInFromEmai){
    console.log("user logged in");  
}