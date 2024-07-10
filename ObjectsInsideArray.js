// Objects inside array are nothing else just array of objects.

const users = [
    {id:1, fname:"sagar", sirname:"Tiwari"},
    {id:2, fname:"pankaj", sirname:"Tiwari"},
    {id:3, fname:"rahul", sirname:"Singh"}
];
console.log(users);
console.log(users[1].fname);

// Now we will see how to use loops with this

//For of
for(let user of users){
    console.log(user.fname, user.sirname);
}


// for in loop

for (let user in users){
    console.log(users[user].sirname);
}

console.log();


// Now lets see how we will destructure this type of datatype

let [user1,...user2] = users;
console.log(user1);
console.log(user2);
console.log();
console.log(user1.fname);
console.log(user2[0].fname);

// now if we dont want whole datatype to destructure we would do following.

const [{fname,id}, , user3]=users;
console.log(fname);   // this should give sagar and it does. 
//remember while destructuring objects that the variable names where you will store the value should be same as the key that we are trying to unfold or destructure.
