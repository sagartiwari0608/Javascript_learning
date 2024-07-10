// creating our "Add" task button functional.
const todoInput = document.querySelector(".section-todo input[type='text']");
const todoForm = document.querySelector(".section-todo");
const todoList = document.querySelector(".todolist");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();   // this prevent default is to make sure that our page doesnt reload when we click submit
    // console.log(todoInput.value) // this was to make sure we are able to access the input value.
    const AddedTaskInput = todoInput.value;
    console.log(AddedTaskInput)
    const AddedTaskLi = document.createElement("li"); // we have created a new li which we can place anywhere
    const innerHTMLofLi=`
    <span class="text"> ${AddedTaskInput} </span>      
    <div class="todo-buttons">
        <button class="todolist-button done">Done</button>
        <button class="todolist-button remove">Remove</button>
    </div>`;
    AddedTaskLi.innerHTML=innerHTMLofLi;
    // now we have created how our output should look like and the output contains the input by user jnow we just have to insert this li in the webpage.
    todoList.append(AddedTaskLi);
    todoInput.value = ""; // this is to clear the value.
})


// making the done and remove button functional

// todoList.addEventListener("submit",(e)=>{
// })
todoForm.addEventListener("click",(e)=>{
    const clickedElement= e.target;
    if(clickedElement.classList.contains("done")){
        const TextElement = clickedElement.parentNode.previousElementSibling;
        TextElement.style= "text-decoration: line-through";
    }
    if(clickedElement.classList.contains("remove")){
        const ItemTobeRemoved = clickedElement.parentNode.parentNode;
        ItemTobeRemoved.remove();
    }
})