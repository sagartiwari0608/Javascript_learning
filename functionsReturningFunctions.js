// we know a function can return anything.
// this anything includes functions too, now we just have to see how to do it.

function myFunc(){
    function hello(){
        console.log("hello");
    }
    
    return hello;     // whenever we are passing a function anywhere we should not write its parenthesis () with it. whenever we write parenthesis the function gets executed.

}
const ans = myFunc(); // here the myFunc() gets called because of () and the returned value is getting stored.
console.log(ans);
console.log(typeof ans);
ans(); // since ans now stores the function so we can use that function too. 

