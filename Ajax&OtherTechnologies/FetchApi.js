// fetch api is a replacement for XMLHttpRequest. it works internally in a similar way but just the outer syntax is changed and easy to use.

const url = "https://jsonplaceholder.typicode.com/posts"; 


// this fetch function returns a promise sowe can either store it somewhere and then use it or just start chaining then and catch.
fetch(url).then((response)=>{
    // console.log(response); // this respose is actually an object with bunch of methods in it 
    //and in its prototype it has a json method so we will use that method to get the result.
    // remember this .json() will also return the values.
    const data = response.json();
    // console.log(data);
    return data;      // since we are working with promises therefore returning resolves the problem
}).then(data=>{
    console.log(data) 
})
.catch(error=>{
    console.log("")
})

// this fetch api will always catch/reject only when internet error occur.
// in fetch if there is any problem in the fetching part then it will contain all the data and still run the then part with status and ok with there respective error codes.


// // now to catch this error we will explicitely throw an error. so that catch can catch. this catch only cathes internet errors 
const url1 = "https://jsonplaceholder.typeicode.com/postss";
fetch(url1).then((response)=>{
    // console.log(response); 
    if(response.ok == true){
        const data = response.json();
        return data;
    }else{
        throw new Error("someting went wrong this is the error code.");
    }
}).then(data=>{
    console.log(data) 
})
.catch(error1=>{
    console.log("inside catch")
    console.error(error1);
})


// when we have to use only get request then we can do as ABOVE  but if we have other type of request like post put delete patch then we have other methods.

// fetch(url, {
//     method:"post",
//     body: JSON.stringify({
//         title:'anything',
//         body: 'random',
//         userid:1,
//         }),
//     headers:{'content-type':'application/json; charset=UTF-8'},
// })
// .then((response)=>response.json())
// .then((data)=>console.log(data))
