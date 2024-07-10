// Loops are used when we need to repeat a task with little change in every iteration or with no change at all.
// lets say we have to print 1 to 5.
let i = 0;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);

console.log("while loop starts");

// this is one method. but this increases complexity in our code.

// So we have loops and there are 3 types of loops.
// while, for, do-while

//  While loop : this is used when we dont know how many times a loop should run . but we know that there is a condition till then the loop should run.
let x= 0;
while(x<=5){
    console.log(x);
    x++;
}
console.log("current value of x is ", x);

// For loop. when we know exactly how many times a loop should run. this can be used.
// but that wouldn't be a good practice because it would become a kind of global variable and it will exist outside of the loop as well and increase the complexity and space of the code.
// the variable i does not exist outside this loop. we can declare this i outside as well and just use the semi colon keeping let i =0 part empty.
// one more thing if we use var here then it would be same effect irrespective of the fact where we declare i.
for(let i = 0;i<=5;i++){       
    console.log(i);
}

// Do while is just a while loop where you want the process to run at least once no matter what
x=0;
do{
    console.log(x);
    x++;
}while(x<=5)


//now there is another important concept.
// sometimes we want the loop to end in between in certain cases. and in certain case we want the loop to skip a few iterations. 
// Thats exactly when we use break and continue respectively.
// break; is used to terminate the immediate loop or block of statements. and takes the control to the immediate outer or next block.
// continue is used to skip the following part of code and continue the iterations.
 