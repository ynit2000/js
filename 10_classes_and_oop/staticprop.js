class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){   // static not allow you acces this createId()
        return `123`
    }
}

const private = new  User('Private')
// console.log(private.createId);


class Teacher extends User{
    constructor (username, email){
        super (username)
        this.email = email

    }
}

const iphone = new Teacher('iphone','i@phone.in')
iphone.logMe();
console.log(iphone.createId());
