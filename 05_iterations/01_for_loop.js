//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) 
    {
        for (let j = 1; j < 10; j++) {
            // console.log(`inner loop value${j} and outer value is ${i}`);
            // console.log(i + ' X ' + j + ' = ' + i*j);
            
            

    }
    // console.log(`outer loop value ${i}`);
}


let myarray = ["flash", "batman", "superman"];

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);

}

//Break and continue

for (let i = 1; i <= 20; i++) {

    if(i == 5) {
        // console.log(`Detected 5`);
        break;
    }

    // console.log(`Value of i is ${i}`);
}

// AND

for (let i = 1; i <= 20; i++) {

    if(i == 5) {
        console.log(`Detected 5`);
        continue;
    }

    console.log(`Value of i is ${i}`);
}


