// we can use for in 

const Human = {
    name: "Sagar",
    age: 22,
    hobbies: ["gym","sports","singing"]
};

// for in loop // we remember this loop works with index so it will work with keys
for(let key in Human){
    console.log(key); // this will provide the key name.
    console.log(Human[key]); // this will provide the value related to the key.

    console.log(Human.key); // this will provide undefined as output.

    // Lets understand the above behaviour first. so here we see in Human.Key we have seen that it works for human.name & human.Age
    // and it doesnt work with human.key this is because if we write anything after dot it will consider as an actual key which is in string format. it will no longer be considered a variable that stores the value of key.
    // thats why whenever loop runs it gets confused and becomes unable to find any key named "key". and prints undefined 3 times.

}

// here what actually is happening is we have created one variable that is "Key" Now this for loop will iterate ove the keys. and the keys will get stored in the key variable which we will use to access the values as above.

// now to print the values in Key: value pair we have two methods.
for(let key in Human){
    console.log(key,":",Human[key]);
    console.log(`${key} : ${Human[key]}`);
    //both should provide same output.
    console.log();
}



// NOW ANOTHER WAY TO GET ALL THE KEYS 
console.log(Object.keys(Human)); // this would give array of all the keys.
console.log("")
// and by using this method we can iterate over the object as well.

// remember this looop works on items in the array. so object.keys will return array and "FOR OF" will iterate over them one by one.

for(let key of Object.keys(Human)){

    console.log(Human[key]);

}