// here object chaining means we create an object with a parent child like way so when we are looking for something 
// if js doesnt find it in the child it will find it in the parent or the chain starter.

const obj1={
    key1:"value1",
    key2:"value2",
}
// normal wayt would be creating another obj2 as above but we will see another method.

const obj2 = Object.create(obj1); // so here we have obj2 child of obj1 parent.i am just using parent child as a reference to understand actual reason behind will be known later. 
obj2.key3 ="value3";
console.log(obj2.key3); // this would give value3 this is what we already know.
console.log(obj2.key1); // now obj2 can inherit the properties. and if js did not finds the key value pair from obj2 it can go and find in obj1.
console.log(obj2);

// console.log(obj2.[[prototype]]) // this wont work its just written like that method is still the same.
console.log(obj2.__proto__); // which is this one.

// Now lets solve the problem we faced in "FUnctionsCreatingMultipleObjects.js"

const personMethods={
    is18(){
        return this.age>=18;
    },
    about(){
        return `person's name is ${this.firstName} and age is ${this.age}`;
    }
}
//now we can also create these objects through functions as well where we just have to pass the values through intput.
function createPersons(firstName,lastName,age,email){
    // const user={}; // instead of creating an empty object for each user. we will now use Object.create(). then we can assign one master __proto__ Object to all of the newly created object so they can get the propeties and methods that we want all of them to have.
    const user = Object.create(personMethods); // now they all will contain all the methods and properties of personMethods.
    user.firstName=firstName;
    user.age=age;
    user.email=email;
    user.lastName=lastName;
    //we dont need to change anything in functions so we will just create them once here. or create the functions somewhere else and keep using them by using callmethods.
    
    // user.is18=is18; // this is another way of doing this
    // user.about = personMethods.about;
    // user.is18 = personMethods.is18; // this will not create any increase in memory since same function is being used because js is creating a reference to same function. 

    return user;

}

// now this obj chain can have lngth as long you want.
const user2 = {};
user2.__proto__=obj2;
console.log(user2.key1);



// if we try to see all the keys with loop
for(let key in obj2){    // this will print all of the keys even the keys which are in the proto object.
    console.log(key); // key3 jey1 key2
}

 console.log();
// now thee might be a case whee we need to use only the object we are using only those properties then we have one method.
for(let key in obj2){

if(obj2.hasOwnProperty(key)){
    console.log(key);
}

}

