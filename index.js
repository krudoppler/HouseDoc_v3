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


//DOM Variables
let bathroomValue = document.getElementById("bathroom-value")
let bathroomBtn = document.getElementById("save-bathroom")
let bathroomOutput = document.getElementById("bathroom-output")
let bathroomDeleteBtn = document.getElementById("delete-bathroom")


// Database Snapshot
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if(snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const bathroomsInDB = Object.values(snapshotValues)
        renderBathrooms(bathroomsInDB)
    }

})


// Event listeners
bathroomBtn.addEventListener("click", saveBathroomsInDB)



// Functions
function saveBathroomsInDB() {
    let bathroomCount = bathroomValue.value 
    push(referenceInDB, bathroomCount) 
    
}

function renderBathrooms(bathroomsInDB){
    bathroomOutput.innerHTML = `Bathrooms: ${bathroomsInDB.join(" ")}`
}

bathroomDeleteBtn.addEventListener("click", function(){
    remove(referenceInDB)
    bathroomOutput.innerHTML = "Bathrooms: "
})
