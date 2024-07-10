// // Now In this part we will learn about DOM 
// // So what is DOM DOm is Document object model. it means that our browsers store the whole HTML,Css files etc. as an object.
// // objects here means the key value pairs and the name of the object that stores these key value pairs is "document" and this object becomes a property of window object.
// console.log(window.document);
// // since this is stored inside the windows object we can access everything without having to write windows.document everytime.
// console.log(document); // these both willl be shown to us in html form but if we want to see their actual form we can do this
// // console.dir(document);


// //How to access elements using there id.
// //Ans: getElementById("");
// console.log(document.getElementById("phoneNo"));
// // console.dir(document.getElementById("phoneNo")); keep in mind that once you write dir everything else will be changed to dir by default.


// // Select Element by using Query selector
// console.log(document.querySelector("#phoneNo")); // in this we just have to use the exact annotation how we use while creating them in css. 
// // like dot for class # for id and if it is just a tag then use tag only. and the output will be the first matching result.

// // if you want all the items then you just have to put all after funtion function
// console.log(document.querySelectorAll(".container")); // it gave a list of three items. because there were three items.
// // note: the output that we got  is a node list NodeList(3) [nav.nav.container, section.section-todo.container, section.section-signup.container]
// // this is not an array this is different than an array. it is different because it is a list of nodes of HTML dom tree.

// // get access to and change the Text Content of anything.
// const ManageYourTasks = document.querySelector("h2"); // now we have access to the first h2 content.
// console.log(ManageYourTasks.textContent); // this shows manage your tasks . and this is how we can check whats written there. and it will display all the text content even if the content wa supposed to be hidden.
// // ManageYourTasks.textContent="tasks should be changed by now";
// // // the above exact thing can be done as following.
// // ManageYourTasks.innerText = "Tasks should be changed by now"; // the difference is that this will not show us the hidden content. it will change the content but wont show us.
// console.log(ManageYourTasks.textContent); // this shows tasks should be changed by now


// // We can change the styles of the elements.
// const ManageYourTasks2 = document.querySelector("div.headline h2");
// console.log(ManageYourTasks2);
// // ManageYourTasks2.style = "color: black; border:2px black solid" ; // this is how we can change anything  we want just in one line other wise we can use dot notation but that would be a headache for because we cant change multiple things in one line.


// // Get and Set Attributes.
// const link = document.querySelector("a");
// console.log(link.getAttribute("href")); // this is used to get attributes as name suggests.
// console.log(typeof link.getAttribute("href")); // we can check the typof
// link.setAttribute("href","https://youtube.com"); // now withthis our home nav button has youtube link.
// link.setAttribute("target","blank"); 


// // access multiple elements by class name of by using query selector all
// let navItems = document.getElementsByClassName("nav-items"); // this will give us an html collection
// console.log(navItems);
// // navItems[1].textContent="changed"; // remember if we are chaning a text content then the links will also get disturbed and the wont work.

// const navItems2 = document.querySelectorAll(".nav-items");
// console.log(navItems2);


// // // now we can iterate through these lists like normal 
// // // we have options as normal for loop, for of loop, forEach
// // // for each cant be used on html collections.

// // for( items of navItems2){
// //     items.style.backgroundColor="blue";
// // }
// // for( items of navItems){
// //     items.style.backgroundColor="green";
// //     items.style.color="blue";
// // }
// // // we can not use foreach loop on html collections but if we really want to work with it then we can change the html collection to array.
// // navItems = Array.from(navItems);
// // navItems.forEach((items)=>{
// //     items.style.backgroundColor="green";
// //     items.style.color="black";
// // })


// // Inner Html we can change the inner html as well.
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// // headline.innerHTML= "<h2> nothing <em>just</em> trying <br> to add random things</h2>";
// // // we can also add onto this as a string.
// // headline.innerHTML += "<h1>added something more</h1><button class="btn">hkajshk</button>";

// // we can also traverse the whole DOM Tree one by one elements.
// const rootNode = document.getRootNode();
// console.log(rootNode); // our root node will always be the document.
// console.log(rootNode.childNodes); 
// const rootChildNodes = rootNode.childNodes;
// console.log(rootChildNodes[1].childNodes); // we used one because the first element in the node list was actually doctype html tag which doesnt have anything else
// console.log(rootChildNodes[1].childNodes[2].childNodes);
// console.log(rootChildNodes[1].childNodes[2].previousSibling); // we have all the functions which we can access using these dot notations. 

// // We can also get Classlist that how many classes we have given inside in a tag or in that division.
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// // we can also add classes to this list.
// // sectionTodo.classList.add("random"); //we can see that class has been added and we can see the changes.
// // similarly we cn remove classes to.
// // sectionTodo.classList.remove("container");
// // we can also check if a class is present or not. by using .contains("class name");
// // sectionTodo.classList.toggle("random"); // this will add the class if it is not present and remove if it is present.


// // add html elements.
// // const todoList = document.querySelector(".todolist");
// // console.log(todoList);
// // todoList.innerHTML+="<li>2. second task</li>" // this method has performance issues so we should only use it when we want to change whole html part to something else when we want to add multiple elements then we should not prefer this method.

// // Another method to add which we should use instead of above.
// // const todoList1 = document.createElement("li");
// // todoList1.textContent="2. hello";
// // const todoList = document.querySelector(".todolist");
// // todoList.append(todoList1); // or we can prepend too it will add in front.


// // we can remove elements as well
// // const todoList2 = document.querySelector(".todolist li"); // only first item will be given and that we will bve able to delete.
// // todoList2.remove();

// // we can use before and after to insert something before or after a whole section.
// const todoList = document.querySelector(".todolist");
// // const addingLi = document.createElement("li");
// // addingLi.textContent="2. hello";
// // todoList.before(addingLi); // now this li will be before todolist and after our form where we eneter our todolist.
// // similarly if we use after it will be inserted after.
// // note: one element can be added only once in the list either append or prepend if we want to add both then we have to cloneNode(true) or just simply create another similar element then add it.


// // static list vs live list 
// //Nodelist vs html collections list 
// // query selector will give us a static list and 
// // getelements by class or id or tagname will give us a live list that is html collection.
// // our nodeList hat we get as an output it will be updated till we have printed and the changes done after that will not be saved in it 
// // whiule our html collection is a live list it will store all the changes made even after print it.


// // we can also get dimensions of an element
// const sectionTodo2 = document.querySelector(".section-todo");
// console.log(sectionTodo2.getBoundingClientRect());
// console.log(sectionTodo2.getBoundingClientRect().height);

