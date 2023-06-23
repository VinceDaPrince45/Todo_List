import { handleSubmit } from "./dom";

export function createProjectForm() {
    let form = document.createElement('div');
    form.setAttribute('id','form');

    let name = document.createElement('input');
    name.type = 'text';
    name.classList.add('projectName');
    name.placeholder = 'Enter project name';

    let buttons = document.createElement('div');
    let add = document.createElement('button');
    add.classList.add('addProject');
    add.textContent = 'add';
    let cancel = document.createElement('button');
    cancel.classList.add('cancelProject');
    cancel.textContent = 'cancel';
    buttons.append(add,cancel);
    buttons.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1em';

    form.append(name,buttons);
    
    return form;
}

export function createTaskForm() {
    let form = document.createElement('form');
    form.setAttribute('id','form');
    form.onsubmit = function(event) {
        handleSubmit();
        event.preventDefault();
    }
   
    let name = document.createElement('input');
    name.type = 'text';
    name.id = 'taskName';
    name.classList.add('taskName');
    name.placeholder = 'Enter task name';
    name.setAttribute("required", "");

    let description = document.createElement('input');
    description.type = 'text';
    description.classList.add('taskDescription');
    description.id = 'taskDescription'
    description.placeholder = 'Enter description for task';
    description.setAttribute("required", "");

    let date = document.createElement('input');
    date.type = 'date';
    date.id = 'taskDate';
    date.classList.add('taskDate');
    date.setAttribute("required", "");

    let priority = document.createElement('input');
    priority.type = 'checkbox';
    priority.classList.add('priority');
    priority.id = 'taskPriority';

    let label = document.createElement('label');
    label.htmlFor = "taskPriority";
    label.textContent = "Important";
    label.appendChild(priority);

    let buttons = document.createElement('div');
    let add = document.createElement('button');
    add.classList.add('addTask');
    add.textContent = 'add';
    add.type = 'submit';
    let cancel = document.createElement('button');
    cancel.classList.add('cancelTask');
    cancel.textContent = 'cancel';
    buttons.append(add,cancel);
    buttons.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1em';

    form.style.cssText = 'display:grid;grid-template-rows:repeat(auto-fit,1fr);gap:1em;justify-content:center';

    form.append(name,description,date,label,buttons);
    return form;
}