// here we will try  promises and timeout together.
console.log("script start")

function randomPromise(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(() => {
            if(value){
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    })
}

randomPromise().then(()=>{
    console.log("resolved");
}).catch(()=>{
    console.log("rejected");
})

console.log("script end")
