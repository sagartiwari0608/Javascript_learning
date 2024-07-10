// now in js we dont have to write all the code into one single file 
// we can import functions , classes , arrays, objects, variables, constants etc. from other js files as well. 
//  like we can import things in python 
// in here its not done automatically we have to explicitely write export in front of the element to be able to be imported.

// now we will import our files from the Exportables.js i same folder or folder can be different as well because we will be giving path anyways.
import {displayName,fName} from "./Exportables.js";

console.log(fName);
displayName()
