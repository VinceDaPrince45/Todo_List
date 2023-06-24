import { projectObject, taskObject } from './project.js';
import { createProjectForm, createTaskForm } from './forms.js';
import { differenceInDays, isToday, format, parseISO } from 'date-fns';


const projects = document.querySelector('.projects');
const referenceProject = document.querySelector('.buttonProject')
const content = document.querySelector('.content');
const cards = document.querySelector('.cards');
const referenceTask = document.querySelector('.buttonTasks');

const projectList = [];
const allTasks = [];
const todayTasks = [];
const nextWeekTasks = [];
const importantTasks = [];

let activeProject;

// PROJECTS

export function evaluateProject() {
    if (!projects.contains(document.querySelector('#form'))) {
        // add form before the button
        addForm(referenceProject,createProjectForm());
        // access the button inside form and add event listener to submit
        let addProject = document.querySelector('.addProject');
        addProject.addEventListener('click', () => {
            // add input to database
            addToProjects();
            // remove form
            removeForm(projects);
            // update list
            let projectItems = document.querySelectorAll('.projectItem');
            updateSidebar(referenceProject,projectItems);
            projectItems = document.querySelectorAll('.projectItem');
            addProjectListener(projectItems);
        })
        // access the cancel button inside form and delete form when pressed
        let cancelProject = document.querySelector('.cancelProject');
        cancelProject.addEventListener('click', () => {
            removeForm(projects);
        })
    }
}

// add new form before button
function addForm(referencePoint,form) {
    referencePoint.before(form)
}

// remove form
function removeForm(parent) {
    parent.removeChild(document.querySelector('#form'));
}

// function to add inputs to data array

function addToProjects() {
    let projectName = document.querySelector('.projectName');
    let newProject = new projectObject(projectName.value);
    projectList.push(newProject);
}

// function to update names on sidebar

function updateSidebar(referencepoint,mainitems) {
    for (const item of mainitems) {
        projects.removeChild(item);
    }
    for (const item of projectList) {
        let div = document.createElement('div');
        div.classList.add('projectItem');
        div.textContent = item.name;
        referencepoint.before(div);
    }
}

// need to add event listener to each project

function addProjectListener(domArray) {
    let arr = Array.from(domArray);
    for (const item of arr) {
        item.addEventListener('click', (event) => {
            changeHeader(item.textContent);
            refreshActive(event)
            activeProject = projectList[arr.indexOf(item)].tasks;
            clearDisplay();
            displayActive(activeProject);
            if (content.contains(document.querySelector('#form'))) {
                removeForm(content);
            }
        })
    }
}

// TASKS

// function to add task input values to allTask array

function addToArray() {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let stringDate = document.querySelector('.taskDate').value + 'T00:00:00';
    let date= new Date(stringDate.replace(/-/g, '\/').replace(/T.+/, ''))
    let formattedDate = format(date, 'MMMM dd yyyy');
    let today = new Date();
    let taskPriority = document.querySelector('.priority').checked;
    let newTask = new taskObject(taskName.value,taskDescription.value,formattedDate,taskPriority);
    // screen
    allTasks.push(newTask);
    if (isToday(date)) {todayTasks.push(newTask)}
    if ((differenceInDays(date,today) >= 0) && (differenceInDays(date,today) < 7)) {nextWeekTasks.push(newTask)}
    if (taskPriority) {importantTasks.push(newTask)}
    if (checkActive() !== allTasks) {checkActive().push(newTask)}
}

function checkInputs() {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let taskDate = document.querySelector('.taskDate');
    let formattedDate = new Date(taskDate.value);
    if ((taskName.value !== '') && taskDescription.value !== '' && (taskDate.value !== '')) {
        return true; //move on with adding to array
    } else return false; //highlight missing inputs with red border
}

