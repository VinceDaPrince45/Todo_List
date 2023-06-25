import { projectObject, taskObject } from './project.js';
import { createProjectForm, createTaskForm, moveToProjectForm } from './forms.js';
import { differenceInDays, isToday, format, parseISO } from 'date-fns';


const projects = document.querySelector('.projects');
const referenceProject = document.querySelector('.buttonProject')
const content = document.querySelector('.content');
const cards = document.querySelector('.cards');
const referenceTask = document.querySelector('.buttonTasks');
const container = document.querySelector('.container');

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
            let projectName = document.querySelector('.projectName');
            if (projectName.value !== '') {
                // add input to database
                addToProjects();
                // remove form
                removeForm(projects);
                // update list
                let projectItems = document.querySelectorAll('.projectItem');
                updateSidebar(referenceProject,projectItems);
                projectItems = document.querySelectorAll('.projectItem');
                addProjectListener(projectItems);
            } else {
                projectName.style.cssText = 'border:2px solid red';
            }
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
        addForm(referenceTask,createTaskForm(false));
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
            // buttons to customize tasks
            let buttonsContainer = document.createElement('div');
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete');
            let editBtn = document.createElement('button');
            editBtn.textContent = '...';
            editBtn.classList.add('edit');
            let moveBtn = document.createElement('button');
            moveBtn.textContent = '>';
            moveBtn.classList.add('move');
            moveBtn.style.cssText = 'position:relative';
            buttonsContainer.append(deleteBtn,editBtn,moveBtn);

            div.append(name,description,date,priority,buttonsContainer);
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
        // remove in array
        let cardContainer = document.querySelectorAll('.card');
        let array = Array.from(cardContainer);
        for (const item of array) {
            if (e.target.parentNode.parentNode == item) {
                let idx = array.indexOf(item);
                let itemToRemove = checkActive()[idx];
                removeItemFromArray(itemToRemove);
            }
        } 
        // remove DOM
        cards.removeChild(e.target.parentNode.parentNode);   
    }
}

function removeItemFromArray(item) {
    if (allTasks.includes(item)) {
        allTasks.splice(allTasks.indexOf(item),1)
    }
    if (todayTasks.includes(item)) {todayTasks.splice(todayTasks.indexOf(item),1)}
    if (nextWeekTasks.includes(item)) {nextWeekTasks.splice(nextWeekTasks.indexOf(item),1)}
    if (importantTasks.includes(item)) {importantTasks.splice(importantTasks.indexOf(item),1)}
    for (const project of projectList) {
        if (project.tasks.includes(item)) {project.tasks.splice(project.tasks.indexOf(item),1)}
    }
}


// move into project feature
export function moveIntoProject(e) {
    if (e.target && e.target.classList.contains('move')) {
        // open up div that uses absolute positioning above button
        // iterate through projectList to display options and addeventlisteners
        if (e.target.contains(document.getElementById('form'))) {
            e.target.removeChild(document.getElementById('form'))
        } else {
            e.target.appendChild(moveToProjectForm(projectList));
            let options = document.querySelectorAll('.choice');
            let arrayOptions = Array.from(options);
            for (const option of options) {
                option.addEventListener('click', (e) => {
                    let projectIdx = arrayOptions.indexOf(e.target); 
                    let individualCards = document.querySelectorAll('.card');
                    let arrayCards = Array.from(individualCards);
                    let arrayIdx = arrayCards.indexOf(e.target.parentNode.parentNode.parentNode.parentNode)
                    let task = checkActive()[arrayIdx]; 
                    projectList[projectIdx].tasks.push(task);
                    let moveBtn = document.querySelector('.move');
                    e.target.parentNode.parentNode.removeChild(document.querySelector('.move > #form'))
                })
            }
        }
    }
}

// edit feature
export function editItem(e) {
    if (e.target && e.target.classList.contains('edit')) {
        // create in the middle and blur out surrounding/pressing outside form exits form and does not change cards
        container.appendChild(createTaskForm(true));
        container.addEventListener('click', (e) => {
            onClickOutside(e)
        })
    }
}

function onClickOutside(e) {
    let form = document.querySelector('#form');
    if (!form.contains(e.target)) {
        container.removeChild(form);
        container.removeEventListener('click', (e) => {
            onClickOutside(e)
        })
    }
}

function updateItem() {

}