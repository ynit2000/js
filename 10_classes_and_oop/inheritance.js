class User {
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }


}

class Teacher extends User{
    constructor(username, email, password){
        
        super(username)   // this super all belind work in to User by taking this (as current username)

        this.email = email
        this.password = password

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const private = new Teacher("private", "private@work.in", "123");
//const private = Teacher("private", "private@work.in", "123");^TypeError: Class constructor Teacher cannot be invoked without 'new'
private.addCourse();
private.logMe();

const masalaChai = new User('masal')
masalaChai.logMe()

console.log(private === masalaChai)
console.log(private instanceof Teacher)
console.log(Teacher instanceof User)
console.log(private instanceof User)
