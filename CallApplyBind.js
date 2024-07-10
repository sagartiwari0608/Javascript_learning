function hello(){
    console.log("hello World");
};

// we have 2 methods to call this hello function.
hello();
hello.call();
// these both will give same result.


const person1 = {
    firstName : "Sagar",
    age : 22,
    about : function(){
        console.log(`person's name is ${this.firstName} and age is ${this.age}`);
    }    
}    

const person3 = {
    firstName : "pankaj",
    age : 24,
    
}

const person2 = {
    firstName : "harsh",
    age : 12,
    
}    
// now only person1 has about function but we want to use it in the other object we can use call method to call the function in one object to perform for another object.

person1.about.call(person2); // if we dont mention the object here it will print undefined.

// we can do one more thing that is create function outside like this.
function about(hobby,idol){
    console.log(this.firstName,this.age,hobby,idol); // here this keyword is not written anywhee but its the first parameter of almost any function. if any object is passed then this keyword acts otherwise not
}    
// now all we have to do is just call this function 
about.call(person2,"gym","ambani"); // we got the output

// APPLY is also similar to this call.
about.apply(person1,["gym","ambani"]);

// BIND
const func=about.bind(person1,"gym","ambani"); // this bind keyword returns a function in which what happens is that the function on which bind was used its copy gets binded to that object.
func();
