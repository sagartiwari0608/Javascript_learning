// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished.

// callback functions and functions returing functions both are known as HIGHER ORDER functions.

function myFunc(){
    console.log("Inside myFunc().");
}
function myFunc2(a){ // so if we print out a inside this fuction it will give us the whole function.
    console.log("printing a",a); 
    console.log("printing typeof a ",typeof a);

    a();                    // this is how we create 
}
myFunc2(myFunc);

// now we know if we create a parameter while defining a function it can have anything stored inside it. so it can store functions inside them as well.
// thats exactly what callback functions really are.

// another example of callback. the following 
function myDisplayer(x) {
    console.log(x);
  }
  
  function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
  }
  
myCalculator(5, 5, myDisplayer); // we can use arrow functions here as well if we dont want to create memory for storing another varible that refers to the function
// and since these functions are being created by us we can have as many parameters and arguments and call back functions.
// to copy a fuction   
const a = myFunc; // here when we dont use () only then it would work because when we use () then it trys to run the function and save whatever is returned. 
// here nothing is returned so undefined would be printed. but in file FunctionsReturningFunctions.js it is returning function thats why myfunc() works with brackets.
console.log(a); //output says that we have successfully saved the function so it means that to store a function we shouldn't use () . while using that variable we should.
a(); // inside it has copy of myFunc().

