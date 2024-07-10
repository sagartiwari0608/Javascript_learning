// there is one sort method in js which sorts the arrays.
const numbers=[5,9,1200,400,3000];

// this function is used as follows.

numbers.sort(); // this method will change the original values.

console.log(numbers);   // but this outputs this value [ 1200, 3000, 400, 5, 9 ].
// so there is a catch in this sort method.
// so how this method works is that it converts the whole array into string then sorts them how string sorting works. so it checks first character of every element and sorts it. if it finds two same character then it checks second character. and thats how it sorts.
// in this example it checks first character and finds how 1200's first cyharacter as 1 it is smaller than everyother element. if we see first element of everyu element then we will find out that this is correct answer according to js.
// and remember one more thing it converts them into string then checks them through ascii values.
// so here we understand that if we sort strings it will work perfectly fine. unless we dont mix up captial and small letters. because capital letters and small letters ahave different acii characters

const names = ["sagar","ankit","priya","anil"];
names.sort();
console.log(names);

// now to make this sort function work with the numbers we have to do one thing.

// numbers.sort()  // this method can take callback functions as well.

numbers.sort((a,b)=>{
    return a-b;
});
// the above function can be written in a short way as
numbers.sort((a,b)=>a-b);  // for descending use b-a;

console.log(numbers); // Now this gives us correct output but how thats in the video.


// how this works is that this will take the two values which it is comparing and subtract them if the value turns out to be positive then it changes their position because it wants the number to be negative.
// thats how this works.  
const userCart = [
    {productId:1, productName:"Trimmer",productAmount:1000},
    {productId:2, productName:"MobilePhone",productAmount:12000},
    {productId:3, productName:"Batteries",productAmount:150},
];

const lowToHigh = userCart.slice().sort((a,b)=>{           // if we use slice here then it will not change the original array. instead it will return a copy or the array which can be saved to create a new array.
    return a.productAmount-b.productAmount;

});

console.log(userCart);
console.log(lowToHigh);
