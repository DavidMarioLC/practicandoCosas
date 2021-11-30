//render uid
function renderUI() {
  listTodos.innerHTML = '';

  todos.forEach((todo) => {
    listTodos.innerHTML += `<li id='${todo.id}' class='todoItem' style=${
      todo.todo.completed ? 'text-decoration' + ':' + 'line-through;' : ''
    }>${todo.todo.text}</li>`;
  });
  const todoItems = document.querySelectorAll('.todoItem');
  todoItems.forEach((element) =>
    element.addEventListener('click', () => {
      console.log(element.id);
    })
  );
}
