
const userEmail = []   // let suppose if "string " then Ture else " " empty then False
// console.log(typeof userEmail)

if(userEmail){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined,NaN

// turthy values
// "0" , "false" , " " , [] , {}, function(){}


if (userEmail === 0){
    console.log("Array is Empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

// false == 0 --> true
// false == '' --> true
// 0 == '' ---> true

 
// Nullish Coalescing Operator (??) : null undefind
// this is used in database 

let val1;
// val1 = 5 ?? 10      
// val1 = null ?? 10   // check for null(default case)1st if values prsent then values is store

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20   // store the 1st values not null/undefined


console.log(val1);

// Terniary Operator (?)  // used as short of If /else

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More the 80")

