const descipter = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descipter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);   // asking can u change Math. PI  --->  value: 3.141592653589793,writable: false,enumerable: false,configurable: false

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false,
    configurable:false,

})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// chai.name = "Private";
// console.log(chai.name);

for (let [key, value] of Object.entries) {
    if(typeof value !== 'function'){

        console.log(`${key}  :  ${value}`);
    }
}

