// firstly lets see primitive types.
let num1 = 6;
let num2 = num1;  // the value is copied into num2 from num1
// changing ones value wont effect other.
num1++;
console.log("num1: ",num1);
console.log("num2: ",num2);
// as we can see only first value got changed.


//  Lets see reference type now.

let array1 = ["item1","item1"];
let array2 = array1;                // since this was a reference type so both were referring to same memory block.

console.log("array1",array1);
console.log("array2",array1);

array1.pop();
array2.unshift("anything");                       //thats why when we changed one both got changed.
console.log("popped once");
console.log("array1",array1);
console.log("array2",array1);


// the reason behind all of this is that primitive are basic datatype they wont take mote storage space so js has allowed to always create a copy for them 
// while with reference type they actual data and their pointer (which refer to data.) are stored in different location. data is stored in a heap and their pointer stores their address in the heap. while the pointer itself is stored in the memory stack.
// when we say array2 = array1. the array2 pointer gets the same address there fore it gets the access to same data in the heap.
// then why when we change one it changes all.
 