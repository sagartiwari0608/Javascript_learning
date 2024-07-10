//methods. 
// so what are methods : Methods are those functions which we can call by using dot notation.
//  to create our own one we need to create functions inside objects.

const person = {
    firstName : "Sagar",
    age : 8,
    about : function(){
        console.log(`person's name is ${this.firstName} and age is ${this.age}`);
        console.log(this); // this will print all of the object. so this proves that this will provide a temporary instance of the current working object.
    }
}
// now we have created our own function and we can call it as we call other functions. and the ones which we dont need () for are properties like length of array.
person.about();

// now here we have also used this keyword. so "this" is a key word which represents the current working object. like even if the classes have objects and this will represent them too.
//  if this is written inside an object it will represent that object. 
// if we have 10 objects then object in which this is written .that this will contain that object only 

// the above example can be better understoof as below
function personinfo(){
    console.log(`person's name is ${this.firstName} and age is ${this.age}`);
    console.log(); // this will print all of the object. so this proves that this will provide a temporary instance of the current working object.
}

const person2 = {
    firstName : "Sagar",
    age : 22,
    about : personinfo
}
const person3 = {
    firstName : "Harsh",
    age : 20,
    about : personinfo
}
const person4 = {
    firstName : "Pankaj",
    age : 15,
    about : personinfo
}

// person.about();
person2.about();
person3.about();
person4.about();


// now we were doing this to understand the logic but we have another way of writing method we dont need key value pair 
const person5 = {
    firstName : "Sagar",
    age : 8,
    about(){             // this would work same 
        console.log(`person's name is ${this.firstName} and age is ${this.age}`);
        console.log(this); // this will print all of the object. so this proves that this will provide a temporary instance of the current working object.
    }
}