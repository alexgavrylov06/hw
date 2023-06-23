const todosList = [];
const message = document.querySelector('.message')
const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');

const field = document.getElementById('todoInput');


document.addEventListener('click', (e) => {
    let t = '', d = e.target;
    if (e.target.tagName === 'BUTTON' && e.target.id === 'btn') {
        let spanText = e.target.previousElementSibling.textContent;
        todosList.forEach((item, i) => {
        if (item.text === spanText) {
            todosList.splice(i, 1)
        }
            renderList()
        })
    }

    if (d.tagName === 'INPUT' && d.type === 'checkbox') {
        t = d.parentNode.id
    }

    for (i of todosList) {
        if (+i.id === +t) {
            i.color = !i.color
            i.disabled = !i.disabled
            i.status = !i.status
        }
        renderList()  
    }

})


todoForm.addEventListener('submit', (e) => {
    const field = document.getElementById('todoInput')

    e.preventDefault()

    const newTodo = {
        id: Date.now(),
        date: new Date(),
        text: field.value,
        status: false,
        color: false,
        disabled: false,
    }

    field.value = ''

    todosList.push(newTodo)
    

    incorrectInputs()
    
    renderList()
});



function renderList() 

{
    
    todoList.innerHTML = ''
    let content = ''
    todosList.map(todo => {
        const ul = `<li id='${todo.id}'><input type='checkbox' ${todo.status ? 'checked' : ''}> <span style='color:${todo.color ? 'red' : 'black'};font-size:25px;font-weight: 600;'>${todo.text}</span> <button id='btn' type='submit' ${todo.disabled ? '' : 'disabled'}>Delat</button></li>`
        content += ul;
    })
    todoList.innerHTML = content
    countTasks()
}



function incorrectInputs() 

{

    for (let i = 0; i < todosList.length; i++) 
    {
        if (todosList[i].text.match(/^\s*$/)) {
            todosList.splice(i, 1)
        }
    }

}
  
//46:59
function countTasks() {
    todosList.filter(task => {
        task.status === true
    })

    if (todosList.length === 0) {
        message.textContent = `empty List`
    } else {
        message.textContent = `current amount of Tasks |${todosList.length}|`
    }
}










