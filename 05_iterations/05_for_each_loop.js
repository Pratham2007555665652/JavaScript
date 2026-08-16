const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    // console.log(item);
} )

// or

coding.forEach( (element) => {
    // console.log(element);
    
}  )

// or

const printMe = (item) => {
    // console.log(item);
}

coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>{
//     // console.log(item);
//     // console.log(index);
//     // console.log(arr);
// } )

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
} )