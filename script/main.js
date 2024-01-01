const todoForm = document.querySelector("#todo-form");// primeira div
const todoInput = document.querySelector("#todo-input"); // primeiro imput
const todoList = document.querySelector("#todo-list"); // div caixa de opçoes
const editInput = document.querySelector("#edit-input"); // inpit da segunda ciaxa
const editForm = document.querySelector("#edit-form"); //segunda caixa escondido
const cancelEditButton = document.querySelector("#cancel__edit-button"); //caixa escondida



//adicionando tarefa 
function addTaskTodo(text){
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerHTML = text
    todo.appendChild(todoTitle)

    const doneButton = document.createElement("button")
    doneButton.classList.add("finish-todo")
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneButton)

    const editButton = document.createElement("button")
    editButton.classList.add("edit-todo")
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editButton)

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("remove-todo")
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteButton)


    todoList.appendChild(todo)
    todoInput.value =""
    todoInput.focus()

}

function toggleForms(){
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')


}




//eventos
todoForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    const inputValue = todoInput.value
    if(inputValue){
        addTaskTodo(inputValue)
    }


})

document.addEventListener('click', (event)=>{
    const targetEl = event.target
    const parentEl = targetEl.closest('div')

    if(targetEl.classList.contains('finish-todo')){
        parentEl.classList.toggle('done')
    }

    
    if(targetEl.classList.contains('remove-todo')){
        parentEl.remove()
    }
    
    if(targetEl.classList.contains('edit-todo')){
        toggleForms()
    }
})

cancelEditButton.addEventListener('click', (event)=>{
    event.preventDefault()

    toggleForms()
})