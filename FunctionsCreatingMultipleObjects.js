// const person = {
//     firstName : "Sagar",
//     lastName:"Tiwari",
//     age : 28,
//     email:"sagartiwaris@gmail.com",
//     about(){
//         return `person's name is ${this.firstName} and age is ${this.age}`;
//     },
//     is18(){
//         return this.age>=18;
//     }
// }
// const aboutPerson = person.about();


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
    const user={};
    user.firstName=firstName;
    user.age=age;
    user.email=email;
    user.lastName=lastName;
    //we dont need to change anything in functions so we will just create them once here. or create the functions somewhere else and keep using them by using callmethods.
    
    // user.is18=is18; // this is another way of doing this
    user.about = personMethods.about;
    user.is18 = personMethods.is18; // this will not create any increase in memory since same function is being used because js is creating a reference to same function. 

    return user;

}
const person2 = createPersons("pankaj","tiwari",19,"sagar@rmail.com");
console.log(person2);
console.log(person2.about());

// or we we dont want to write the functions reference inside the createpersons defination.
console.log(personMethods.about.call(person2));

