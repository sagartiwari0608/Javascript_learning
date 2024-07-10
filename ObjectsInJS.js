// arrays are not perfect for real world data.
// this error is solved by Objects in js.
// Objects in JS are nothing but what dictionaries in python were. just a key value pairs.
// Objects dont have index

// since objects are also reference type so they should also be preferred to be in constant format for most of time.

const Human = {
    name: "Sagar",
    age: 22
};

console.log(Human);
console.log(typeof Human);


// Since this is a key value pair. so first element before colon will be considered as Key and other value will be considered as value. 
// So to access the value we must use Key. Makes sense right.
console.log(Human.name);
console.log(Human.age);

// The "Keys" here are also referred to as PRoperties. Name is a property and age is a property of Human object. 

// To add more key value pairs 

Human.gender = "male";
Human.hobbies = ["gym","sports","singing"];
console.log(Human);

// One point to note here is that the keys here by default will be converted to string. Means as we can see we haven't explicitly. but still if we take our mouse to that point we can see that it is a string.
// since it is a string so we can also use them as follows to access the values.
console.log(Human["gender"]);

//  similarly we can add values in this way too

Human["Dob"]= "6th aug 2000";

// so whats the difference between "DOT Notation" and "STRING or Bracket notation".
// sometimes what happens is that we want to Add a key where we want to give it a name that has spaces then we have to convert the whole thing into string.

const anotherObj = {
    "the person's Name": "Tiwari",
    "their age" : 25
};
// is we think then it would be obvious that we would not be able to do this without bracket notation

console.log(anotherObj["the person's Name"]);

// Spread operator "..." in Objects.
// now lets first revise what we learnt in arrays.
const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];

const newArray = [array1,...array2];
console.log(newArray);
// as we can see in the output we got first array as it is and second array spread out.
// this is why we use spread operator.
// Now we can spread anyiterable anywhere. examples are givenn below.
console.log(..."abcdefg");
const array4 = [..."abcde"];
// const array4 = [...1234567]; this will give error because numbers are not iterable.




// NOW IN OBJECTS. it is also same as above.
 // the onlyy difference is we use {} instead of []
 const anotherHuman = {...Human,...anotherObj,key4:"valueRandom",key4:"Something Random"};
 // in Objects there can be only one key with one name so whenever a new key with same name is defined irrespective of the value what will happen is that we will lose the old one and new value gets stored at the previous key.
//  anotherHuman.key4 = "newRandom"; // as we can see that the value got changed.
 console.log(anotherHuman);


 const newObj = {..."abcde"};
 console.log(newObj); // Output: { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }

 // And is we try to create an object from an array it would assign the values from array and keep their keys as counting.
 const newObj2 = {...["item1","item2",86]};
 console.log(newObj2);
 // indexing will always start from zero.
 