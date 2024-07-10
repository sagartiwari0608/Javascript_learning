// // events are something with happen.
// // in js there are so many types of events. e.g. click, onclick, onmouseover, button press, etc.
// // events are used to perform some functions and the function can be anything means it can be a predefined function or a function that we will create.
// // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

// const btn = document.querySelector(".btn-headline");
// // we have multiple ways to do this one way is inline where we name the event in the tag itself and then define the function that it will call 
// // second way is that we have our btn variable now and it has every event as null asigned to it we just change one variable.

// // btn.onclick=()=>{     // but we dont prefer this either 
// //     console.log('you clicked me')
// // } 

// btn.addEventListener("click",function(){
//     console.log("normal function");
//     console.log("value of this:", this)
//     // this.style.backgroundColor = "black"; // we can change the values here as well.

// });


// // in case of arrow function the value of this will be window object.
// btn.addEventListener("click",(event)=>{
//     console.log("arrow function");
//     console.log("value of this:", this)
//     console.log(event);     //this is the informtion that browser provides us all the information about the event in the form of an object.
//     console.log(event.currentTarget.textContent); 

// });



// keypress event : this event will be tiggered when ever user will press any key in the selected area. this event will allow us to store or display everyKeystroke that a user makes in a particular region.
const body = document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})


// mouseover event
// this event will be triggered when user takes its mouse over to a specified region or button or element.
const btn = document.querySelector(".btn-headline");
btn.addEventListener("mouseover",()=>{
    console.log("user reached the button.");
})
btn.addEventListener("mouseleave",()=>{
    console.log("user left the button but didnt click it.");
})