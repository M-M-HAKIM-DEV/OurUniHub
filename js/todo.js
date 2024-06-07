document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        input.value = '';
    });
});
