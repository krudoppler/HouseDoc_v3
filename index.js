import { utilities } from "./data.js";

// Global Variables
let allUtilities = [...utilities];

// DOM Elements
const taskListConstainer = document.getElementById("list-container");
const searchSubmitBtn = document.getElementById("search-button");
const searchInputValue = document.getElementById("search-input");
const searchOutput = document.getElementById("search-output");

// Event listeners
searchSubmitBtn.addEventListener("click", function () {
  const searchValue = searchInputValue.value;

  const filteredUtilities = allUtilities.filter((utility) =>
    utility.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  

  if (searchValue === "") {
    searchOutput.innerHTML = "Please enter a search term.";
    return;
  }

  if (filteredUtilities.length === 0) {
    searchOutput.innerHTML = "No matches found.";
  } else {
    filteredUtilities.forEach((utility) => {
      searchOutput.innerHTML += `
      The search result matched ID: ${utility.id}
    `;
    });
  }
});

// Functions

function getUtilitiesData() {
  let utilityData = "";
  allUtilities.forEach((utility, index) => {
    utilityData += `
    <div id="utility-container">
      <div> ${index + 1}: ${utility.name} <br>
      Last Serviced: ${utility.lastServiceDate}<br>
      Service Interval: ${utility.serviceInterval} <br>
      </div>  
      <div class="narrow-divider"></div>
    </div>
    `;
  });
  return utilityData;
}

function renderUtilities() {
  let returnedUtilityData = getUtilitiesData();
  taskListConstainer.innerHTML = returnedUtilityData;
}

renderUtilities();
