// in JS we can create functions inside functions.
// from now on we can use any formation of functions.
const app = function(){
    console.log("inside app");

    const myFunc = ()=>{
        console.log("inside App's myFunc function.");
        
    }

    const addTwoNum = function(num1,num2){
    myFunc(); // we can do this as well. because they are at same level
     return num1 + num2;   
    }
    
    // Now we can only call these functions from inside the main function.
    myFunc();
    let returnedSum = addTwoNum(2,3);
    console.log(returnedSum);
}

// now to use the main function we have to call the function outside the function only.
app(); // this is a reminder that we cannot access the inner functions.only same or above level or outer functions are accesible.
