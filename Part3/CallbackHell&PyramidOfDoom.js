// callback hell and pyramid of doom
// in short overview callBack hell is just a bunch of callbacks implemented in such a manner that it becomes very difficult to understand.
// and pyramid of doom is a name given to a specific callback hell's visual shape. in that case the callback hell takes a shape of a pyramid like structure means it leeps leaning towards a side.4+
const heading1 = document.querySelector("#heading1");
const heading2 = document.querySelector("#heading2");
const heading3 = document.querySelector("#heading3");
const heading4 = document.querySelector("#heading4");
const heading5 = document.querySelector("#heading5");
const heading6 = document.querySelector("#heading6");
const heading7 = document.querySelector("#heading7");


// here we are just creating a function to change the text content of an element and color of it. it takes parameters as element which we want to modify , the text and color to make it as we want, time for our timeout function, and two callbacks one when our function runs properly and one for failure.
function changeText( element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style= `color: ${color}`;
            if(onSuccessCallback){
                onSuccessCallback(); // if successcallback function is provided then invoke that function
            }
        }
        else{
            if(onFailureCallback){
                onFailureCallback();   // if failure call back is given then invoke this function.
            }
        }
    }, time);
}

// now lets create our pyramid of doom or our callback hell
// lets get an idea of what exactly we have done here we what we have done is that we have created a function which keeps taking callbacks and keeps changing the content of the headings one by one after one one second interval of time. 
// we can also change the timing in which they will execute and since they are all being executed one line by line and they are inside different execution context sop they all will have there own timers and one timer will start after ending od one timeout.

// if we look vaguely at this code its shape resembles a pyramid thats why this is also known as pyramid of doom.

changeText(heading1,"one","Violet",1000,()=>{
    changeText(heading2,"two","red",1000,()=>{
        changeText(heading3,"three","yellow",1000,()=>{
            changeText(heading4,"four","blue",1000,()=>{
                changeText(heading5,"five","brown",1000,()=>{
                    changeText(heading6,"six","purple",1000,()=>{
                        changeText(heading7,"seven","cyan",1000,()=>{
                            
                        },()=>{
                            console.log("heading7 does not exist") // failure callbacks
                        })
                    },()=>{
                        console.log("heading6 does not exist")
                    })
                },()=>{
                    console.log("heading5 does not exist")
                })
            },()=>{
                console.log("heading4 does not exist")
            })
        },()=>{
            console.log("heading3 does not exist")
        })    
    },()=>{
        console.log("heading2 does not exist")
    })    
},()=>{
    console.log("heading1 does not exist")
})


