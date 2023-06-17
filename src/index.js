import './style.css';
import { evaluateProject, evalulateTask } from './dom';

// add project button appends to an empty array/object

// each array item is an object consisting of array of task objects

// add event listener to button to add projects

// functions in index.js will only do stuff related to array/objects

// imported functions will deal with dom manipulation

// create arrays for all tasks, important tasks, and tasks ordered by date

// for each tab add dom changes like for restaurant page

const projectList = [];
const allTasks = [];

const addProject = document.querySelector('.buttonProject');
const addTask = document.querySelector('.buttonTasks');
const tabAllTasks = document.querySelector('.allTasks');
const tabToday = document.querySelector('.today');
const tabNextWeek = document.querySelector('.nextWeek');
const tabImportant = document.querySelector('.important');

addTask.addEventListener('click', () => {
    evalulateTask(allTasks);
});

addProject.addEventListener('click', () => {
    evaluateProject(projectList);

});

tabAllTasks.addEventListener('click',
// function
)

tabToday.addEventListener('click',
// function
)

tabNextWeek.addEventListener('click',
// function
)

tabImportant.addEventListener('click',
// function
)

// add buttons to the created projects that adds "active" class to them
