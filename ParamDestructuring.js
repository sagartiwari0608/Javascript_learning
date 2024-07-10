// parameter desturcturing is mainly used for objects.
// we will just destructure them right when function accepts the parameter, similarly how we did with objects. 

const person = {
    firstName : "Sagar",
    gender: "male",
}
// following is the conventional way
function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);

}

// this is with parameter destructuring.
function printDetails1({firstName:fName,gender}){
    console.log(firstName);
    console.log(gender);
}


printDetails1(person);