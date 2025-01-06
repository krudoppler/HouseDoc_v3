import { completedTasks } from "./data.js";

// Global Variables

let allTasks = [...completedTasks];
let nextId = allTasks.length ? allTasks[allTasks.length - 1].id + 1 : 1;
let editingTaskIndex = null;

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

  if (editingTaskIndex !== null) {
    // Save changes to the task
    allTasks[editingTaskIndex] = {
      ...allTasks[editingTaskIndex],
      task: addedTaskName.value,
      date: addedTaskDate.value,
    };
    editingTaskIndex = null; // Reset editing state
    taskSubmitBtn.textContent = "Submit"; // Reset button text
  } else {
    // Add new task
    addTaskToAllTasks(addedTaskName.value, addedTaskDate.value);
  }

  // Clear form and re-render
  addedTaskName.value = "";
  addedTaskDate.value = "";
  renderData();
});

document.addEventListener("click", function (e) {
  if (e.target.dataset.edit) {
    const taskToEdit = e.target.dataset.edit;
    editTask(taskToEdit)
  }
});

// Functions
function getData() {
  let dataHTML = "";
  allTasks.forEach((individualTask, index) => {
    dataHTML += `
    <div class="task-name">
      ${individualTask.task} |
      ${individualTask.date} |
      <button id="remove-btn" class="remove-btn" data-remove="${index}"> Remove </button> |
      <button id="edit-btn" class="edit-btn" data-edit="${index}"> Edit </button> |

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
    date: addedTaskDate,
  });
  nextId++;
  renderData();
  console.log(allTasks);
}

function editTask(taskToEdit) {
  editingTaskIndex = taskToEdit;
  addedTaskName.value = allTasks[taskToEdit].task;
  addedTaskDate.value = allTasks[taskToEdit].date;
  taskSubmitBtn.textContent = "Save Changes";
}