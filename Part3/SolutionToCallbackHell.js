const heading1 = document.querySelector("#heading1");
const heading2 = document.querySelector("#heading2");
const heading3 = document.querySelector("#heading3");
const heading4 = document.querySelector("#heading4");
const heading5 = document.querySelector("#heading5");
const heading6 = document.querySelector("#heading6");
const heading7 = document.querySelector("#heading7");

// now we will see how to clarify it and how we can make our code more readable and flat. this clarification will be done with the help of promises.
function changeText( element, text, color, time,){
    // we will write our whole code inside a promise and then return that promise.
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style= `color: ${color}`;
                resolve();    
            }
            else{
                reject("Error: element not found");
            }
    }) 
    
    }, time);
}

changeText(heading1,"one","red",1000).then(()=>{
    return changeText(heading2,"two","green",1000) // as we returned the promise above in the defined function so as we have to return the function here as well.
})
.then(()=>changeText(heading3,"three","brown",1000)) // we can even further simplify our code as this in a single line because we are returning a single line of code so we done have to use curly brackets as well.
.then(()=>changeText(heading4,"three","brown",1000)) 
.then(()=>changeText(heading5,"three","brown",1000)) 
.then(()=>changeText(heading6,"three","brown",1000)) 
.then(()=>changeText(heading7,"three","brown",1000)) 
.catch((error)=>alert(error)) // then we just need one catch where we can put a general error.



// the bwlow code was our call back hell and pyramid of doom 

// here we are just creating a function to change the text content of an element and color of it. it takes parameters as element which we want to modify , the text and color to make it as we want, time for our timeout function, and two callbacks one when our function runs properly and one for failure.
// function changeText( element, text, color, time, onSuccessCallback, onFailureCallback){
//     setTimeout(() => {
//         if(element){
//             element.textContent = text;
//             element.style= `color: ${color}`;
//             if(onSuccessCallback){
//                 onSuccessCallback(); // if successcallback function is provided then invoke that function
//             }
//         }
//         else{
//             if(onFailureCallback){
//                 onFailureCallback();   // if failure call back is given then invoke this function.
//             }
//         }
//     }, time);
// }

// this is our call back hell which we used earlier 

// changeText(heading1,"one","Violet",1000,()=>{
//     changeText(heading2,"two","red",1000,()=>{
//         changeText(heading3,"three","yellow",1000,()=>{
//             changeText(heading4,"four","blue",1000,()=>{
//                 changeText(heading5,"five","brown",1000,()=>{
//                     changeText(heading6,"six","purple",1000,()=>{
//                         changeText(heading7,"seven","cyan",1000,()=>{
                            
//                         },()=>{
//                             console.log("heading7 does not exist") // failure callbacks
//                         })
//                     },()=>{
//                         console.log("heading6 does not exist")
//                     })
//                 },()=>{
//                     console.log("heading5 does not exist")
//                 })
//             },()=>{
//                 console.log("heading4 does not exist")
//             })
//         },()=>{
//             console.log("heading3 does not exist")
//         })    
//     },()=>{
//         console.log("heading2 does not exist")
//     })    
// },()=>{
//     console.log("heading1 does not exist")
// })