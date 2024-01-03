const myObject = {
    js: 'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}


for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming = ['js','rb','py','java','cpp'];

for (const keys in programming) {
    console.log(programming[keys])
    
}

const map = new Map();  // map is not iteratable 
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('CHN',"China")
map.set('FR',"France")

// console.log(map)
for (const keyss in map) {
    console.log(map[keyss])
}