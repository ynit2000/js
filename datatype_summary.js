/* 
datatype  are divdied into 2 type :
    1.call by value

    2. call by refferation


*/



// Primitive 

// 7 types : String, Number , Boolerrn , Null, Underfined , Symbol, BigInt

const score = false   // JS is dynamics type datatype
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //  by defuat it;s underfined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(id == anotherId)

const bigNumbmer = 24534534312425n










// Reference ( Non primitive)

// Array ,Objects ,Funcation


const heros = ["shaktiman", "naagraj","doga","Mr. India"]
let myObj = {
    name: "niteshah",
    age: 18, 
}

const myfunction = function(){

    console.log("Hello! India");

}
console.log(typeof bigNumbmer)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof myObj)
console.log(typeof myfunction)  // funcation object  

console.log(typeof id)


