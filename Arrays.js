// Arrays in JS are similar to arrays in any other language. this is one of the reference type Datatype. 
// Ordered collection of items . ordered doesnt means sorted. it means indexed. and arrays here can take multiple types of datatypes.
let listOfFruits = ["apple","mango","grapes"];
// apple mango grapes
//   0     1     2 

// we can add different types of values to it as well.
let randomArray = [1,2,4,"apple",null,undefined,"google"];   
console.log(randomArray);       //Output : (7) [1, 2, 4, 'apple', null, undefined, 'google']
// whenever you print whole array in js you will always get its length first as output then whole array will return.

// arrays are mutable.
listOfFruits[1]= "kiwi";
console.log(listOfFruits);
console.log(typeof listOfFruits);  // object

// We have wise variety of things that we refer to as object. 
// how will we confirm that this is an array if we even need to.
console.log(Array.isArray(listOfFruits)); // True.

// PUSH POP 
// push is adding something in the array from the top or last. and pop is removing the last element always no other position can be modified. arrays are mutable thats why we are abl;e to perform all of this.
listOfFruits.push("mango again");
console.log(listOfFruits);
listOfFruits.pop();   // this will also return that poped elemt we can store that if we want.
console.log(listOfFruits);

// SHIFT AND UNSHIFT to remove and add elements to the starting of th array.   
//  * one point to note is that push and pop are faster than shift unshift because shift unshift have to modify the whole array by shifting elements towards end.
// while push pop will just remove or add element to end and thats it work is done they wont have to change the index of each element.
//unshift first
listOfFruits.unshift("banana","another fruit");  // this can work with multiple items
console.log(listOfFruits);

//shift
listOfFruits.shift(); // this wont work with multiple items. only  one by one.
console.log(listOfFruits);
