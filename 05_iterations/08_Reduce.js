const myNums = [1, 2, 3];

const myTotal = myNums.reduce( (acc, currentVal)=>{
    console.log(`acc: ${acc} and currentVal: ${currentVal}`);
    return acc+currentVal
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2990
    },
    {
        itemName: "python Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12000
    },
]

const priceToPay = shoppingCart.reduce( (acc,item)=>{
    return acc+item.price;
},0 )

console.log(priceToPay);