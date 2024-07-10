// objects are refernece Dtypes just like arrays so we need to clone or copy them if we dont want to change the original  data.

const obj = {
    key1:"value1",
    key2:"value2",
}

// const obj2 = obj; // this method will copy the address stored in obj to obj2 hence obj2 will be able to modify the data in obj so this mehod is not considered for cloning and copying
//one way is following
const obj2 = {...obj}; // using spread operator.

// SECOND METHOD. using object.assign()
const obj3 = Object.assign({},obj);   // here {} is empty target and obj is the source from where it will use data.

 