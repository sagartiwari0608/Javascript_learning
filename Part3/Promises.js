// promises in js can be defined as a function which is goiing to work with some values in future which we dont know yet.
// promise takes two arguments resolve and reject. these both are callback funtions .one will be callled if the promise gets resolved or fulfilled and other will be called if it gets rejected.
// promise is also an asynchronous task and provided by our api's. to prove this lets put script start and script end along this.

console.log("script start");
basket = ['fruits','rice','salt','vegetabls'];

// lets make a promise that i will make fried rice now for fried rice i have all the incredients i am missing 3 things which i am allowed to take from basket.
// if basket contains those incredients then i am allowed to take them and i will fulfil/resolve the need.
// if it misses any of the required incredients i will not be able to fulfil my promise so it will be rejected.

// now lets create a promise. and save it in a variable which we can remember and find out what type of promise was it

const friedRicePromise = new Promise(( resolve, reject )=>{
    if(basket.includes("vegetables") && basket.includes("rice") && basket.includes("salt")){
        resolve("fried Rice cooked");  // this will work when the promise is resolved and return this value to the callback function which we will define while checking if the promise was ful filled or not
    }
    // promise and body of the promise will be defined by us 
    else{
        // reject("the incredients were missing");
        reject(new Error("something missing"))  // this provides an error in the function.
    }
})


friedRicePromise.then(// resolve function starts 
    (returnedValue)=>{
    console.log("the promise was resolved,",returnedValue)
},               // resolve function end and reject function start
// (errorMessage)=>{
//     console.log(errorMessage);    //this part is not always required but if we are returning something from the promise reject function then it has to be stored somewhere. wither use this or catch at the end.
// }
).catch(
    (error)=>{console.log("so this is the error",error)  // this is how we can catch the error and keep going.
    }
    )

// using it in this then + catch  way is easier to understand because if promise is resolved the " then " part will run otherwise " catch " will work.

console.log("script end"); // this will execute before the promise.



//#############################################################################################################################################################################

//functions can return promise too 

function ricePromisere(){
    basket = ['fruits','rice','salt','vegetables'];
    return new Promise((resolve,reject)=>{
        if (basket.includes("vegetables") && basket.includes("rice") &&basket.includes("salt")){
            resolve("Promise Resolved Fried Rice Cooked"); // this is nothing but calling the resolve function where the string thats being passed here will work as the argument passed.
        }
        else{
            reject("Could not make the rice something was missing.");
        }
    })    
}

// since this is a function returning a promise so we have to call the function and then work with it.

ricePromisere().then((resolve)=>{               // here we are defining the resolve function.
    console.log("Done: ",resolve);
}).catch((reject)=>{
    console.log(reject);
});

// Now we have another method to work with promises. it is promise.resolve

const myPromise = Promise.resolve("Promise Resolved Fried Rice Cooked");  // the string or value that we are passing here will be returned and used by then.

// now we can use this myPromise and check if the promise is resolved or not
myPromise.then((value)=>{
    console.log("Done: ",value);   // as we can see we got output as desired.
})

// we have anotherway of doing this as well.
Promise.resolve("anything").then((value)=>{
    console.log("resolved",value);
}).catch((value)=>{
    console.log(value);
})

Promise.reject("anything").then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log("rejected value",value);
})
// we can use this with reject or resolve only as well.

