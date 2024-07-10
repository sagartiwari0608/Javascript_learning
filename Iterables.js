// iterables are those onn which we can run loops in short.
// Strings and arrays are iterable.
let fName = "Sagar";
for(let char in fName){
    console.log(fName[char]);
};

const array1 = ["item1","item2","item3"];
for(let item in array1){
    console.log(array1[item]);
}


// following code will give error because this objects in js are not iterable.
const myObj = {firstName:"Sagar",age:1233};
for(let item of myObj){
    console.log(item);
}

// in JS array like objects are iterable.
// 1. they have length property.
// 2. we can access the elements using index.
// example :- string

// we have one more iterable in js that is sets. it is discussed in sets.js
 
