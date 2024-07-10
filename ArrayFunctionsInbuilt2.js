//Find method, every, some, splice, start , delete, insert.

// Find method, finds and returns the first match in the array.
const myArray = ["hello","cat","dog","lion"];
function isLength3(string){
    return string.length === 3;

}
const findans = myArray.find(isLength3); // this function also works with call back functions.
// const ans2= myArray.find("cat"); this does not work so this can only take functions.

console.log(findans);
const userCart = [
    {productId:1, productName:"Trimmer",productAmount:1000},
    {productId:2, productName:"MobilePhone",productAmount:12000},
    {productId:3, productName:"Batteries",productAmount:150},
];

const findans2 = userCart.find((item)=>{
    return item.productName === "Trimmer";
});
console.log(findans2);
const findans3 = userCart.find((item)=>item.productId===2);
console.log(findans3);


//###############################################################################################

// EVERY METHOD, checks if every element in the array passes the condition mentioned. if yes then it returns true otherwise false.
const numbers = [2,3,4,5,6,78,8];
const everyans = numbers.every((number)=>number%2===0); //false, here we are checking if each element is even.
console.log(everyans);
const everyans2 = userCart.every((item)=>item.productAmount<20000);
console.log(everyans2); // true

//###############################################################################################

// Some method . it will return true if at least one of the element passes the condition.
console.log(numbers.some((number)=>number%2===0)); // here we are checking if at least one of the number is even.
// rhe usercart example will work here same as well.

//###############################################################################################

// FILL method. this will change original array.
// we can create and fill a new array with one value.or we will fill the array with a value from start to end index.
const myArray1 = new Array(10).fill(15); // this can be used to create an aray of length 10 filled completely with 15.yes both of these numbers can change.
console.log(myArray1);
// or we can just change the values.
myArray1.fill(4,3,6); // fill( value, start , end). end is not included means it will go till end -1
console.log(myArray1);

//###############################################################################################

// Splice() method is used when we want to insert in an array in between or delete something in between. this will change the original array.
// this has arguments first is start, then second is delete(how many items you want to delete) and third is insert(what you want to insert at that position).

//delete
const names = ["sagar","pankaj","aman","priyal","gandhi"];
names.splice(1,1); // this will start from index 1 and delete 1 item. so pankaj should be deleted from the array. and we dont want to insert so we will leave insert point empty.
console.log(names); //[ 'sagar', 'aman', 'priyal', 'gandhi' ] as we can see its gone.

//insertṇ
names.splice(1,0,"panku");
console.log(names); //[ 'sagar', 'panku','aman', 'priyal', 'gandhi'] we have added the valeu.

// insert and delete
const deletedNames = names.splice(1,2,"a","b","vc"); // here we are deleting some values its returning those values as well we can save them into a variable or constant and use them.
// names.splice(1,2,["a","b","vc"]); // [ 'sagar', [ 'a', 'b', 'vc' ], 'priyal', 'gandhi' ]

console.log(names); //[ 'sagar', 'a', 'b', 'vc', 'priyal', 'gandhi' ]
console.log(deletedNames);
