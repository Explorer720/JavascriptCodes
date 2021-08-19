//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


//functions
// function for action of +/submit button
function addTodo(event) {
//as the button is submit , so to prevent form loading the browser preventDefault is used
    event.preventDefault();

//creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

//creating li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

// creating check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('check-btn');
    todoDiv.appendChild(checkButton);

// creating trashdelete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

// appending tododiv inside todolist

    todoList.appendChild(todoDiv);

//clearing todoInput
    todoInput.value = '';
}

// function for delete and check button
function deleteCheck(e) {
    const item = e.target;
    const todo = item.parentElement;
//delete
    if(item.classList[0] === 'trash-btn') {
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function () {
            todo.remove();
            })
    }

//check
    if(item.classList[0] === 'check-btn'){
        todo.classList.toggle('completed')
    }
}


