// In js we have more types of loops . more like we had in python. or there syntax is  similar to python . they work only for iterables means arrays.

// "For Of" loop in arrays.
// this loop will not go index wise, it would go by item or element wise. so we wont have to keep in mind the length of the array.
// possibilities are endless here as well

const fruits = ["apple","banana","grapes"];
// there is one thing to follow. call it like a convention, always name your array variable or constant as plural.
// then this variable can be used as singular and this will increase readability.
for(let fruit of fruits){
    console.log(fruit);
    // we can do anything inside.
}

//FOR IN LOOP // as we can see below this works with index // this is just used to that we dont have to get the headache of finding and managing the 
for(let index in fruits){
    console.log(fruits[index]);
    // we can do anything inside.
}

// FOREACH()
// this loop iterates over each element and performs the function that is told to perform.
fruits.forEach(element => {
    console.log(element);
});