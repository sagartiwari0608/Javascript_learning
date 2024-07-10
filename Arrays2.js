// how to clone array. 
// clone an array means create a copy of array so that they both are different than one another. change in one doesn't affect another.

let array1 = ["item3","item1"];
// let array2 = ["item1","item1"];     // this is one way to do but not good method.
let array2 = array1.slice();           // since we haven't provided any value to the start or end it will copy all of the array. when we dont want to make changes in an array while performing changes and just want to store it somewhere we can use slice there as well.
let array3 = [].concat(array1);        // this will also copy.
console.log(array2);
console.log(array1);

// Spread method.
let array4 = [...array1];      // remember this takes the array and spreads then copies it         // this can also work like let array4 = [...array1,"new element","another new element"] 
// or we can spread multiple arrays just using comma.

// js works from left to right so we can keep adding functions from left to right.
let a1 = array1.slice().concat("ransom","random2");


// we can use loops for traversing arrays. Like
let array5 = [];
for(let i=0;i<array1.length;i++){
    array5.push(array1[i].toUpperCase());               // here we traversed array1 going through all elements one by one. and stored the value in array5 
}
console.log(array5);

//WE CAN ALSO USE CONST FOR ARRAY IF WE WANT. then we wont be able to assign anything else to the variable that stores the reference of the array.

const fruits= ['apple','banana'];

// fruits = ["grapes","mango"];  // we wont be able to perform this because we are changing everything inside the array that will change the reference of the constant thats holding the address of the array.

//BUT 
fruits.push("grapes","banana");
// this will work fine 

fruits.unshift("moment");
console.log(fruits)

// Therefore this is a good practice to use reference type Data as const. so that whole of the data cant get lost.

