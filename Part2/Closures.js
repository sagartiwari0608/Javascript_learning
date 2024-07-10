// Closure in js is a property where lexical scoping doesnt work as we expect it to work 
// for example in general what happened was.
let anyVariable = "value"; // this is a global variable

function myApp(){
    const myVar= "inside myApp() value1"; // this variable / Constant has its scope only inside this function.

    function myFunc(){
        const myVar = "value changed to 2";   // if this variable wasnt created above this would also have scope only limited to this block of function and functions created inside this function.
        console.log("inside myFunc",myVar);   // the value will be changed for this block only to "Value changed to 2"
    }
    
    console.log(myVar); // this will remain value1. since this is called before we are seeing this value first now i will print this after calling the myfunc as well then we will see the full effect.
    myFunc();   // here the value changed but for the function myfunc() block only.
    console.log(myVar); // here it again went to normal. or as it is suppose to be.

}

myApp();


// now here we remember that the inner lexical scope variable can not be used by outer lexcial scope function where as outer scope variable can be used by inner lexical scope function.

// but in certain cases In case of functions it is a bit different. 
// those cases are where a function on calling returns a function. 

// lets understand by following example 

function makeFunc() {
    var name = 'Mozilla';
    function displayName() { // here deisplay name is an innner function to makefunc()
      console.log(name);
    }
    return displayName; // here the displayName function is being returned.
  }

var myFunc = makeFunc(); // here we are calling the makeFunc() then storing the returned function(displayName()) into myFunc 
myFunc();

// now  this function should not work as it is taking the variable from the scope makeFunc() and we know that whenever we try to do the same we get an error.
// but this works Due TO Closure PRoperty of JS.
//  This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run.
//  The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to print out.
// we can use this propety and make a function that cn be called only once or twice or howevertimes we want 

function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("hi you called me. currently this function can be used only once");
            counter ++;
        }
        else{
            console.log("sorry you exceeded the limit of execution");
        }
    }
}

let func1 = func();
func1(); // since the variable is declared in the lexical parents environment. it only gets declared once and we can access the location where it was stored & MOdify it
func1(); // and once the value gets changed our else condition runs.
func1();
func1();