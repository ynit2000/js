// for of    --- used in array 

// ["","",""]

// [{},{},{}]

const arr =[1, 2, 3, 4, 5]

// for (const iterator of object) {   // here iterator: variable, object -- where to apply just that 

for (const value of arr) {
    console.log(value);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// Maps   ::stored unique values only

const map = new Map();
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('CHN',"China")
map.set('FR',"France")

console.log(map)


for (const [key, value] of map) {
    console.log(key,':-', value);
}

