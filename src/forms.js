export function createProjectForm() {
    let form = document.createElement('div');
    form.classList.add('form');

    let name = document.createElement('input');
    name.type = 'text';
    name.classList.add('projectForm');
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