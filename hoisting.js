//Hoisting will be learnt in the later part of the course this is just and overview what hoisting is 

// in js we are able to call the function even before the declaration this feature is known as hoisting in js.
printWhateverNeeded();

function printWhateverNeeded(){
    console.log("whatever needed is printed");
    console.log();
}


// we can do this in arrow functions or fuction expressions 
// const isEven1 = numberInput => { 
//     return numberInput % 2 === 0 ;
// }



// similarly in variables case.

console.log("trying to access before initialising with var:",hello); // this will print undefined but will not show any error.
var hello="hello everyone"; // only with var you will not get any error. but with all others we will get error.
console.log("after initialising with var:",hello);


console.log("with let",);
console.log(hello2); // error cant use before initialisation. the variables and constants created with let and const are available for hoisting in global memory but they remain uninitialised.
let hello2="hello everyone";
console.log(hello2);


console.log("with const");
console.log(hello3);   // error cant use before initialisation.
let hello3="hello everyone";
console.log(hello3);
