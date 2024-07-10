const url= "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();
// xhr.open("GET",url);
// xhr.onload= ()=>{
//     if(xhr.status>=200 &&xhr.status<=300){
//     const data1 =JSON.parse(xhr.response);
//     const dataAt4 = data1[3];
//     console.log(dataAt4);
//     // creating another xhr request
//     const xhr2 = new XMLHttpRequest();
//     xhr2.open("GET","https://jsonplaceholder.typicode.com/posts/4");
//     xhr2.onload=()=>{
//         const data2 =JSON.parse(xhr2.response);
//         console.log(data2); // this one and the above one should give exact same result.
        
//     }
//     xhr2.send(); // always remember to send the request
// }
//     else{
//         console.error("something went wrong");
//     }

// }
// // to deal with inernet connection errors 
// xhr.onerror=()=>{
//     console.error("internet disconnected");
    
// }
// xhr.send();
// The above chaining formed a callback hell
// Now lets see it with promises.

function sendRequest(method,url){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<=300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("something went wrong"));
            }
        }
        xhr.send();
    }
    )

}

sendRequest('GET',url)                       // this returns a promise so we can use .then() here
.then(response=>{
    // console.log(typeof response);
    const data = JSON.parse(response);
    console.log(data);
    console.log(typeof data);
    // return data; // this is returning a promise here as well it would be better to write it as 
    return Promise.resolve(data); // this is what actually is happening right here.
})
.then(data=>{
    const id = data[3].id;
    const url1 = `${url}/${id}`; // here we have just extended the url nothing else like url +"/id";
    return sendRequest('GET',url1); // since this function will again return a request so js will not convert this internally to a promise.
})
.then(response=>{
    console.log(response); // this should print the 4rth data with id as 4 
})
.catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log("finally block reached")
})