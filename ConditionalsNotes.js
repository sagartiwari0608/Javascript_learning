
// if-else ,else if and nested if else here is just like JAVA. 
let age = 18;
if(age>=18){
    console.log("Major");
}
else if(age<=15){
    console.log("Minor");
}
else{
console.log("nothing");
}




// // False values and truthy values.
// false
// ""
// null
// undefined
// 0
// // these all are falsy values means these will be considered as false values.

//Truthy values are anything else but above.
//"abc"
// 1,-1

// #########################Ternary Operators.#################################################

// these are also known as conditional operators.
// these work as (condition)? "true block" : "false block"
age=22;
console.log((age>=17)?"Major":"minor");
//or
let majorOrMinor = (age>=17)?"Major":"minor";
console.log(majorOrMinor);


// And OR operator.
if(age>18 && age>20){
    console.log("major and able to drink");
}
else if(age>18 || age >20 ){
    console.log("you can get your driving license though.");
}
else if(age>18 && age<=20 ){
console.log("enjoy but dont get caught")
}
else{
    console.log("Minor");
}