document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    
    if (todoText) {
        const todoList = document.getElementById('todo-list');
        
        // Check if "No todos found" is present and remove it
        const noTodosItem = document.querySelector('.no-todos');
        if (noTodosItem) {
            noTodosItem.remove();
        }

        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        
        input.value = '';
    }
});
