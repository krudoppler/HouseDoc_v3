import { completedTasks } from "./data.js";

// Global Variables

let allTasks = [...completedTasks];

// DOM Elements
const overallContainer = document.getElementById("overall-container");

// Event listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.remove) {
    const taskToRemove = e.target.dataset.remove;
    removeTask(taskToRemove);
  }
  console.log(e);
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
    console.log(individualTask);
  });
  return dataHTML;
}

function renderData() {
  const dataDisplay = getData();
  overallContainer.innerHTML = dataDisplay;
}

renderData();

function removeTask(taskToRemove) {
  allTasks.splice(taskToRemove, 1);
  renderData();
}
