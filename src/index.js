import './style.css';
import { createProjectForm, createTaskForm } from './forms.js';
import { addForm, updateList, addToProjects, removeForm, addToAllTasks } from './dom';

// add project button appends to an empty array/object

// each array item is an object consisting of array of task objects

// add event listener to button to add projects

// functions in index.js will only do stuff related to array/objects

// imported functions will deal with dom manipulation

// create arrays for all tasks, important tasks, and tasks ordered by date

// for each tab add dom changes like for restaurant page

const projectList = [];
const allTasks = [];
const importantTasks = [];
const dateTasks = [];


const projects = document.querySelector('.projects');
const referenceProject = document.querySelector('.buttonProject')
const addProject = document.querySelector('.buttonProject');
const addTask = document.querySelector('.buttonTasks');
const content = document.querySelector('.content');
const referenceTask = document.querySelector('.buttonTasks');

function evaluateProject() {
    if (!projects.contains(document.querySelector('#form'))) {
        // add form before the button
        addForm(referenceProject,createProjectForm());
        // access the button inside form and add event listener to submit
        let addProject = document.querySelector('.addProject');
        addProject.addEventListener('click', () => {
            // add input to database
            addToProjects(projectList);
            // remove form
            removeForm(projects);
            // update list
            let projectItems = document.querySelectorAll('.projectItem');
            updateList(projects,referenceProject,projectItems,projectList);
        })
        // access the cancel button inside form and delete form when pressed
        let cancelProject = document.querySelector('.cancelProject');
        cancelProject.addEventListener('click', () => {
            removeForm(projects);
        })
    }
}

function evalulateTask() {
    if (!content.contains(document.querySelector('#form'))) {
        // add form before button
        addForm(referenceTask,createTaskForm());
        // access button inside form and add event listener to submit
        let addTask = document.querySelector('.addTask');
        addTask.addEventListener('click', () => {
            // add input to database
            addToAllTasks(allTasks);
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

addTask.addEventListener('click', () => {
    evalulateTask();
})

addProject.addEventListener('click', () => {
    evaluateProject();

})

// add buttons to the created projects that adds "active" class to them
