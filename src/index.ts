// the document object has a type Document
// const btn = document.getElementById("btn")!; // "!" - non null assertion operator the only downside is that you can only use this if you know for sure that this will not be null
// console.log(btn);

// don't know what btn is at runtime so it can run as null which typescript can't handle can use javascript syntax to say if it isn't null, run the code
// btn?.addEventListener

// Type assertions
// Assert to typescript to treat a value as a certain type
interface Todo {
    text: string;
    completed: boolean;
}
const form = document.getElementById("todoform")!;
const input = document.getElementById("todoinput") as HTMLInputElement;
const list = document.getElementById("todolist")!;


const todos: Todo[] = readTodo();

form.addEventListener("submit", function (event: SubmitEvent) {
    event.preventDefault();
    
    // can't access input.value if input is declared as a regular HTMLElement because value only exists on HTMLElement input type
    const todoText: string = input.value;
    const todo: Todo = {
        text: todoText,
        completed: false,
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodo();
    input.value = "";
});

function renderTodo(): void {
    list.innerHTML = "";
    
    for(let i: number = 0; i < todos.length; i++) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        li.textContent = todos[i].text;
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = todos[i].completed;
        li.append(checkbox);
        list.append(li);
    }
}

function readTodo(): Todo[] {
    const todoList = localStorage.getItem("todos");
    if(!todoList) {
        return [];
    }
    return JSON.parse(todoList);
}

function completeTodo(): void {
    
}

renderTodo();