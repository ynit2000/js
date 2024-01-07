let myName = "Private    "

// console.log(myName.truelength);   // making method this this even can tirm method here even so we used this

let myHeres = ['thor','spiderman']

let heroPower = {
    thor:"Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

Object.prototype.Private = function (){
    // console.log(`Private is Present in all objects`);
}

Array.prototype.heyPrivate = function (){
    // console.log(`Private says Hello!`);
}

// heroPower.Private()

myHeres.Private()
myHeres.heyPrivate()
// heroPower.heyPrivate() //  does. not have access:: heroPower.heyPrivate()^TypeError: heroPower.heyPrivate is not a function

myHeres.Private()

// inheritance
const User = {
    name: 'chai',
    email: "private@work.in"
}



const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makAssignment:'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User  // old method to acces

// modern  syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "PrivateAurWork     "

String.prototype.truelength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()
"ritesh".truelength()
"IceBhel".truelength()


