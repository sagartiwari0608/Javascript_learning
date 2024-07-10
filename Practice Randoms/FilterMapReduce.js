const data = [
    { firstName:"sagar", lastName:"tiwari", age: 25},
    { firstName:"Chetan", lastName:"tiwari", age: 15},
    { firstName:"Akshay", lastName:"tiwari", age: 45},
    { firstName:"Pankaj", lastName:"tiwari", age: 52},
]

const output = data.reduce((result,current)=>{
    if(current.age<30){
        result.push(current.firstName);
    }
    return result;
    
},[])
console.log(output)