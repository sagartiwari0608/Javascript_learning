// 'use strict';  // while practicing just remove this comment. and use this everytime we perform.

firstName = 'sagar';
console.log(firstName);

firstname = 'Someone else';

console.log(firstname);
//  Here we can see when we haven't used let keyword. JS has still created some two variables. where we just wanted to create one varibale and reassign the variable. but due to an "intentional mistake" made here to prove a point that if we as a programmers make similar mistake we will keep creating faulty program wehere we wanted to change the value but we just created another variable.
// That is why we use ""use strict";" in the begining so that Javascript becoming less forgiving. and thus less errorful.

// String Indexing

let Name1 = '  Sagar   awd';     // Here if we will see, then this is array of characters where indexing starts from zero and we can call out any character just by using Name of the variable storing the String and the index of the character.
let Name2 = "Tiwari"
console.log('here we will print 3rd character of Name1:', Name1[2],"\nLast Charachter of String Name2 is :", Name2[((Name2.length)-1)]);     // this should output "g"
// S a g a r
// 0 1 2 3 4

//  this is how indexing works.
//  to get the Length of string
console.log(Name1.length); //10 includes spaces

//  String Manipulation.

// 1. trim() : used to remove extra spaces in front and end of the string. Since strings are immutable thats why this will return another string which we will have to store then we can use that.
// 2. toUpperCase() : used to convert strings from lowerCase to UpperCase. This works Same as Trim it returns another String.
// 3. toLowerCase() : used to convert strings from UpperCase to LowerCase. This works Same as Trim it returns another String.
// 4. slice() : used to create Slices takes two parameters start and end separated by comma and end is not included.

let TrimedName = Name1.trim();
console.log(TrimedName); 
console.log(TrimedName.length); // 5 

let Name2Slice = Name2.slice(0,3);  // Tiw
console.log(Name2Slice);
// slices here are just like python if we dont provide any start and end values by default will start from start and go till end.

// STRING CONCATENATION.    
// Just use the + sign. or String.concat()

let x1="String";
let x2="concatenationn";
console.log(x1+' '+x2);
console.log(x1.concat(" ",x2));

// Template Strings : // similar to .format() which was used in python.
//  "my name is Sagar and my age is 22"
let Name3 = "Sagar";
let age = 22;
let me= `my name ios ${Name3} and my age is ${age}`; // this is the use of backticks `.
