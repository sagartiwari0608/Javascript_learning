//Arrow fucntions are used very widely and commonly.
//following is a function expression
const printWhateverNeeded2 = function(){
    console.log("whatever needed is printed");
    console.log();
}

// following will be same function as above but in arrow formation.
const printWhateverNeeded1 = () => {                               // thats it . 
    console.log("whatever needed is printed");
    console.log();
}

const isEven = (numberInput) => {
    return numberInput % 2 === 0 ;

}
console.log(isEven(16));

//when we are using exaclty one parameter we can skip brackets.but we should use brackets as it is a good practice.
const isEven1 = numberInput => { 
    return numberInput % 2 === 0 ;

}

// now we can make these functions even shorter.
const isEven2 = numberInput => numberInput % 2 === 0 ;
//removed braces and removed the return.