// here we are to test the doubt arised in mind while learning about named function expressions
function  a(){
    console.log("anything",a);
}
a();
let b = function (){
    console.log(b);

}
b()


//trying out recursion here
let count=1;
let c = function xyz(count){
    console.log(c);
    if(count===1){
        count++;
        c(count);
        
    }
    else{
        
    }
}
c(count);
let d = a;
d();
