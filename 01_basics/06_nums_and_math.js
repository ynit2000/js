const score = 400

const balance = new  Number(100);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1))  // client get to fse only just one digit after 0.N;

const otherNumber = 123.8966
console.log(otherNumber.toFixed(2))
console.log(otherNumber.toPrecision(3))


const hundreds = 10000000
console.log(hundreds.toLocaleString()) // US standard 
console.log(hundreds.toLocaleString('en-IN')) // Indian stardnard



// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
console.log(" ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++")

console.log(Math);
console.log(Math.abs(4))
console.log(Math.round(3.14))
 // i choice that number should inc +ve || dec -ve

console.log(Math.ceil(3.14))  // round of thsi to n +1
console.log(Math.floor(3.9)) // round of to n
console.log(Math.min(4,3,5,6,1)); // find minimum value in array
console.log(Math.max(4,3,5,6,1)); // find maximin value in array



console.log("++++++++++++++++++++++++ random ++++++++++++++++++++++++++++++")
// Random 


console.log(Math.random()) // value coem btw 0-1
console.log(Math.random()*10) // value coem btw 0-10
console.log((Math.random()*10)+1) // value coem btw 1-10

// trcik to defind min and max

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max -min +1) + min));  // formula to get max and min 
// this logic ready to use in LUDO game  
