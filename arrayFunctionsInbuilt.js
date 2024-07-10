// important array functions 
// foreach, map, filter, reduce.

const array1 = [4,3,2,6];
array1.forEach( function(element,index) {                            // here as well if want we can pass upto two parameters they can only be element and index. and that too in the same order. 
    console.log(`${element} at index ${index} multiplied by 2 is =`,element*2);
});

// this is our foreach loop. it works through anonymus function where the function dont have any name.
// this function will callback the function whatever we define in it.this iterated through elements and performs the functions. Functions can be whatever you want.
// it can be anyother function too like we made any function somewhere else as well then we can use that to work with it too.

function myFunc(number,index){
    console.log(`the number at index ${index} is ${number}`);
}

array1.forEach(myFunc)

// lets say we have an array of objects.
const users = [
    {firstName:"Sagar",age:22},
    {firstName:"amana",age:23},
    {firstName:"hardh",age:24},
    {firstName:"Anmol",age:25},
]

users.forEach(function(user){
    console.log(user.firstName,"is",user.age, "years old.");
})

// ###################################################################################################################################
// Map method. Map method returns array and can work with index as well. this is used to create a new array which is created by using an existing array.
const numbers=[1,2,3,4,5,6,6,7];

const square= function(number){
    // console.log(number*number);
    return number*number;
}

const squaredNumbers = numbers.map(square); // this map function will call a callback function so it can either show output or return something. it wont change the original array.
// so we have to store the returned value to use it somewhere else.
console.log(squaredNumbers);

const squaredNumbers2 = numbers.map((element,index)=>{
    console.log("storing square of ",index);
    return element*element;

});

console.log(squaredNumbers2);

// ###################################################################################################################################
// Filter Method.

// filter method is a method where we can filter out the given array according to our own conditions.
// like in foreach function can do anything. and in map filter function must return a value so that it can create a new array.
// just like that filter function must return a boolean value where if it returns true for an element.then means element passed out filter test. then it would be stored in the new array. rest will not be stored.

const evenNumbers = numbers.filter((number)=>{
    return number%2===0;
})

console.log(evenNumbers);

// we can also create callback functions. 

// ###################################################################################################################################

// Reduce Method. The reduce () method reduces the array to a single value.
//  Now how it reduces the value to a single value it depends on us. it could be a total of all the values. or it could be multiplication of all the values or it could even be anything like any complicated calculation.


const sum = numbers.reduce((accumulator,currentvalue,index)=>{     // it works something like a fibonacci series. first element gets stored at accumulator, second at current value. and then the calculation gets performed. this all will happen for the first index and then for next index. then the result gets stored at accumulator, next currentvalue stores the next element and this goes on. 
    console.log("at index",index);
    return accumulator+currentvalue;
},0     // here we can pass the default value of the accumulator
);

console.log(sum);

// a real life example.

const userCart = [
    {productId:1, productName:"Trimmer",productAmount:1000},
    {productId:2, productName:"MobilePhone",productAmount:12000},
    {productId:3, productName:"Batteries",productAmount:150},
];

const cartTotal = userCart.reduce((totalPrice,currentProduct)=>{
    return currentProduct.productAmount + totalPrice;
},0);
console.log("carttotal",cartTotal);
