export function createProjectForm() {
    let form = document.createElement('div');
    let name = document.createElement('input');
    name.type = 'text';
    name.classList.add('projectForm');
    name.placeholder = 'Enter project name';
    form.append(name);
    
    return form;
}