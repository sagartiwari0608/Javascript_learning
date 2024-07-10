// currying is a part of functional programming.
//Currying there are two ways to curry our function. bind and closures.

// firstly lets see a normal function which will do the same task.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // gives output as 20 which is expected.
  
// 1. bind method  : can bbe usefull for defining a function with defined values.
  
const multiplyByTwo = multiply.bind(this, 2); // first parameter is important to write
const res = multiplyByTwo(4);
console.log(res);
  
const multiplyByThree = multiply.bind(this, 3);
const res2 = multiplyByThree(4);
console.log(res2);
  
// 2. closures : when we want to create a callable chain.
  
// for this example lets take another function just so that w can see both the functions together
  
function divide(a) {
  return function (b) {
    return a / b;
  };
}
  
const divideResult = divide(8)(2);
console.log(divideResult);
  

// infintie currying
// we can even have infintie currying as well by using recursion.
//lets take sum ecample for that
function sum(a){
  return function(b){
    if(b) return sum(a+b);
    return a;
  }
}

console.log(sum(5)(6)());