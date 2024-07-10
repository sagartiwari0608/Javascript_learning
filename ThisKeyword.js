// console.log(this);  // here this is {} empty but if we run this in the browser then we will get the window object lets run and paste the output here.
// in browser you will get following output
// Window {0: global, 1: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// console.log(window); // this will also work in browser. 

// HERE IS ONE DON'T TO DO IN JS WHILE USING JS
const person1 = {
    firstName : "Sagar",
    age : 22,
    a:this,
    about : function(){
        console.log(`person's name is ${this.firstName} and age is ${this.age}`,this);
    }    
}    
// we have created an object and the function is right there in the object. now we might think that if we copy the method we can call it anytime since its already in the object so this keyword should have its value.
// but its not like that. lets see what we are talking about
// if we do 
person1.about(); // this works fine but now lets try to copy the function 
console.log(person1.a)



const func = person1.about; // this is the way we copy the function. but here what actually is happening is that we go to person1 and then find about and copy the value assigned to it which is a function in this case.
// so we are just assigning a function to this unless we have "this" keyword in a working object it wont have any value stored in it or if we are working on browser then it would only have "window" object stord in it. 
// and this wont work if we try
func(); // we get "persons name is undefined and age is undefined" . for more clarity watch video section "small warning".



// out of the object everything will be bound to window only.
function myname(){
    console.log('sagar tiwari', this);
}
myname();

let myfunc  = function(){
    console.log('myfunc', this);
}
myfunc();

let arrowfunc= ()=>{
    console.log('arrowfunc',this);
}
arrowfunc();



const person2 = {
    a:this,
    firstName:'sagar',
    age:22,
    b:{
        c:22,
        d:function(){
            console.log('logging out the inner c',this.c, 'logging the this',this  )
        }
    },
    about : function(){
        console.log(`person's name is ${this.firstName} and age is ${this.age}`,this);
    }    
}  

console.log(person2.a);
person2.b.d();
person2.about();


// so the end point is that if we use the normal function in an object then that this will be bound to the object and if we use arrow function then it will be bound to window. 

