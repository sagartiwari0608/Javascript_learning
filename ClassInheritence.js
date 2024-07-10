// in js extends keyword is used and parent class is mostly reffered as base class or parent class and child is known as subclass.



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

// const animal1 = new Animal("dog",12);
// animal1.about();
// now that we know this class is created perfectly. we can start with inheritance

class Dog extends Animal{
    // if a class extends another class then firstly the parent class constructor will be called we dont need to do anything below.
    // constructor(fName,age){
    //     this.fName = fName; 
    //     this.age= age;

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
// animal2.about();
// console.log(animal2.breed);

// now lets see the order of the constructors.how they are called.
class Pup extends Dog{
    constructor(Fname,age,breed,gender){
        super(Fname,age,breed);
        this.gender=gender;
    }
// about(){}
}
console.log();
const jimmy = new Pup("jimmy","6months","german","male");
// console.log(jimmy);
// console.log(jimmy.Fname)
// console.log(jimmy.breed)
console.log();
console.log("jimmy's about called");
console.log(jimmy.about());
// console.log(jimmy.gender
console.log();
console.log("calling jimmys about one more time to see where and why is this printing that undefined",jimmy.about());