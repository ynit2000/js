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

function loginInUserMessage(usernmae = "sam"){ // atlest value of unsername (sam)
    // if(usernmae === undefined){
    if(!usernmae){   // -ve of username 
        console.log("Please enter a unsername");
        return
    }
    return `${usernmae} just logged in`
}

console.log(loginInUserMessage("Good!"))
console.log(loginInUserMessage())   // output : undefined just logged in


