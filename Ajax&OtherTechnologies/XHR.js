// XMLHttpRequest (XHR) objects are used to interact with servers.
//  You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
// XMLHttpRequest is used heavily in AJAX programming.
// despite of its nameit can be used to retrieve any kind type of data.

const url = "https://jsonplaceholder.typicode.com/posts"; // this will return some data which will be in json format 
// json is JavaScript objet notation and this is similar to objects in js. this is similar not exact same. 
// difference 1 keys in json have to be "quoted". 2. you cant create methods in json. 

const xhr = new XMLHttpRequest(); 
console.log("hello everyone");
// console.log(xhr);

// now we have to initialise a request to a remote server and then we will send the data to that server.
// GET: READ THE EXISTING DATA
// POST: ADD NEW DATA
// PUT : CHANGE EXISTING DATA ( point here to note is that put will delete the existing data and add the data we insert there. so if we miss anything then the data will also miss that value)
// PATCH : CORRECT THE EXISTING DATA. ( similar to above but the difference is that it will chnage only that attribute which we want to edit. where in above it will delete entire entity. so for small corrections use patch. for large errors use put.)

console.log(xhr.readyState); // if object is created but not opened or initiated then the state is 0
// to acess the data we must initiate the process. to initiate we have one open method. 
xhr.open("GET",url); // it takes three arguments request type and the url. third is a boolean for telling that process should be asynchronousely(by default)
// now we have to send the request.
xhr.send();
console.log(xhr.readyState);  // after opening the sate changes to 1 then we have 3 more states headers recieved , downloading, done 

// // to see the response 
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         console.log(xhr.response);
//     }
// }


// or to shorten the above code we have another property
xhr.onload = ()=>{
    console.log("onload function worked only when ready state was",xhr.readyState);
    // console.log(xhr.response); // if we check the type of this response we will find out that this is in string format.
    console.log(typeof xhr.response);
    // we can convert this data into json as well by using
    const convertedResponse = JSON.parse(xhr.response);
    console.log(xhr.response);
    console.log(typeof convertedResponse);
}
