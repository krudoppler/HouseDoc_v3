import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getDatabase, 
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://housedocmvp-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "bathrooms")
const referenceApplianceInDB = ref(database, "appliances")


//DOM Variables
let bathroomValue = document.getElementById("bathroom-value")
let bathroomBtn = document.getElementById("save-bathroom")
let bathroomOutput = document.getElementById("bathroom-output")
let bathroomDeleteBtn = document.getElementById("delete-bathroom")

let applianceValue = document.getElementById("appliance-type")
let applianceBtn = document.getElementById("save-appliance")
let applianceOutput = document.getElementById("appliance-output")
let applianceDeleteBtn = document.getElementById("delete-appliance")


// Database Snapshot
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if(snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const bathroomsInDB = Object.values(snapshotValues)
        renderBathrooms(bathroomsInDB)
    }

})

onValue(referenceApplianceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if(snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const appliancesInDB = Object.values(snapshotValues)
        renderAppliances(appliancesInDB)
    }

})


// Event listeners
bathroomBtn.addEventListener("click", saveBathroomsInDB)
applianceBtn.addEventListener("click", saveAppliancesinDB)



// Functions
function saveBathroomsInDB() {
    let bathroomCount = bathroomValue.value 
    push(referenceInDB, bathroomCount) 
}

function saveAppliancesinDB() {
    let applianceVar = applianceValue.value
    push(referenceApplianceInDB, applianceVar)
}

function renderBathrooms(bathroomsInDB){
    bathroomOutput.innerHTML = `Bathrooms: ${bathroomsInDB.join(" ")}`
}

function renderAppliances(appliancesInDB){
    applianceOutput.innerHTML = `Appliances: ${appliancesInDB.join(" ")}`
}

bathroomDeleteBtn.addEventListener("click", function(){
    remove(referenceInDB)
    bathroomOutput.innerHTML = "Bathrooms: "
})

applianceDeleteBtn.addEventListener("click", function(){
    remove(referenceApplianceInDB)
    applianceOutput.innerHTML = "Appliances: "
})
