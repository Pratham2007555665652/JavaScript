function sayMyName(){
    console.log("m");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
}
sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){

    // let result = num1 + num2
    // return result;
    //          OR
    return num1 + num2;
}

const result = addTwoNumbers(23, 3);
console.log("Result ",result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("plese enter Username");
        return
    }
    return `${username} just logged in`;

}

//if not any pass argument so it shows undefined
let ms = loginUserMessage("mohan");
console.log(ms);

function calculateCartPrice(va1, val2,...n1){
    return n1;
}

console.log(calculateCartPrice(200, 400, 500, 6500));

const user = {
    username: "mohan",
    prices: 190
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   

}

handleObject(user);

//object as parameter here
handleObject({
    username: "sam",
    price: 690
})


const myArray = [200, 400, 2300]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 300, 2030]));