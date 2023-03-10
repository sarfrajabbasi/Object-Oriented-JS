function User(name,email){
    this.name = name;
    this.email = email;
    this.online =false;
}
User.prototype.login = function(){
    this.online = true
    console.log(`${this.email} just login`);
}
User.prototype.logout = function(){
    this.online=false
    console.log(`${this.email} just logout`);
}
var user1 = new User("sandy","sandybhadwa@bdawa.com");
var user2 = new User("same","chamnn@chandni.com");
user1.login();
console.log(user1);
user1.logout()
console.log(user1);
console.log("******************");
user2.login();
console.log(user2);
user2.logout();
console.log(user2);

// admin class by function
 function Admin(...args){
    User.apply(this,args)
    this.role = "Super admin"
 }
 Admin.prototype = Object.create(User.prototype)
 Admin.prototype.deleteUser = function(user){
    users = users.filter((u)=>{
        return u.email != user.email
    });
 }
var admin  = new Admin("sufiyan","kitnibackHa@kabClearKrega.com");
var users = [user1,user2,admin]
console.log(admin);
admin.deleteUser(user2);
console.log(users);