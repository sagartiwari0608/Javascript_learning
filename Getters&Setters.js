// getters and setters in JS are two keywords(get and set) which are used for following purposes.

class Animal {
    constructor(Fname,age){
        console.log("animal constructor. adding name and age")
        this.Fname = Fname;
        this.age = age;
        
    }

    get about(){ // get is used to convert methods to properties.

        console.log(`this animal has a name : ${this.Fname}, and its age is ${this.age}`);
    }
   
    set about2(nameAge){
        const [Fname,age] = nameAge.split(" ");
        this.Fname = Fname;
        this.age = age;
    }
}

const animal1= new Animal("Dog",4);
// now here about is a method if we want to call we will have to use () along with it.
// but if we want to  access it as property means we dont have to use () then we just put get in front of about as we have done.
animal1.about;  // this gave us correct output 

// now setters can be used to create a function take input as if it is a property. lets see firstly if our about2() was treated as function.
// animal1.about2("Tommy 5"); // this would have taken input and worked properly . but here we want to set the values as if its a property. so 
animal1.about2 = "tommy 5";
console.log(animal1);
// it worked we have got the output as desired.
