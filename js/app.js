const todo = document.querySelector('#todo')
const submit = document.querySelector('#submit')
const list = document.querySelector('#todo-list')
const resetBtn = document.querySelector('#resetBtn')

submit.addEventListener('click', function(event) {
 if(todo.value === '') return
 const newTodo = document.createElement('li')
 newTodo.textContent = todo.value
 list.appendChild(newTodo)
todo.value = ''
})

resetBtn.addEventListener('click', function(event){
todo.innerHTML = ''
list.value = ''
}
)