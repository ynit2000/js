const coding = ['js','cpp','rb','py','java']

// coding.forEach( function (item) {} )

// call back funcation inside of Array

// coding.forEach( function (item){ 
//     console.log(item);
// })

// Arrow function

// coding.forEach( greet = (item) => {
//     console.log(item)
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "javascrip",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

// we get data from DataBase in Array form

// myCoding.forEach( () => {})
myCoding.forEach( (item) => {
    console.log(item.languageName,":-",item.languageFileName)
})





