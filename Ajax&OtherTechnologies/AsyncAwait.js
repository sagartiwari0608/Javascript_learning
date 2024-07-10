const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url).then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})

// now using async await
// Async functions can contain zero or more await expressions.
// Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.
async function getData(){
    const response = await fetch(url); // what the above lines mean is that we can make this line of code synchronous means this await will make our engine wait until we get the output of the promise.
    const data = await response.json();
    return data;
}

getData().then((data)=>{
    console.log(data);
})
