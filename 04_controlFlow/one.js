// // if

// const isUserloggedIn = true
// const temperature = 27

// if(temperature === 27 ){
//     console.log("executed")
    
// }

// console.log("Temperature is greater than 50")

// <, >, <=, >=, ==, ===, !== : it;s checked datatype also

// const score = 200;

// if (score > 100 ){
//     // var power = "fly"  // var is scope is Globle

//     let power = "fly"  //
//     console.log(`User power: ${power}`);

// }
// console.log(`User power: ${power}`);

const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test");  // not mature pratices

// if (balance < 500){
//     console.log("Less Than")
// }
// else if(balance <750 ) {
//     console.log("Less than 750")
// }
// else if(balance < 900){
//     console.log("Less Than 900")
// }


const isUserloggedIn = true
const debitCard = true
const loggedINFromGoogle = false
const loggedINFromEmail = true

if (isUserloggedIn && debitCard  ){
    console.log("Allow to buy course")
}
if (loggedINFromGoogle || loggedINFromEmail){
    console.log("User logged in");
}




