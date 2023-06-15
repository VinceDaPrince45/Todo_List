import './style.css';
import { createProjectForm } from './forms.js';

// add project button appends to an empty array/object

// each array item is an object consisting of array of task objects

// add event listener to button to add projects

// functions in index.js will only do stuff related to array/objects

// imported functions will deal with dom manipulation

const projectList = [];


const projects = document.querySelector('.projects');
const referenceNode = document.querySelector('.project');
const addProject = document.querySelector('button');
addProject.addEventListener('click', () => {
    // function to show a form and append result to list
    // import functions 
    if (!projects.contains(document.querySelector('#form'))) {
        referenceNode.before(createProjectForm());
        let addProject = document.querySelector('.addProject')
        addProject.addEventListener('click', () => {
            let projectName = document.querySelector('.projectName');
            projectList.push(projectName.value);
            console.log(projectList);
            // need to convert projectName into object through constructor
        })
        let cancelProject = document.querySelector('.cancelProject');
        cancelProject.addEventListener('click', () => {
            projects.removeChild(document.querySelector('#form'));
        })
    }
})

