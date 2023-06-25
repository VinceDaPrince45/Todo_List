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
    let form = document.createElement('div');
    form.setAttribute('id','form');
    
    let name = document.createElement('input');
    name.type = 'text';
    name.classList.add('taskName');
    name.placeholder = 'Enter task name';form

    let description = document.createElement('input');
    description.type = 'text';
    description.classList.add('taskDescription');
    description.placeholder = 'Enter description for task';

    let date = document.createElement('input');
    date.type = 'date';
    date.classList.add('taskDate');

    // let priorityLabel = document.createElement('label');
    // priorityLabel.for = 'priority';
    // priorityLabel.textContent = 'Important?';

    // need to fix this
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
    let cancel = document.createElement('button');
    cancel.classList.add('cancelTask');
    cancel.textContent = 'cancel';
    buttons.append(add,cancel);
    buttons.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1em';

    form.style.cssText = 'display:grid;grid-template-rows:repeat(auto-fit,1fr);gap:1em;justify-content:center';

    form.append(name,description,date,label,buttons);
    return form;
}

export function moveToProjectForm(array) {
    let choices = document.createElement('div');
    choices.id = 'form';
    let instructions = document.createElement('div');
    instructions.textContent = 'Choose a project to move task to';
    instructions.style.cssText = 'font-weight:700';
    choices.appendChild(instructions);
    let warning = document.createElement('div');
    warning.textContent = 'No Projects Available';
    if (array.length == 0) {
        choices.appendChild(warning)
    } else {
        for (const item of array) {
            let choice = document.createElement('div');
            choice.classList.add('choice');
            choice.textContent = item.name;
            choices.appendChild(choice);
        }
    }
    choices.style.cssText = 'position:absolute;bottom:30px;background-color:white;border:1px solid black';
    return choices;
}