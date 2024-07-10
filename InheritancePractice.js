class Animal {
    constructor(Fname,age){
        console.log("animal constructor. adding name and age")
        this.Fname = Fname;
        this.age = age;
        
    }
    about(){

        console.log(`this animal has a name : ${this.Fname}, and its age is ${this.age}`);
    }
}
class Dog extends Animal{
    // if a class extends another class then firstly the parent class constructor will be called we dont need to do anything below.
   
    // but if we need to add a new property that we want to add other than already in the parent class. then we will create the constructor here and add other parameters.
    constructor(Fname,age,breed){
        super(Fname,age); // this should be the first line in child constructor.other wise this would give an error that super must be called before.
        console.log("dog constructor adding breed now");
        this.breed = breed;
    }
    about(){                    // if we create a method 2 times with same name then js will not go further onece it finds the method it will use that if it doesnt find then it will go one level up. 
        console.log("dog's about method");
    }
}
const animal2 = new Dog("Tommy",6,"labrador");
console.log();
console.log("dog's about method being called");

class Pup extends Dog{
    constructor(Fname,age,breed,gender){
        super(Fname,age,breed);
        this.gender=gender;
    }
}
console.log();
const jimmy = new Pup("jimmy","6months","german","male");
// console.log(jimmy);
// console.log(jimmy.Fname)
// console.log(jimmy.breed)
console.log();
console.log("jimmy's about called");
// console.log(jimmy.about()); // the undefined that i was seeing in the output due to this reason that i was using console.log and the function is returning nothing.
// console.log(jimmy.gender);
jimmy.about();
console.log();
// console.log("calling jimmys about one more time to see where and why is this printing that undefined",jimmy.about()); // same reason goes here as well.
jimmy.about();