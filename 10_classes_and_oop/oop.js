const user = {
    userName: "Private",
    loginCOunt: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from dataBase");
        // console.log(`Username: ${this.userName}`);
        console.log(this);
    }


}

// console.log(user.userName);
// console.log(user.loginCOunt);
// console.log(user.signedIn);
// console.log(user);

// console.log(user.getUserDetails());
// console.log(this);


// constrtor
// const promiseOne = new Promise()
// const date = new Promise()

function User(username, loginCOunt, signedIn){
    this.username = username;
    this.loginCOunt = loginCOunt;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this


}
const userOne = new User("Private", 4, true)
const userTwo = new User("Chai", 2, false)   // this is over write on userOne -> prevent from  this used 'new'
console.log(userOne.condtructor);
// console.log(userTwo);

