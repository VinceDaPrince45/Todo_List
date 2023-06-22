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
function addToArray(list) {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let taskDate = document.querySelector('.taskDate');
    let newTask = new taskObject(taskName.value,taskDescription.value,taskDate.value);
    list.push(newTask);
}

export function evaluateTask(mainlist,specificlist) {
    if (!content.contains(document.querySelector('#form'))) {
        // add form before button
        addForm(referenceTask,createTaskForm());
        // access button inside form and add event listener to submit
        let addTask = document.querySelector('.addTask');
        addTask.addEventListener('click', () => {
            // add input to database
            if (mainlist == specificlist) {
                addToArray(mainlist);
            } else {
                addToArray(mainlist);
                addToArray(specificlist);
            }
            // remove form
            removeForm(content);
            // update display
            displayActive(specificlist);

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
    
// for each tab add dom changes like for restaurant page

// when addTask is pressed, find which tab is active and add to the array accordingly

export function changeHeader(phrase) {
    let header = document.querySelector('.content > .header');
    header.textContent = phrase;
}

// if (e.target && e.target.classList.contains('hometab')) {
//     e.target.classList.add('active');
// }

export function changeTabs(event,mainlist) {
    if (event.target && event.target.classList.contains('hometab') && event.target.classList.contains('active')) {
        // need to delete all previous content
        clearDisplay();
        // if event.target id is all tasks,iterate through mainlist and display each property of task
        for (const item of mainlist) {
            let div = document.createElement('div');
            div.classList.add('card');
            let name = document.createElement('div');
            name.textContent = item.name;
            let description = document.createElement('div');
            description.textContent = item.description;
            let date = document.createElement('div');
            date.textContent = item.date;
            let priority = document.createElement('div');
            priority.textContent = item.priority;
            div.append(name,description,date,priority);
            content.appendChild(div);
        }
    }
}

// when clicking addTask, look for whats active then assign a variable the array that will be accessed

export function refreshActive(event) {
    let tabs = document.querySelectorAll('.hometab');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    if (event.target && event.target.classList.contains('hometab')) {
        event.target.classList.add('active');
    }
}

export function addToList(listAll,specificList,taskObject) {
    let tabs = document.querySelectorAll('.hometab');
    for (const tab of tabs) {
        if (tab.classList.contains('active')) {
            listAll.push(taskObject);
            specificList.push(taskObject);
        }
    }
}

// function takes in arrays from main js file and returns the one thats needed after checking active tab

export function checkActive(arrayOne,arrayTwo,arrayThree,arrayFour) {
    let tabs = document.querySelectorAll('.hometab');
    for (const tab of tabs) {
        if (tab.classList.contains('active')) {
            switch (tab.getAttribute('id')) {
                case 'allTasks':
                    return arrayOne;
                case 'today' :
                    return arrayTwo;
                case 'nextWeek':
                    return arrayThree;
                case 'important':
                    return arrayFour;
            }
        }
    }
}

export function displayActive(array) {
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
            priority.textContent = item.priority;
            div.append(name,description,date,priority);
            content.appendChild(div);
    }
}


// remove previous content

function clearDisplay() {
    let cards = document.querySelectorAll('.card');
    for (const card of cards) {
        content.removeChild(card);
    }
}