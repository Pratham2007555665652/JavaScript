const user= {
    userName: "mohan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let userName = "mohan kumar"
//     console.log(this.userName);
    
// }
// chai();


// Arrow function
const chai = () => {
    let userName = "mohan patel"
    console.log(this.userName);
}
chai();


const addTwo = (num1, num2) => {
    return num1+num2;
}

console.log(addTwo(34 ,6));

// implicit return
const addThree = (num1, num2, num3) => num1+num2+num3; //return num1+num2
// or
// const addThree = (num1, num2, num3) => (num1+num2+num3);
console.log(addThree(10,10,10));
