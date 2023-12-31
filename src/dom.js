import { projectObject, taskObject } from './project.js';
import { createProjectForm, createTaskForm, moveToProjectForm } from './forms.js';
import { differenceInDays, isToday, format } from 'date-fns';


const projects = document.querySelector('.projects');
const referenceProject = document.querySelector('.buttonProject')
const content = document.querySelector('.content');
const cards = document.querySelector('.cards');
const referenceTask = document.querySelector('.buttonTasks');
const container = document.querySelector('.container');

let projectList;
let allTasks;
let todayTasks;
let nextWeekTasks;
let importantTasks;

if (localStorage.getItem('allTasks') || localStorage.getItem('projectList')) {
    projectList = JSON.parse(localStorage.getItem('projectList'));
    allTasks = JSON.parse(localStorage.getItem('allTasks'));
    todayTasks = JSON.parse(localStorage.getItem('todayTasks'));
    nextWeekTasks = JSON.parse(localStorage.getItem('nextWeekTasks'));
    importantTasks = JSON.parse(localStorage.getItem('importantTasks'));
    onStart();
  } else {
    projectList = [];
    allTasks = [];
    todayTasks = [];
    nextWeekTasks = [];
    importantTasks = [];
  }

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
    setStorage();
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
    let originalDate = document.querySelector('.taskDate').value; // change
    let stringDate = originalDate + 'T00:00:00';
    let date= new Date(stringDate.replace(/-/g, '\/').replace(/T.+/, ''))
    let today = new Date();
    let taskPriority = document.querySelector('.priority').checked;
    let taskStatus = false;
    let newTask = new taskObject(taskName.value,taskDescription.value,originalDate,taskPriority,taskStatus);
    // screen
    allTasks.push(newTask);
    if (isToday(date)) {todayTasks.push(newTask)}
    if ((differenceInDays(date,today) >= 0) && (differenceInDays(date,today) < 7)) {nextWeekTasks.push(newTask)}
    if (taskPriority) {importantTasks.push(newTask)}
    if (checkActive() !== allTasks) {checkActive().push(newTask)}
    setStorage();
}

function checkInputs() {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let taskDate = document.querySelector('.taskDate');
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
            // create status
            let status = document.createElement('input');
            status.type = 'checkbox';
            status.classList.add('status');
            if (item.status) {
                status.checked = true;
                div.classList.add('dim');
            };
            let name = document.createElement('div');
            name.textContent = item.name;
            let description = document.createElement('div');
            description.textContent = item.description;
            let date = document.createElement('div');
            let originalDate = item.date;
            let stringDate = originalDate + 'T00:00:00';
            let newDate= new Date(stringDate.replace(/-/g, '\/').replace(/T.+/, ''))
            let formattedDate = format(newDate, 'MMMM dd yyyy');
            date.textContent = formattedDate;
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
            buttonsContainer.style.cssText = 'display:flex;gap:1em;justify-content:center';

            div.append(status,name,description,date,priority,buttonsContainer);
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
        setStorage(); 
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
                    e.target.parentNode.parentNode.removeChild(document.querySelector('.move > #form'))
                })
            }
        }
        setStorage();
    }
}

// edit feature
export function editItem(e) {
    if (e.target && e.target.classList.contains('edit')) {
        let task = returnTask(e);
        // create in the middle and blur out surrounding/pressing outside form exits form and does not change cards
        container.appendChild(createTaskForm(true));
        fillPreviousData(task.name,task.description,task.date,task.priority)
        container.addEventListener('click', onClickOutside);
        let addBtn = document.querySelector('.addTask');
        addBtn.addEventListener('click', () => {
            updateItem(task);
            container.removeChild(document.querySelector('.container > #form'));
            container.removeEventListener('click', onClickOutside);
        })
        let cancelBtn = document.querySelector('.cancelTask');
        cancelBtn.addEventListener('click', () => {
            container.removeChild(document.querySelector('.container > #form'));
            container.removeEventListener('click', onClickOutside);
        })
        setStorage();
    }
}

function onClickOutside(event) {
    let form = document.querySelector('.container > #form');
    if (!form.contains(event.target)) {
        container.removeChild(form);
        container.removeEventListener('click', onClickOutside);
    }
}

