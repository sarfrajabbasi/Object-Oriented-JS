// class in JS are  like a bluePrint that describes a perticular Object in non specific way.
/*
-- The "new" keyword
--> it creates a  new empty object{}
--> sets the value of "this" to be the new empty  this:{empty object}
--> calls the constructor method
*/
class UserClass{
    constructor(name,email,status){
        //this:{empty object autocreated}
        this.name = name
        this.email = email
        this.score = 0
        this.status =status
    }
    login(){
        console.log(`${this.email} login`);
        return this
    }
    logOut(){
        console.log(`${this.email} logout`);
        return this
    }
    updateScore(){
        this.score++
        console.log(`${this.name} score is now ${this.score}`);
        if(this.score>4){
            console.log(`${this.name} you are winner`);
            this.score--
        }
        return this
    }
}

const user1 = new UserClass("conner","conner@gmail.com",true);
// method chaining just return this on method and it doing all the chaaining 
user1.login().updateScore().updateScore().logOut()
// console.log(user1);

const user2 = new UserClass("ezio","ezio@gmail.com",false);
// console.log(user2);

// admin is just user but different kind of user it can access all method on main class and inhert the property
//class inheritance
class Admin extends UserClass{
    // constructor(){
    //     super()
    // }
    deleteUser(user){
        users = users.filter((u)=>{
            return u.email != user.email
        }
        )
        return this
    }
}
var admin = new Admin('sarfraj@margin.com',"sarfraj")
var users = [user1,user2,admin]
admin.deleteUser(user2)
admin.login()