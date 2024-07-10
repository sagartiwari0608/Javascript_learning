"use strict";      // This is a keyword or a way to tell JS that dont be so forgiving and follow the conventions.


// // These all are methods of how you make an ouput on the display
// //  or if working with browser we will have to check the console of the browser.
// // by turning on developer tools and then inspect anywhere on the window and then go to console.
//  The shortcut to go quicly to console is " ctrl + shift + J"

// OUTPUT IN JS
console.log("Hello everyone!");
console.log('Hello everyone!');
console.log(`Hello everyone`); // this method is not preffered because this is used for some other purpose that is Mentioned in "E:\MY WORK\WebDev\StringsNotes.js" line number 51.
console.log("Hello everyone!")  //this is to show that semicolon is not mandatory. but we use it as a good practice.



// VARIABLE DECLARATION IN JS
// as we are able to see this is a dynamic language it assigns the data type of variable during runtim dynamically. 
// We use "let" keyword . Keyword is a word whose meaning is already defined in a programming language. just we should be aware of not to use these words
let name= "sagar";
let anynumber=124423.01209;
console.log(anynumber);

let nameIsSagar = "Tiwari";
console.log("Sagar", nameIsSagar); // this wil display "Sagar tiwari" 
console.log("Sagar"+ nameIsSagar); // this will display "sagartiwari" without space so we will have to provide the space by ourself here.


//  Constants in JS are used when you dont want the value of something to change at all. so you as a coder will not ever mistakenly change the value of the those items.
const numbers=122773;
console.log(numbers);
//  we wont be able to assign anything new means we wont be able to change the value of the const.

// numbers=2;  //  This will cause an error. 



// ALL THE DATATYPES IN JS. 
// NOTE: there are two types of dtatypes in javascript. 
//  Primitive and refrence type.
// primitive are String, Number, boolean, undefined, Null, (BigInt,Symbols) less used but are there.

let age=10;                         //number
let number1= 1900.29082098;         //number
let name2 = 'sagar'                 //String
let isApproved = false;             //Boolean
let firstname = undefined;          // Undefined. this is the default datatype and value of any variable that is not assigned to anything.
let selectedColour= null;           //Null. yes null and undefined are different from each other. undefined is just undefined. and null means nothing. And there is a bug in js that null is defined as Object in JS wheree it should have been just Null but it is now kept as it is. so we just have to learn it as it is.
console.log("double equals: ",firstname==selectedColour);
console.log("triple equals: ",firstname===selectedColour);



// FUNCTION DECLARATION IN JS.
function random(){
    document.writeln("bruh moment");
    document.writeln("MOMENT");
}

// ALERTS IN JS . these are used to give out a warning / or urgent information to the user.Or they just are there just to take the attention of the user.
alert("OKAY");

// This is used to take user inputs while working with browser.
var input = prompt("enter input:");
console.log(input)



let arr1 = [1,2,3,4,5,6,7]
// For Each loop 
let output="";
arr1``.forEach(function(value){
    output += value + "<br>";
    console.log(value);
})
document.getElementById("firstcontainer").innerText=output;
let smth = document.getElementsByClassName("container");
smth[1].innerHtml=output;
//we learnt something new here that if the output that we want to display is using some tags that we want to use. then use innerHTML. if we just want the output then we can just use innerText.






//Array functions 

let arr2 = [1,2,93,34,555,66457,7];
let len= arr2.length; // length is a property so we dont have to use parenthesis here.
console.log(len);
let bruh = arr2.sort();

//  here we will see something different than we are used to it converts all the elements to string then sorts them. so it sorts them alphabetically. as words are sorted in dictionary.
console.log(bruh);


// this all was its output.
/*
[    1, 2, 34, 555, 66457,  7,   93 ]
*/

// ############################### DOM manipulation.######################################

// we can perform dom manipulation from here as well. from here as well i mean from the code too. 

document.getElementById("click").click()
document.getElementById('click').style.border = 'black solid 2px'
document.getElementById('click').style.border = null

// Now a bit more

let getID = document.getElementById('click');
console.log(getID);
let getCLass = document.getElementsByClassName('container');
console.log(getCLass);
// now for this above example we have 2 classes. so it will return an html collection.
// and this html collection means it is a type of array. and we will have to use it as follows.
getCLass[0].style.border='15px solid brown';
// getCLass[1].style.background='royalblue';


let ChangingParagraph = document.getElementsByTagName('p'); // this returns a list of elements with same tag. as above class one does. so use the return value as an array
ChangingParagraph[0].style.fontFamily='arial';


//  THIS IS USED TO ADD NEW CLASSES. 
console.log(ChangingParagraph);
getCLass[0].classList.add("anyrandom"); 
// we can add this class to the code as well. this will be added at run time.

// similarly we can remove the class as well.
// and we can access the inner HTML as well.
let moment=getCLass[1].innerHTML;
console.log(moment);
// we can change this as well.
let moment1=getCLass[1].innerText;

console.log(moment1);


