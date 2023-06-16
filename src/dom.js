import { projectObject } from './project.js';
import { taskObject } from './project.js';
import { createProjectForm, createTaskForm } from './forms.js';

const projects = document.querySelector('.projects');
const referenceProject = document.querySelector('.buttonProject')
const content = document.querySelector('.content');
const referenceTask = document.querySelector('.buttonTasks');

// PROJECTS

// add new form before button
function addForm(referencePoint,form) {
    referencePoint.before(form)
}

// remove form
function removeForm(parent) {
    parent.removeChild(document.querySelector('#form'));
}

// access button inside form and add event listener to submit

function accessAdd(className) {
    let add = document.querySelector(`.${className}`);
    add.addEventListener('click',)
}

// function to add inputs to data array
function addToProjects(mainlist) {
    let projectName = document.querySelector('.projectName');
    let newProject = new projectObject(projectName.value);
    mainlist.push(newProject);
    console.log(mainlist);
}

// function to update names on sidebar
function updateList(parent,referencepoint,mainitems,mainlist) {
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

export function evaluateProject(mainlist) {
    if (!projects.contains(document.querySelector('#form'))) {
        // add form before the button
        addForm(referenceProject,createProjectForm());
        // access the button inside form and add event listener to submit
        let addProject = document.querySelector('.addProject');
        addProject.addEventListener('click', () => {
            // add input to database
            addToProjects(mainlist);
            // remove form
            removeForm(projects);
            // update list
            let projectItems = document.querySelectorAll('.projectItem');
            updateList(projects,referenceProject,projectItems,mainlist);
        })
        // access the cancel button inside form and delete form when pressed
        let cancelProject = document.querySelector('.cancelProject');
        cancelProject.addEventListener('click', () => {
            removeForm(projects);
        })
    }
}

// TASKS

// function to add task input values to allTask array
function addToAllTasks(mainlist) {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let taskDate = document.querySelector('.taskDate');
    let newTask = new taskObject(taskName.value,taskDescription.value,taskDate.value);
    mainlist.push(newTask);
    console.log(mainlist);
}

export function evalulateTask(mainlist) {
    if (!content.contains(document.querySelector('#form'))) {
        // add form before button
        addForm(referenceTask,createTaskForm());
        // access button inside form and add event listener to submit
        let addTask = document.querySelector('.addTask');
        addTask.addEventListener('click', () => {
            // add input to database
            addToAllTasks(mainlist);
            // remove form
            removeForm(content);
            // if prject tab is active, also add to the projects object tasks property
        })
        // access cancel button inside form and delete when pressed
        let cancelTask = document.querySelector('.cancelTask');
        cancelTask.addEventListener('click', () => {
            removeForm(content);
        })
    }
}

// each tab on sidebar brings different array to view

// add event listener to each tab

// all tasks views allTasks array

// today goes through allTasks array and sees which task.date == today

// next 7 days goes through allTasks array and sees which tasks have task.date < today + 7 days

// important goes through allTasks and sees which tasks have task.priority == 'important'

// pressing on individual projects on sidebar brings up projectList and iterates through project.tasks
    // add event listener to sidebar
    // if e.target.classList.contains('project') or wtv the classname was
    // return the data-name of the project, which should be name of project and find the index through projectList
    