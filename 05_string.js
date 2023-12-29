const name = "nitesha"

const repoCount = 10

//console.log(name + repoCount + "myValue") // old age using 

console.log('Hello my name is ${name} and my repo count is ${repoCount} ');

// declearing string 
const gameName = new String('nitesh-hc-com')
console.log(gameName[0])
console.log(gameName[4])

console.log(gameName.length)
console.log(gameName.toUpperCase())
//console.log(gameName.trim())
console.log(gameName.charAt(2))
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'))
console.log(gameName.indexOf('h'))


const newString= gameName.substring(-6,2)  // not follow -ve order
console.log(newString);

const anotherString = gameName.slice(-8,5);
console.log(anotherString);

const newStringOne = "  Niteshah  ";
console.log(newStringOne);
console.log(newStringOne.trim()); // use in form when user use space'__Name__' it's cut that space


const url = "https://private.com/private%20club"
console.log(url.replace('%20','-'))  // web brower don't understand the meaning of 
console.log(url.includes('private')) // seachign inside string we use this


const word =gameName.split();
console.log(word); // outcome : [ 'nitesh-hc-com' ]

const char = gameName.split('-');  
console.log(char); //  outcome:  [ 'nitesh', 'hc', 'com' ]

const names =  "Gudiya";
console.log(names.toLocaleLowerCase())
console.log(names.isPrototypeOf());


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// define a prototye object
const human = {
    rich: true,
}
// create a new obejct that inhert from the 'Human' prototype
const nitesha = Object.create(human);
nitesha.billoaire=true;

// check if 'human' is in the Prototype chain of 'nitesha'
console.log(human.isPrototypeOf(nitesha))




