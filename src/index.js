import './style.css';
import { createProjectForm, createTaskForm } from './forms.js';
import { projectObject } from './project.js';
import { taskObject } from './project.js';

// add project button appends to an empty array/object

// each array item is an object consisting of array of task objects

// add event listener to button to add projects

// functions in index.js will only do stuff related to array/objects

// imported functions will deal with dom manipulation

// create arrays for all tasks, important tasks, and tasks ordered by date

const projectList = [];
const allTasks = [];
const importantTasks = [];
const dateTasks = [];


const projects = document.querySelector('.projects');
const referenceProject = document.querySelector('.buttonProject')
const addProject = document.querySelector('.buttonProject');

addProject.addEventListener('click', () => {
    if (!projects.contains(document.querySelector('#form'))) {
        referenceProject.before(createProjectForm());
        let addProject = document.querySelector('.addProject');
        addProject.addEventListener('click', () => {
            let projectName = document.querySelector('.projectName');
            let newProject = new projectObject(projectName.value);
            projectList.push(newProject);
            console.log(projectList);
            projects.removeChild(document.querySelector('#form'));
            // need to convert projectName into object through constructor
        })
        let cancelProject = document.querySelector('.cancelProject');
        cancelProject.addEventListener('click', () => {
            projects.removeChild(document.querySelector('#form'));
        })
    }
})

const addTask = document.querySelector('.buttonTasks');
const content = document.querySelector('.content')
const referenceTask = document.querySelector('.buttonTasks')

addTask.addEventListener('click', () => {
    if (!content.contains(document.querySelector('#form'))) {
        referenceTask.before(createTaskForm());
        let addTask = document.querySelector('.addTask');
        addTask.addEventListener('click', () => {
            let taskName = document.querySelector('.taskName');
            let taskDescription = document.querySelector('.taskDescription');
            let taskDate = document.querySelector('.taskDate');
            let newTask = new taskObject(taskName.value,taskDescription.value,taskDate.value);
            allTasks.push(newTask);
            console.log(allTasks);
            content.removeChild(document.querySelector('#form'));
            // if prject tab is active, also add to the projects object tasks property
        })
        let cancelTask = document.querySelector('.cancelTask');
        cancelTask.addEventListener('click', () => {
            content.removeChild(document.querySelector('#form'));
        })
    }
})
