// this keyword doesnt work with arrow functions properly we will see this later just get an overview that this doesnt works properly with arrow functions.
const person1 = {
    firstName : "Sagar",
    age : 22,
    about : ()=>{
        console.log(`person's name is ${this.firstName} and age is ${this.age}`);
    }    
}    
person1.about(); //person's name is undefined and age is undefined
// this is because in arrow functions this keyword takes it value from one level above and here the one level above is the window.
