"use strict";
// the document object has a type Document
// const btn = document.getElementById("btn")!; // "!" - non null assertion operator the only downside is that you can only use this if you know for sure that this will not be null
// console.log(btn);
const form = document.getElementById("todoform");
const input = document.getElementById("todoinput");
const list = document.getElementById("todolist");
const todos = readTodo();
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // can't access input.value if input is declared as a regular HTMLElement because value only exists on HTMLElement input type
    const todoText = input.value;
    const todo = {
        text: todoText,
        completed: false,
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodo();
    input.value = "";
});
function renderTodo() {
    list.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        li.textContent = todos[i].text;
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = todos[i].completed;
        li.append(checkbox);
        list.append(li);
    }
}
function readTodo() {
    const todoList = localStorage.getItem("todos");
    if (!todoList) {
        return [];
    }
    return JSON.parse(todoList);
}
function completeTodo() {
}
renderTodo();
