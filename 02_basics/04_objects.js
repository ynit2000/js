// const tinderUser = new Object()  // this singleton object 

const tinderUser = {}
tinderUser.id ="123abc"
tinderUser.name = "good"
tinderUser.isLoggedIn = false;

console.log(tinderUser)

const regularUser ={
    email: "good@private.com",
    fullname:{
        userfullname:{
            firstname: "good",
            midname:"nix",
            lastname: "yadav",
        }
    }

}
console.log(regularUser.fullname)   // optional chain used in access in api ?if /esle

const obj1 =  {1: "a", 2: "b"}
const obj2 =  {3: "a", 4: "b"}
const obj4 =  {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // same problem as array 
// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2,obj4)  // {} is optional here 
//  use less then 10% time

// spected method  used 90% time 
obj5 = {...obj1, ...obj2, ...obj4}

console.log(obj3)   
console.log(obj5)   


// this used when value come from database

const users =[
    {
        id: 1,
        email: "good@google.com",
    },
    {
        id: 1,
        email: "good@google.com",
    },
    {
        id: 1,
        email: "good@google.com",
    },
]

users[1].email
console.log(tinderUser)
// used this object in array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// also less used method
console.log(Object.entries(tinderUser))   // output : [ [ 'id', '123abc' ], [ 'name', 'good' ], [ 'isLoggedIn', false ] ]

// check this present in Object or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// IMP and USED lot - 

const course = {
    coursename : "JS in Hindi",
    price: "999",
    courseInstrutor: "Hitesh"


}
// course.courseInstrutor  // not good practica

const {courseInstrutor: instructor} = course  // de-structed
console.log(instructor)

// const navbar = ({company}) => {

// }  // used in react

// navbar(company = "Pritave")

// {     // json file to acces api
//     "name": "Nitesha",
//     "coursename": "JS in Hindi",
//     "price": "Free",
// }

// [  // this sample of array used api 
//     {},
//     {},
//     {}
// ]
 
