// static methods are those methods which will only work with class name not object name. 


class Animal {
    constructor(Fname,age){
        console.log("animal constructor. adding name and age")
        this.Fname = Fname;
        this.age = age;
        
    }

    static AnimalInfo(){
        console.log("static method called");
    }
    static anything = "Animal's static property."

    get  about(){ // get is used to convert methods to properties.

        console.log(`this animal has a name : ${this.Fname}, and its age is ${this.age}`);
    }
    set about2(nameAge){
        const [Fname,age] = nameAge.split(" ");
        this.Fname = Fname;
        this.age = age;
    }
    static get  details(){ // get is used to convert methods to properties.

        console.log(`STatic property with created with get called.`);
    }
}

// now to use this static method we dont need to create an object just use class name.
Animal.AnimalInfo();


// Animal.about2 = "tommy 7";
// Animal.about;
Animal.details;
console.log(Animal.anything); 
