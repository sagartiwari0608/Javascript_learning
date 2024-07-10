// Here we will learn about different types of scope. 

// block scope vs Function Scope.

// what is block.
{
    // this is one block. 
}
{
    // this is second block.
}
//  we can use these blocks to confine the variable scope without making any function. this block will run as normal but just used to create partitions and define scopes till where ever we want.
// when we dont use this {} anywhere our whole document becomes a block. or even if we use the symbol{}. but create a variable as global variable then it would be valid for whole file.
// we dont use these block symbols as we have shown here however we can use. we must have seen them in if-else, for while loops, functions are block too.
if(true){
    console.log(true); // one block
}
else{
    console.log(false); // another block
}

// let and const are block scope.
{
    let firstName = "Sagar";
    const lastName = "Tiwari";
}
// console.log(firstName);  // both of these will give error because let and const are block scope values.
// console.log(lastName);

// var is function scope. means when we use function then it is scoped other wise it is global variable it does not depend on blocks.
{
    var firstName1="Sagar";
}

console.log(firstName1); // this will run but will have to first comment out the upper two output lines for let and const. 
// And remember one thing if this is defined inside another function and we try to access it outside that function this would give error too.
// as below
function myFunc(){
    var n = 1; // if defined inside a function then it would be only function scoped variable.
    let firstName = "Sagar";
    const lastName = "Tiwari";
}
// console.log(n);      // error
// console.log(firstName); // error
// console.log(lastName);  // error


// one thing to notice here is that if we use const var or let then we will be able to access within and inside the same level blocks.
{
    const fName = "Sagar";
    console.log(fName); // here it will print no doubt
    {
        console.log(fName);// it should print here as well. and it does.
    }
}

{
    // console.log(fName);// it should not print here as well. and it doesn't. so we can not do this with const and let but with var we are able to do this because it is a global variable.
    
}

for(let i = 0;i<3; i++){
    // let x="hello"; this gives out error.
    var x="hello"; // this does not

    console.log(x);
}
console.log(x);