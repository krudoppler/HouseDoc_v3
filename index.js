import { completedTasks } from "./data.js";

// Global Variables

let allTasks = [...completedTasks];
let nextId = allTasks.length ? allTasks[allTasks.length - 1].id + 1 : 1;

// DOM Elements
const listContainer = document.getElementById("list-container");
const taskSubmitBtn = document.getElementById("submit-task");
const addedTaskName = document.getElementById("task-name");
const addedTaskDate = document.getElementById("task-date");

// Event listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.remove) {
    const taskToRemove = e.target.dataset.remove;
    removeTask(taskToRemove);
  }
});

taskSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTaskToAllTasks(addedTaskName.value, addedTaskDate.value);
});

// Functions
function getData() {
  let dataHTML = "";
  allTasks.forEach((individualTask, index) => {
    dataHTML += `
    <div class="task-name">
      ${individualTask.task} | ${individualTask.date} | <button id="remove-btn" class="remove-btn" data-remove="${index}"> Remove </button>
    </div>
    `;
  });
  return dataHTML;
}

function renderData() {
  const dataDisplay = getData();
  listContainer.innerHTML = dataDisplay;
}

renderData();

function removeTask(taskToRemove) {
  allTasks.splice(taskToRemove, 1);
  renderData();
}

function addTaskToAllTasks(addedTaskName, addedTaskDate) {
  allTasks.push({ 
    id: nextId,
    task: addedTaskName,
    date: addedTaskDate });
  nextId++
  renderData();
  console.log(allTasks)
}

