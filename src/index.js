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
        referenceProject.before(createProjectForm());
        // access the button inside form and add event listener to submit
        let addProject = document.querySelector('.addProject');
        addProject.addEventListener('click', () => {
            // add input to database
            let projectName = document.querySelector('.projectName');
            let newProject = new projectObject(projectName.value);
            projectList.push(newProject);
            console.log(projectList);
            // remove form
            projects.removeChild(document.querySelector('#form'));
            let projectItems = document.querySelectorAll('.projectItem');
            for (const item of projectItems) {
                projects.removeChild(item);
            }
            for (const item of projectList) {
                let div = document.createElement('div');
                div.classList.add('projectItem');
                div.textContent = item.name;
                referenceProject.before(div);
            };
        })
        // access the cancel button inside form and delete form when pressed
        let cancelProject = document.querySelector('.cancelProject');
        cancelProject.addEventListener('click', () => {
            projects.removeChild(document.querySelector('#form'));
        })
        // add name of project to sidebar
        referenceProject.before()
    }
}

function evalulateTask() {
    if (!content.contains(document.querySelector('#form'))) {
        // add form before button
        referenceTask.before(createTaskForm());
        // access button insdie form and add event listener to submit
        let addTask = document.querySelector('.addTask');
        addTask.addEventListener('click', () => {
            // add input to database
            let taskName = document.querySelector('.taskName');
            let taskDescription = document.querySelector('.taskDescription');
            let taskDate = document.querySelector('.taskDate');
            let newTask = new taskObject(taskName.value,taskDescription.value,taskDate.value);
            allTasks.push(newTask);
            console.log(allTasks);
            // remove form
            content.removeChild(document.querySelector('#form'));
            // if prject tab is active, also add to the projects object tasks property
        })
        // access cancel button inside form and delete when pressed
        let cancelTask = document.querySelector('.cancelTask');
        cancelTask.addEventListener('click', () => {
            content.removeChild(document.querySelector('#form'));
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
