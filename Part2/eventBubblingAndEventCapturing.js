// there is one property of js known as Bubbling in js in this property its like if we have same events on outer and inner elements then on performing the event on inner element outer element will be fired as well// one point to note that when we use same event only then the bubbling can be seen otherwise it wont happen. its because of the reason that one element is inside the other element 
// technically when we are cliking on inside Element we are cliking on outside Element as well so if they both have same type of events then it will just happen naturally.
const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click",()=>{
    console.log("you clicked on child");
})
parent.addEventListener("click",()=>{
    console.log("you clicked on Parent");
})

grandParent.addEventListener("click",()=>{
    console.log("you clicked on grand Parent");
})
// now here what is happening is if we click on child it prints you clicked on child ," you clicked on parent", "you clicked on grandparent".
// if we do it only for parent then it will print the parent function and then perform the grandparent function. 
// we are using parent child reference because thats how dom tree sees them. else we can use the nested ecample as well. that these are nested to it will go till highest level.
// now if we add an event for body as well then it will excute that function as well.
document.body.addEventListener("click",()=>{// if we write mouseover here then it will count everytime we get to a different element in the webpage.
    console.log("you clicked on body");
})


//#######################################################################################################################################################################################

// Capturing events

// the function addEventListener("event",function, boolean) this has three arguments in actuall.third argument is for event capturing . by default it is false. 
// and if we change the value to true then the order of the bubbling gets reversed totally lets comment out all the above code and write it again with true.


child.addEventListener("click",()=>{
    console.log("you clicked on child");
},true)
parent.addEventListener("click",()=>{
    console.log("you clicked on Parent");
},true)

grandParent.addEventListener("click",()=>{
    console.log("you clicked on grand Parent");
},true)

document.body.addEventListener("click",()=>{
    console.log("you clicked on body");
},true)

// keep in mind that capturing works before bubbling if both are used together. think of it like a depth first traversal in the dom tree. from root to element then element to root.


// Event Delegation
// this is a way of making our code smaller by using the above mentioned properties.
// since outermost common event will be called everytime and we want the event to occur only once 
//then just put the event in the grandparent or whatever is the highest level of parent makes sense.

// while using this property Js will return the event in addevent listener . and that event will always contain the target as main element where the event was performs.
// letys comment the above code and lets see whats actually happening.
document.body.addEventListener("click",(event)=>{
    console.log("you clicked on something,and that something can be found in the returned event Object");
    // console.log(event);
    console.log(event.target);
    // if we want to stop the chaining in case of bubbling and capturing then we can use 
    event.stopPropagation();
},true)
// now lets complete the todolist we were making.
