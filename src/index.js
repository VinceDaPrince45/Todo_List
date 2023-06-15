import './style.css';
import { createProjectForm } from './forms.js';

// add project button appends to an empty array/object

// each array item is an object consisting of array of task objects

// add event listener to button to add projects

// functions in index.js will only do stuff related to array/objects

// imported functions will deal with dom manipulation

const projectList = [];



const referenceNode = document.querySelector('.project');
const addProject = document.querySelector('button');
addProject.addEventListener('click', () => {
    // function to show a form and append result to list
    // import functions 
    referenceNode.before(createProjectForm());
})