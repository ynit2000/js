// let a = 10
// const b = 20
var c = 300
let a = 150

// console.log(a,b,c)

if (true){
    let a = 15
    const b = 20
    var c = 30
    console.log("Inner A :", a)   // local 
}

// console.log(a)
// console.log(b)
console.log(a)            // global scope


// scope on node or coding enviromment and web-Broser is diffent

function one(){
    const username = "ritesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two() 

    
}
one()

if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);

    }
    // console.log(website);
}
// console.log(username )




// ++++++++++++++++++ Interesting ++++++++++++++++++++++++
let num;
function addone(value){
    return num + 1;
}

console.log(addone(5))

const addTwo = function(num){
    return num + 2

}
console.log(addTwo(5))