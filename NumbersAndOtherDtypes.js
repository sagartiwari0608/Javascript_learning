//  js just has one number datatype where decimals and normal numbers are stored. 
// they are defined just as we define String.
let a= 10;
console.log(a);
console.log(typeof a);

// numbers have all those same operators as in other languages. like + - * / 
console.log(15/2);
//  Now if nothing is assigned then it becomes undefined. why undefined because in js datatypes are defined at runtime and since there is nothing in the variable so it would o undefined during runtime.
let b;
// Or
let c= undefined;
console.log(b,c);
console.log(typeof b, typeof c);

// And null is null it just means Nothing is there.
let d = null;
console.log("we are trying to print d here :", d ,"it should print null.");


// BigInt big int is just number dtype where the max limit is increased. for storage of numbers
console.log(Number.MAX_SAFE_INTEGER);
let myNumber = BigInt(12);
let SameMyNumber = 12n;
console.log(myNumber + SameMyNumber);
console.log(typeof myNumber); // bigint
console.log(BigInt.MAX_SAFE_INTEGER);