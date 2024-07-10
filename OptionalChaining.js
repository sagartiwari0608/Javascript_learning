// optional chaining 
// when we are chaining the data types to get our output but the data doesnot exit yet so it would give error. to stop that error we use optional chaining which is basically just giving the interpretor idea that if the data doesnt exists then dont give error.

const user = {
    fName : "Sagar",
    address : { houseNumber:'1234'}
}
console.log(user.address);
console.log(user.address.houseNumber); // these both will work because our data exists.

const user2 = {
    fName : "Sagar",
    // address : { houseNumber:'1234'}
}

//now the address doesn't exists 
// console.log(user2.address);  // this would give undefined.
// console.log(user2.address.houseNumber); // but if we do this it wont work and throw an error. it says "TypeError: Cannot read properties of undefined (reading 'houseNumber')"

// so to avoid this type of error just use ? before chaining dot "." like ?.
console.log(user2?.address);  // this would give undefined.
console.log(user2?.address?.houseNumber); // now this would give undefined too. // we can even use this when we just dont have anything in 

// this works like ? works in ternary operator. if the data exists it would go ahead otherwise it would return. undefined.
