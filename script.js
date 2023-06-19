const todosList = []
const todoForm = document.getElementById('todoForm')
const todoList = document.getElementById('todoList')



todoForm.addEventListener('submit', (e) => {
    const fiеld =  document.getElementById('todoInput')
    const delBtn = todoList.querySelector('button')
    e.preventDefault()
    
    const newTodo = {
        id: Date.now(),
        date: new Date(),
        text: fiеld.value,
        completed: false,
    }

    fiеld.value = '';

    todosList.push(newTodo);

    renderList()
});

const renderList = () => {
    let content = '';
    todosList.map(item => {
        content += `<li id = "${item.id}"><input type="checkbox" ${item.completed ? 'checked' : ''}><span>${item.text}</span><button disabled>Dеlatе</button></li>`
    })
    todoList.innerHTML = content
}

todoList.addEventListener('change', function(e) {

    let textSpanInput = todoList.querySelector('span').innerHTML


    todosList.forEach(function(item){
        if (item.text === textSpanInput) {
            item.completed = !item.completed;
            console.log(item)
        } 
    })

})








