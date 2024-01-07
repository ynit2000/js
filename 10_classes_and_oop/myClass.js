// ES6 --> after 2015

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;

//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const private = new User('Private',"private@work.in", '123');
// console.log(private.encryptPassword());
// console.log(private.changeUserName());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

User.prototype.encryptPassword = function(){
    return `${this.password}chai`;
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}


const chai = new User('chai',"chai@work.in", '123');
console.log(chai.encryptPassword());
console.log(chai.changeUserName());
