const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc, currval)  {
//     console.log(`acc: ${acc} & currval: ${currval}`);
//     return acc + currval;
//     },  0);   // this 0 is start as acc = 0 ; output : {acc: 0 & currval: 1}


// arrow function 
const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0);


console.log(myTotal);

const shoppingCart = [
    {
        itemName: "mobile dev cource",
        price: 5999
    },
    {
        itemName: "python cource",
        price: 1199
    },
    {
        itemName: "js cource",
        price: 399
    },
    {
        itemName: "data science cource",
        price: 12999
    },
]

const priceTotal = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceTotal)