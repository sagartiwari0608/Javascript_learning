// Lexical Scope . we will learn about the scopes of variable.
// the word lexical means "the meaning of a word considered in isolation from the sentence containing it, and regardless of its grammatical context". I know this is out of context but good to understand.


let anyVariable = "value"; // this is a global variable

function myApp(){
    const myVar= "inside myApp() value1"; // this variable / Constant has its scope only inside this function.

    function myFunc(){
        const myVar = "value changed to 2";   // if this variable wasnt created above this would also have scope only limited to this block of function and functions created inside this function.
        console.log("inside myFunc",myVar);   // the value will be changed for this block only to "Value changed to 2"
        var n = 1;
    }
    
    console.log(myVar); // this will remain value1. since this is called before we are seeing this value first now i will print this after calling the myfunc as well then we will see the full effect.
    // the above statement will throw an error when we try to use the constant (or let or var variable in more detail in scope.js) which is created inside myFunc().if any function is created inside the myFunc() then it woulod be able to access it noone other would be able to access it unless we return that value. 
    myFunc();
    console.log(myVar);

}

myApp();
