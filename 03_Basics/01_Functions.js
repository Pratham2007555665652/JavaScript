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