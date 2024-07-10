
// Our Then() function in promise always returns a promise. this can be used for promise chaining.

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("this is prefix");
    })
}
myPromise().then((Value)=>{
    console.log(Value); 
    Value += " this is suffix"; 
    return Value; //normally dekhne pe lagega ke value return ho rahi hai but actually internally js converts this to //  return Promise.resolve(Value); 

}).then((resolveValue)=>{
    resolveValue +=" this is how we chain and keep adding promises"
    console.log(resolveValue);
});
