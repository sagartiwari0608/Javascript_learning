// // synchronous Programming means all the things will work in a defined order. which is in js top to down.
// //  a line of code will only be processed untill or unless the line before it doesnt ends its ececution. 
// // think of this as first come first serve example.
// // console.log("script start");

// // for(let i =0;i<=10000;i++){
// //     console.log("something");
// // }

// // console.log("script end");




// // the above example was to show that js is a sunchronous programming language and it is single threaded 


// // setTimeout function
// console.log("script start");
 
// function hello(){
//     console.log("hello world");
// }

// const id = setTimeout(() => {
//     hello(); // this we can just pass the function as argument in this or define the function here as well.
// }, 3000); // 3000 means 3seconds so 3000 is 3000 miliseconds. this means that this function should wait at least 3 secinds. it can be more than that but not less than that.

// console.log("script end");  // here we will see that this will get printed out before hello world .
// for(let i =0;i<=10000;i++){
//     console.log("something");
// }
// // the setTimeout function returns its id which we can use to destroy this timer
// // clearTimeout(id); // we can do this and the 
// console.log("script end");

// // now  thing to remember here is that setTimeout works with closures principle. since it gets stored somewhere else.
// //  so it stores the reference of the variable in its lexical scope. since it stores the reference so by the time if the variable gets modified then it will take the modified value.

// function x(){
//     for(let i = 1; i<=5; i++){  // sicne we have discussed the above can be a problem  so that problem can be solved by using let variable. instead of var. if we use var we will just get 6 as output
//         setTimeout(function(){
//             console.log(i);
//         },i*1000); // we have used i* 1000 here because i changes everytime but actually we are creating 6 timeout functions and all the timeout fuhnctions start execution at the exact same time doesnt matters how many numbers are there there so if we write just 1000 they all will wait for one second and execute and show result at same time but we want then after one second delay so thats why we need to have first number at one second delay second at 2 second and sixth at 6 second delay. 
//     }
//     console.log("anoter script started");
// }
// x();

// // now here we have seen a very interesting result here we have used two timers one for 3 seconds and one for 1 second.
// // ek second ke timer vali to baki ka code khatam hote hi start ho gayi and 3 second vali ka bhi timer same time pe hi start hoga. so hello world and 3 same time pe print hue.

// // now if we still just want to use var then we have to create another function and use the closure property and give different copy of i everytime it runs.

// function y(){
//     for(var i= 1;i<=5;i++){
//         function random(i){
//             setTimeout(() => {
//                 console.log(i);
//             }, i*1000);
//         }
//         random(i);
//     }
// }
// y();
// // here again all the timeouts were started executing at same time thats why we got that output.


// // Similar to setTimeout We have another function setInterval. similar to setTimeout this setInterval is also provided by webApi means browser. and these functions that we call are internally connected to api and they perform function this is not a js functionality.
// // this is  something provided by browsers.


// // APIs in client-side JavaScript
// // Client-side JavaScript, in particular, has many APIs available to it — these are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code. They generally fall into two categories:

// // Browser APIs are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. For example, the Web Audio API provides JavaScript constructs for manipulating audio in the browser — taking an audio track, altering its volume, applying effects to it, etc. In the background, the browser is actually using some complex lower-level code (e.g. C++ or Rust) to do the actual audio processing. But again, this complexity is abstracted away from you by the API.
// // Third-party APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web. For example, the Twitter API allows you to do things like displaying your latest tweets on your website. It provides a special set of constructs you can use to query the Twitter service and return specific information.

// testing out something here.

console.log("script start");

function hello(){
    console.log("hello");
    setTimeout(() => {
        console.log("inside function's setTimeout")
    }, 0);
    console.log("after the setTimeout inside function")
}
hello();
console.log("script end");