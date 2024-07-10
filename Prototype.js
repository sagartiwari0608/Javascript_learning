// the Functions in JS can be used for multipurpose. Functions in JS are functions as well as Objects.
// Javascript functions ===> function + object.

// for example every function that we creaete in JS will have some properties by default.
// For example 

function hello(){
    console.log("Hello world");
}

// now  every function has a name property in js this property tells us the name of the object or function.
console.log(hello.name); //and this was the reason we were getting a line strike over name everytime we tried to use it as a variable name.
// console.log(hello.length); // this gives out 0 as output we dont know but it does.

// We can create our own properties.
hello.myOwnProperty = "This is my added property";
console.log(hello.myOwnProperty);

// A PROTOTYPE PROPERTY IS ONLY PROVIDED BY FUNCTIONS.
// __PROTO__ IS A PROPERTY THAT EVERY OBJECT HAS but proptype is only available to functions.

 // function provides us many more useful properties.

//  whenever we create a function it gives us a free empty object{} which is prototype. 
// lets see now what we are talking about 
console.log(hello.prototype); // this will give empty object here we can use it for whater we need
// but if we open it with browser it would give an object with one key value pair where key is constructor and value is the function itself.
// {constructor: ƒ} // this is the output and if we expand this output we see the following key value.
// constructor: ƒ myfunc()
// [[Prototype]]: Object

// now lets use the empty object.
hello.prototype.fname = "Sagar";
hello.prototype.lname = "Tiwari";
hello.prototype.age = 22;
console.log(hello.prototype);
console.log(hello.prototype.age);

// there is no connection between proto and prototype but we can use tehm together.

// const userMethods=

function createUsers(firstName,lastName,age,email){  

    const user = Object.create(createUsers.prototype);  // this is how we can add prototype object as __ptoto__ remember to create or define prototype before creating users other wise functions wont work.

    user.firstName=firstName;
    user.age=age;
    user.email=email;
    user.lastName=lastName;
    return user;

}
// we have learnt that whenever we create any function we get an empty object named protype so why should we waste more space creating userMethods/
// while we can just put all the methods in one user.prototype and assign that to proto of the function.
console.log(createUsers.prototype); // this is to check we have got the prototype object here or not
// now just put all the methods in this prototype and then add them to the __proto__.
createUsers.prototype ={
    is18(){
        return this.age>=18;
    },
    about(){
        return `person's name is ${this.firstName} and age is ${this.age}`;
    }
}
console.log(createUsers.prototype);

const user1 = createUsers("sagar","tiwari",18,"sagar@email.com");

console.log(user1.about());