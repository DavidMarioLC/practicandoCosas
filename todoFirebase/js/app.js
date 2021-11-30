import services from './auth.js';
import firestore from './firestore.js';
// DOM instances
const form = document.getElementById('form');
const page = document.getElementById('page');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const todoInput = document.getElementById('todo');
const listTodos = document.getElementById('listTodos');

let userAuth;
let todos = [];

services.onAuthStateChanged(services.auth, (user) => {
  if (user) {
    userAuth = user;
    console.log('iniciado');
    btnLogin.hidden = true;
    btnLogout.hidden = false;
    page.hidden = false;
    getAllTodos();
  } else {
    console.log('sin iniciar');
    btnLogin.hidden = false;
    btnLogout.hidden = true;
  }
});

function login() {
  services.login();
}

function logout() {
  services.logout();
}

async function createNewTodo(e) {
  e.preventDefault();
  let todo = e.target.todo.value;
  await firestore.insert(userAuth.uid, todo);
  todoInput.value = '';
  getAllTodos();
}

async function getAllTodos() {
  let result = await firestore.read(userAuth.uid);
  todos = result;
  renderListTodos();
}

function renderListTodos() {
  listTodos.innerHTML = '';
  let newList = [...todos].sort((a, b) => a.id - b.id);
  newList.forEach((todo) => {
    listTodos.innerHTML += `<li ${o} id='${todo.id}'>${todo.text}</li>`;
  });
}

async function updateTodo() {}

async function deleteTodo() {}

btnLogin.addEventListener('click', login);
btnLogout.addEventListener('click', logout);
form.addEventListener('submit', createNewTodo);