function fillPreviousData(name,description,date,priority) {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let taskDate = document.querySelector('.taskDate');
    let taskPriority = document.querySelector('.priority');
    taskName.value = name;
    taskDescription.value = description;
    taskDate.value = date;
    if (priority) {
        taskPriority.checked = true;
    } else {taskPriority.checked = false}
}

function returnTask(e) {
    let individualCards = document.querySelectorAll('.card');
    let arrayCards = Array.from(individualCards);
    let card;
    if (e.target.classList.contains('edit')) {
        card = e.target.parentNode.parentNode;
    } else if (e.target.classList.contains('status')) {
        card = e.target.parentNode;
    }
    if (arrayCards.includes(card)) {
        let activeArrayIdx = arrayCards.indexOf(card);
        return checkActive()[activeArrayIdx];
    }
}

function updateItem(task) {
    let taskName = document.querySelector('.taskName');
    let taskDescription = document.querySelector('.taskDescription');
    let originalDate = document.querySelector('.taskDate').value; // change
    let stringDate = originalDate + 'T00:00:00';
    let date = new Date(stringDate.replace(/-/g, '\/').replace(/T.+/, ''))
    let today = new Date();
    let taskPriority = document.querySelector('.priority').checked;
    let newTask = new taskObject(taskName.value,taskDescription.value,originalDate,taskPriority);
    // in allTasks, splice in and replace w/ new task
    allTasks.splice(allTasks.indexOf(task),1,newTask);
    // for everything else, if it includes original task but new values dont pass screening, remove from task
    // if everything else does include task and new values pass screening, splice w/ new task
    // screen
    if (todayTasks.includes(task)) {
        if (isToday(date)) {
            todayTasks.splice(todayTasks.indexOf(task),1,newTask);
        } else {todayTasks.splice(todayTasks.indexOf(task),1)}
    } else {
        if (isToday(date)) {todayTasks.push(newTask)}
    }
    if (nextWeekTasks.includes(task)) {
        if ((differenceInDays(date,today) >= 0) && (differenceInDays(date,today) < 7)) {
            nextWeekTasks.splice(nextWeekTasks.indexOf(task),1,newTask);
        } else {nextWeekTasks.splice(nextWeekTasks.indexOf(task),1)}
    } else {
        if ((differenceInDays(date,today) >= 0) && (differenceInDays(date,today) < 7)) {
            nextWeekTasks.push(newTask);
        }
    }
    if (importantTasks.includes(task)) {
        if (taskPriority) {
            importantTasks.splice(importantTasks.indexOf(task),1,newTask);
        } else {importantTasks.splice(importantTasks.indexOf(task),1);
        }
    } else {
        if (taskPriority) {importantTasks.push(newTask)};
    }
    for (const project of projectList) {
        if (project.tasks.includes(task)) {
            project.tasks.splice(project.tasks.indexOf(task),1,newTask);
        }
    }
    // if doesnt include task but passes screening, push
    clearDisplay();
    displayActive(checkActive());
}

export function toggleTask(e) {
    // when pressing it, checkmark and fade out the card
    if (e.target.classList.contains('status')) {
        // check status of checkbox
        let task;
        // console.log(e.target.parentNode)
        if (document.querySelector('.status').checked == true) {
            task = returnTask(e);
            task.status = document.querySelector('.status').checked;
            e.target.parentNode.classList.add('dim');
        } else {
            task = returnTask(e);
            task.status = document.querySelector('.status').checked;
            e.target.parentNode.classList.remove('dim');
        }
        setStorage();
    }
    // when pressed again, card returns to normal

    // when e.target.classList.contains('status')
        // target that task, change item.status to the opposite of what it was originally
        // if status.checked = true, have the left border change color to green
        // original left border color will be something neutral
        // splice into all tasks and change that task
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function setStorage() {
    localStorage.clear();
    localStorage.setItem('projectList',JSON.stringify(projectList));
    localStorage.setItem('allTasks',JSON.stringify(allTasks));
    localStorage.setItem('todayTasks',JSON.stringify(todayTasks));
    localStorage.setItem('nextWeekTasks',JSON.stringify(nextWeekTasks));
    localStorage.setItem('importantTasks',JSON.stringify(importantTasks));
}

function onStart() {
    for (const project of projectList) {
        let div = document.createElement('div');
        div.classList.add('projectItem');
        div.textContent = project.name;
        document.querySelector('.buttonProject').before(div);
    }
    displayActive(checkActive());
}