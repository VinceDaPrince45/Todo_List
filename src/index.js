import './style.css';
import { evaluateProject, evaluateTask, changeHeader, refreshActive, checkActive, changeTabs } from './dom';

// add project button appends to an empty array/object

// each array item is an object consisting of array of task objects

// add event listener to button to add projects

// functions in index.js will only do stuff related to array/objects

// imported functions will deal with dom manipulation

// create arrays for all tasks, important tasks, and tasks ordered by date

// for each tab add dom changes like for restaurant page

const projectList = [];
const allTasks = [];
const todayTasks = [];
const nextWeekTasks = [];
const importantTasks = [];

const addProject = document.querySelector('.buttonProject');
const addTask = document.querySelector('.buttonTasks');
const tabAllTasks = document.querySelector('#allTasks');
const tabToday = document.querySelector('#today');
const tabNextWeek = document.querySelector('#nextWeek');
const tabImportant = document.querySelector('#important');

let activeArray = allTasks;

addTask.addEventListener('click', () => {
    // add task to array
    activeArray = checkActive(allTasks,todayTasks,nextWeekTasks,importantTasks);
    evaluateTask(allTasks,activeArray);
    // display array based on which tab is active
});

addProject.addEventListener('click', () => {
    evaluateProject(projectList);
});

tabAllTasks.addEventListener('click', (e) => {
    // function
    changeHeader('All Tasks');
    refreshActive(e);
    activeArray = checkActive(allTasks,todayTasks,nextWeekTasks,importantTasks);
    changeTabs(e,activeArray);
})

tabToday.addEventListener('click', (e) => {
    // function
    changeHeader('Today');
    refreshActive(e);
    activeArray = checkActive(allTasks,todayTasks,nextWeekTasks,importantTasks);
    changeTabs(e,activeArray);
})

tabNextWeek.addEventListener('click', (e) => {
    // function
    changeHeader('Next 7 Days');
    refreshActive(e);
    activeArray = checkActive(allTasks,todayTasks,nextWeekTasks,importantTasks);
    changeTabs(e,activeArray);
})

tabImportant.addEventListener('click', (e) => {
    // function
    changeHeader('Important');
    refreshActive(e);
    activeArray = checkActive(allTasks,todayTasks,nextWeekTasks,importantTasks);
    changeTabs(e,activeArray);
});