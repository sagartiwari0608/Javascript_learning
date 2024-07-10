// functions are just a reusable piece of code which we might use multiple times just with diffeent or even same values. 

// function declaration.
function printWhateverNeeded(){
    console.log("whatever needed is printed");
    console.log();
}

// to call a function just write its name with ()

printWhateverNeeded();
printWhateverNeeded();

/////////////////////////////////////////////////////////////////////////////////////////////////////

// functions are usually made to return something. means they are just used to calculate something and we need that calculated value for further calculation so we just tell the function to return the desired output.

function toReturn(){
    let x = 1;
    let y = 4;
    return x+y;
}

toReturn();// as we can see this will not print anything.

console.log(toReturn());

// now these all functions above were just examples none of them were actually any helpful . they all were pointless and they can only perform simple and single task.
// we create functions so that we dont have to write same calculations for different values again and again.
// so we make them take variables so that we can perform calculations again and again.


function sumTwoNumbers(value1,value2=0){         // one point to remember here is that these value1 and value2 are parameters. we can assign some default value to these as well as provided to value2 in case user forgets to add or has nothing to add to the number.  
    return value1+value2;
}

let summedValue = sumTwoNumbers(4,5);         // these 4,5 or if we pass anything these will be our arguments.
console.log("summed",summedValue);

// Rest Parameters. for variable number of parameters. when we dont know how many parameters one could pass then we use this method. means that rest all of the parameters get passed.

function myFunc(a,b,...c){         // this triple dot is also for spread operator and also for rest operator.
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`); // this will print the array in string format
    console.log(`c is `,c);

}
myFunc(2,3,4,45,6,7,8,);



// example / practice funtion
// isEven

function isEven(number1){
    if(number1%2===0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

isEven(3);

// search for a target in an array.
function findTarget(array,target){
    for(let i =0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;

}

let target1 = findTarget([1,2,3,4,5,6,8],6); // 5
console.log(target1);

// Function expresion nothing else just another way of declaring a function.
const printWhateverNeeded2 = function(){
    console.log("whatever needed is printed");
    console.log();
}
// this will work exact same way as it is above.


