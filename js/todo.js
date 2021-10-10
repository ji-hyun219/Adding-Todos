const todoForm = document.querySelector('#todo_form');
const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo_form input');


function deleteTodo(event) {
    
}


function paintTodo(newlist) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);  // <li><span></span><button></button></li>
    span.innerText = newlist;
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);
}


function onSubmitTodoForm(event) {
    event.preventDefault();
    const newList = todoInput.value;
    todoInput.value = "";
    paintTodo(newList);
}

todoForm.addEventListener('submit', onSubmitTodoForm);
