// this is used for current contected 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to websssite `);
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this)

// function chai(){
//     let username = "ritesh"
//     console.log(this.username);
// }
// chai()

// const chai = function (){ 
const chai =  () => {     // this is arrow function
    let username = "ritesh"
    console.log(this);
}
chai();


// const addTwo = (num1 ,num2) => {
//     return num1 +num2

// }


// const addTwo = (num1 ,num2) => num1 +num2  // let n=3 ,n=4 => 7


const addTwos = (num1 ,num2) => ({username: "ritesh"}) // let n=3 ,n=4 => 7





console.log(addTwo(3, 4))


// const myArray = [2,3,4,5,6,7]

// myArray.forEach()