export function evaluateTask(specificlist) {
    if (!content.contains(document.querySelector('#form'))) {
        addForm(referenceTask,createTaskForm());
        let addTask = document.querySelector('.addTask');
        addTask.addEventListener('click', () => {
            // check if all required inputs are present
            if (checkInputs()) {
                // add input to database
                addToArray()
                // update display
                removeForm(content);
                clearDisplay();
                displayActive(specificlist); // need to add parameter
            } else {
                let taskName = document.querySelector('.taskName');
                let taskDescription = document.querySelector('.taskDescription');
                let taskDate = document.querySelector('.taskDate');
                if (taskName.value == '') {
                    taskName.style.cssText = 'border:solid red';
                }
                if (taskDescription.value == '') {
                    taskDescription.style.cssText = 'border:solid red';
                }
                if (taskDate.value == '') {
                    taskDate.style.cssText = 'border:solid red';
                }
            }
        })
        // access cancel button inside form and delete when pressed
        let cancelTask = document.querySelector('.cancelTask');
        cancelTask.addEventListener('click', () => {
            removeForm(content);
        })
    }
}

export function changeHeader(phrase) {
    let header = document.querySelector('.content > .header');
    header.textContent = phrase;
}

export function changeTabs(event,mainlist) {
    if (event.target && (event.target.classList.contains('hometab') || event.target.classList.contains('projectItem')) && event.target.classList.contains('active')) {
        // need to delete all previous content
        clearDisplay();
        // if event.target id is all tasks,iterate through mainlist and display each property of task
        displayActive(mainlist);
        if (content.contains(document.querySelector('#form'))) {
            removeForm(content);
        }
    }
}

// when clicking addTask, look for whats active then assign a variable the array that will be accessed

export function refreshActive(event) {
    let tabs = document.querySelectorAll('.hometab');
    let projectItems = document.querySelectorAll('.projectItem');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    for (const item of projectItems) {
        item.classList.remove('active');
    }
    if (event.target && (event.target.classList.contains('hometab') || event.target.classList.contains('projectItem'))) {
        event.target.classList.add('active');
    }
}

// function takes in arrays from main js file and returns the one thats needed after checking active tab

export function checkActive() {
    let tabs = document.querySelectorAll('.hometab');
    let projectItems = document.querySelectorAll('.projectItem');
    for (const tab of tabs) {
        if (tab.classList.contains('active')) {
            switch (tab.getAttribute('id')) {
                case 'allTasks':
                    return allTasks;
                case 'today' :
                    return todayTasks;
                case 'nextWeek':
                    return nextWeekTasks;
                case 'important':
                    return importantTasks;
            }
        }
    }
    for (const item of projectItems) {
        if (item.classList.contains('active')) {
            return activeProject;
        }
    }
}

function displayActive(array) {
    //  remove previous content
    // iterate through array and add as cards
    for (const item of array) {
            let div = document.createElement('div');
            div.classList.add('card');
            let name = document.createElement('div');
            name.textContent = item.name;
            let description = document.createElement('div');
            description.textContent = item.description;
            let date = document.createElement('div');
            date.textContent = item.date;
            let priority = document.createElement('div');
            if (item.priority == true) {
                priority.textContent = 'important'
            } else {priority.textContent = 'not important'}
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete');
            div.append(name,description,date,priority,deleteBtn);
            cards.appendChild(div);
    }
}

// remove previous content

function clearDisplay() {
    let cardContainer = document.querySelectorAll('.card');
    for (const card of cardContainer) {
        cards.removeChild(card);
    }
}

// delete item

export function deleteItem(e) {
    if (e.target && e.target.classList.contains('delete')) {
        console.log(e.target.parentNode);

        // remove in array
        let cardContainer = document.querySelectorAll('.card');
        let array = Array.from(cardContainer);
        for (const item of array) {
            if (e.target.parentNode == item) {
                let idx = array.indexOf(item);
                let itemToRemove = checkActive()[idx];
                console.log(allTasks);
                removeItemFromArray(itemToRemove);
                console.log(allTasks);
            }
        } 
        // remove DOM
        cards.removeChild(e.target.parentNode);
        
    }
}

function removeItemFromArray(item) {
    if (allTasks.includes(item)) {
        allTasks.splice(allTasks.indexOf(item),1)
        console.log('deleted')
    }
    if (todayTasks.includes(item)) {todayTasks.splice(todayTasks.indexOf(item),1)}
    if (nextWeekTasks.includes(item)) {nextWeekTasks.splice(nextWeekTasks.indexOf(item),1)}
    if (importantTasks.includes(item)) {importantTasks.splice(importantTasks.indexOf(item),1)}
    for (const project of projectList) {
        if (project.tasks.includes(item)) {project.tasks.splice(project.tasks.indexOf(item),1)}
    }
}