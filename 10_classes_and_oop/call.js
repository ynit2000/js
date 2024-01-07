// function (){ callme()} --> what actully do is  in case of window---> {this = window} , Node = {}

function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){

    // SetUsername(username)  // this  actully not call this it;s just reffece that
    SetUsername.call(this, username) // use my this not yours   // this technical way to call function
    this.email = email
    this.password = password

}

const private = new createUser('Private','private@work.in', "123")
console.log(private);

