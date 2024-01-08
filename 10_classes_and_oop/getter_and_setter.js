class User{

    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email =value.toUpperCase()
    }


    get password(){
        return `${this._password}Private `
    }
    set password(value){
        this._password = value  // this store in DB but not aceess to other

    }

}

const private = new  User('Private@work.in', "abc")
console.log(private.password);
console.log(private.email);

// race will staart btw constructor and setter --> avoid that "_"