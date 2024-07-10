// array destructuring means to store the elements of array into separate variables.
const myArray =["value 1","value2","value 3","another value"];
// to Destructure we have to do create temporary array that will be deconstructed right after wards.

let [myVar1,myVar2] = myArray;
console.log("v1",myVar1);
console.log("v2",myVar2);
//and value 3 didn't got assigned to anything because this works one by one.

// And we just had 1 value in myArray and 3 variables to store then other two would become undefined as nothing got stored in them.
let [myVar3,  ,myVar4] = myArray;
//   value1    value3
//  we can do the above written too if we want to skip the value without creating any extra variable.

let [myVar5,myVar6,...myNewArray] = myArray;

// let [myVar5,...myNewArray,myVar6] = myArray;     //this cannot be done.
