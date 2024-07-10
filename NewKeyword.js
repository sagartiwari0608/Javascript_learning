//  "new" Keyword is used very widely in js.
// new keyword has many purpose in js

// function createUsers12(fname,age){   // when we create a function which will be used to create more objects it is called as constructor function.
//     this.fname = fname;
//     this.age = age;
// }

// const user1 = new createUsers12("sagar",22); // here we used new keyword but calling a function which isnt returning anything doesnt makes sense right.
// // but we have written "new" here. this keyword is going to make sense. but lets first seee whats the output of above code.
// console.log(user1); //createUsers { fname: 'sagar', age: 22 }
// // as we can see we have created an object here with the values. so we can understand what new keyword does 


// new keyword does 3 things.
// 1. creates an empty object with "this" keyword refering to that object like "this={}".
// 2. Returns this . hence the object is returned for saving to a variable.
// 3. New keyword also links the __proto__ to prototype automatically.

// so here in this example if we see we have 
// createUsers.__proto__ = createUsers.prototype; // this is already done so we dont need to explicitly link them

// if we add any functions to the prototype they will automatically be added.

// now lets see again that problem

// there is a naming convention in js that a constructor functions name always starts with Capital letter.
function CreateUsers(firstName,lastName,age,email){  


    this.firstName=firstName;
    this.age=age;
    this.email=email;
    this.lastName=lastName;
    return this;

}
CreateUsers.prototype ={
    is18(){
        return this.age>=18;
    },
    about(){
        return `person's name is ${this.firstName} and age is ${this.age}`;
    }
}

// Now we have done what we needed to now just create the object using new keyword.

const user1 = new CreateUsers("sagar","tiwari",22,"saagr@email.com");
console.log(user1);
console.log(user1.about());


// Now we have seen that how objects have functions. but if we remember arrays also have inbuilt functions.
// let numbers = [1,2,3];
// and if we see by using dot notation we can see so many functions.
// numbers.concat; numbers.forEach etc etc.
// but how does this work .because these all arrays also have a prototype. if print out an object we see the functions and the prototype.
//  we just now have got to know about new keyword so it will be easier for us to understand the following code. 

// when we define an array like we did in the  let numbers = [1,2,3];
// arrray internally defines them as
let numbers = new Array(1,2,3);
// now we already know how this works this array function has already all the methods defined in the 
// is we prnit out the prototype of the array we will find 
console.log(Array.prototype); // we wont see it here we can see this properly in browser.
// we will find the Array of all the functions and properties.
// now remember that arrays are also objects in js so prototyope can be of two types array and object.