// Classes in js are fake. we can create every thing we want in that but internally it will still work in the form of objects.
// function CreateUsers(firstName,lastName,age,email){  


//     this.firstName=firstName;
//     this.age=age;
//     this.email=email;
//     this.lastName=lastName;
//     return this;

// }
// CreateUsers.prototype ={
//     is18(){
//         return this.age>=18;
//     },
//     about(){
//         return `person's name is ${this.firstName} and age is ${this.age}`;
//     }
// }

// now the above everything can be dont with the help of classes and constructors.
//  this is why we were getting that suggestion in the Newkeyword.js file that this constructor function may be converted to a class declaration.

class CreateUsers{
    constructor(firstName,lastName,age,email){
        // as in other languages constructor will be called right when the object of class is created. so if we print anything here it will be printed right when we create object using new keyword.
        console.log("hello");
        this.firstName=firstName;
        this.age=age;
        this.email=email;
        this.lastName=lastName;
        // return this; // this is not required
        
    }
    is18(){
                return this.age>=18;
    }
    about(){
                return `person's name is ${this.firstName} and age is ${this.age}`;
    }
    
}
const user1 = new CreateUsers("sagar","tiwari",22,"saagr@email.com");
console.log(Object.getPrototypeOf(user1)); // here we didnt get anything but if we go to browser we will get everythign in answer.
