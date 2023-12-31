// singleton ---

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"ritesh",
    [mySym]:"mykey1",   // imp syntax in interviews
    age: 18,
    location: "thane",
    email:"ritesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],


}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(JsUser[mySym])


JsUser.email = "good@private.com"
JsUser.email = "good@private.com"
console.log(JsUser.email)  //
// Object.freeze(JsUser);   // used to lock object 
JsUser.email = "goodNitx@private.com"
//
console.log(JsUser)


// funcation

JsUser.greeting = function(){
    console.log("Hello! JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello! JS user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

/* 

In summary, use dot notation for straightforward access to properties with valid identifiers, and
use square bracket notation when dealing with special characters in property names or when the 
property name is dynamic.

*/
