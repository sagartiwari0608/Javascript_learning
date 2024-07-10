// Map is also a data structure where we store data in a key value format. it is an iterable.
// to create a map 
const person = new Map();
// to add key values to this we use set()
person.set("firstName","Sagar");
person.set("age",22);
console.log(person);
// now why do we even need map while we already have Objects in JS. the main difference is that objects can only have strings or symbols as key. while in Map you can have anything as your key.
person.set(3,"anything");
person.set([1,2,3,4],"array key");
person.set({1:"one",2:"23"},"object key");

console.log(person);


// now as we have used set to set the values similarlly we will use get to get the values.
console.log(person.get("firstName")); // Sagar
console.log(person.get(3)); //anything

// now to get all the keys of map use .keys() . and we can iterate over the result while we were not able to iterate over the values.
console.log(person.keys());

for(let key of person.keys()){      
    console.log(key);
}
console.log();
for(let key of person){    // Maps can use for of loop while we can just use for in loop in objects.
    console.log(key); // this will return arrays of key value pair.
    console.log(Array.isArray(key)); // this will return true.
}

// sicne we are getting array of keys and values so we can destructure this as well.
for(let [key,value] of person){
    console.log(key); 
    console.log(Array.isArray(key)); 
}

// we can also fill value while we create the map
const person2 = new Map([['firstName','Sagar'],[1,"age"]]);
console.log(person2);

//Example where we can use map

console.log();
const person3 = {
    id:1,
    fName:"Sagar"
}
const person4 = {
    id:1,
    fName:"Sagar"
}

const extraInfo = new Map();
extraInfo.set(person3,{age:34,gender: "male"});
extraInfo.set(person4,{age:35,gender: "female"});

console.log(extraInfo.get(person4).gender);
console.log(extraInfo.get(person4).age); // thats how we can work upon maps and objects.

