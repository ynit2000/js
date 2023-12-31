// function is just package of 10-12 line code

console.log("G")
console.log("0")
console.log("0")
console.log("D")

function sayMyName(){
    console.log("G")
    console.log("0")
    console.log("0")
    console.log("D")

}
sayMyName // just refferation address of funcation

sayMyName()

// function addTwoNumbers(number1, number2){      // parameter
//     console.log(number1 + number2)
// }
// const result = addTwoNumbers(3, 5)   // argument


function addTwoNumbers(number1, number2){      // parameter
    // let result = number1 + number2
    // return result
    return number1 + number2  // after using return it;s get out of the function
}
const result = addTwoNumbers(3, 5)   // argument

// console.log("Result :", result);

function loginInUserMessage(username = "sam"){ // atlest value of unsername (sam)
    // if(usernmae === undefined){
    if(!username){   // -ve of username 
        console.log("Please enter a unsername");
        return
    }
    return `${username} just logged in`
}

console.log(loginInUserMessage("Good!"))
console.log(loginInUserMessage())   // output : undefined just logged in

// ****************** Cart - E-com****************************

function calculateCartPrice(val1,val2 ,...num1){  // rest operator 

    return num1;
    // val1 = 200 ,val2 = 400 take this values
}
console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "good",
    price: 99,

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);

}

handleObject(user)

handleObject ({
    username: "nix",
    price: 499
})
handleObject ({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400 , 100 , 600]

function retunrSecondValue(getArray){
    return getArray[1]

}

console.log(retunrSecondValue(myNewArray))

