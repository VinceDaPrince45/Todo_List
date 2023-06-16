import { projectObject } from './project.js';
import { taskObject } from './project.js';

// PROJECTS

// add new form before button
export function addForm(referencePoint,form) {
    referencePoint.before(form)
}

// remove form
export function removeForm(parent) {
    parent.removeChild(document.querySelector('#form'));
}

// access button inside form and add event listener to submit

export function accessAdd(className) {
    let add = document.querySelector(`.${className}`);
    add.addEventListener('click',)
}

// function to add inputs to data array
export function addToProjects(mainlist) {
    let projectName = document.querySelector('.projectName');
    let newProject = new projectObject(projectName.value);
    mainlist.push(newProject);
    console.log(mainlist);
}

// function to update names on sidebar
export function updateList(parent,referencepoint,mainitems,mainlist) {
    // delete all alements and readd name of projects from array to sidebar
    for (const item of mainitems) {
        parent.removeChild(item);
    }
    for (const item of mainlist) {
        let div = document.createElement('div');
        div.classList.add('projectItem');
        div.textContent = item.name;
        referencepoint.before(div);
    }
}

// TASKS

// function to add task input values to allTask array
export function addToAllTasks(mainlist) {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let taskDate = document.querySelector('.taskDate');
    let newTask = new taskObject(taskName.value,taskDescription.value,taskDate.value);
    mainlist.push(newTask);
    console.log(mainlist);
}