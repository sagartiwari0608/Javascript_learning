const url= "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
xhr.open("GET",url);

xhr.onload= ()=>{
    //console.log(xhr.response);
    //console.log(typeof xhr.response); // this returns stirng
    if(xhr.status>=200 &&xhr.status<=300){
    const data1 =JSON.parse(xhr.response);
    console.log(data1);
    console.log(typeof data1); // this returns object.
    // since the data is array of object then we can access with[]
    const data3  = data1[3];
    console.log(data3); // this is an object so we can get the internal ata by dot notation
    console.log(data3.id);
    }
    else{
        console.error("something went wrong");
    }

}
// to deal with inernet connection errors 
xhr.onerror=()=>{
    console.error("internet disconnected");
    
}
xhr.send();