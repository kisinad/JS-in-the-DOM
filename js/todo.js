// To-do list ul element
const todoList = document.querySelector('ul');
// Create new to-do
const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';
// Add new todo to the end of the list
todoList.appendChild(newTodo);
// Create new to-do
const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'Pay bills';
parentNode.insertBefore(newNode, nextSibling);
// Add new to-do to the beginning of the list
todoList.insertBefore(anotherTodo, todoList.firstElementChild);