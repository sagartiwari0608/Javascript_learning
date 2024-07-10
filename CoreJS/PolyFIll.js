// polyfill is when we create an inbuilt function for an older browser which does not support that inbuilt function.
// we know that our js is backward compatible not forward compatible.
// lets take example of bind function. lets say an old browser doesn't have bind function but we have to use it.

const obj1 = {
    firstName:"Sagar",
    lastName:"tiwari",
    age:22
};

// lets create a general function which we can bind or apply or do anything with.
function printName(){
    console.log(this.firstName+" "+this.lastName);
}

// now what bind function did was it returned a function where it binds the function's this to the object that we pass.
const bindReturnedFunction = printName.bind(obj1);
bindReturnedFunction();

// now that we have seen that above works. we have to create something similar to this bind method.
// how can we achive that. remember every object and function has one prototype. or proto where we can store any thing.
// lets first try the solution that akshay showed in video

Function.prototype.myOwnBind = function(...args){
    let obj = this;
    return function(){
        obj.call(args[0]);
    }
}

// lets use this function 
const tryingMyOwnBind = printName.myOwnBind(obj1);
tryingMyOwnBind();