


let bathroomNum = document.getElementById("bathroom-value")
let bathroomsBtn = document.getElementById("save-bathroom")
let bathroomOutput = document.getElementById("bathroom-output")



function saveBathroomNumber(){
    localStorage.setItem("bathrooms", JSON.stringify(bathroomNum.value))
    const bathrooms = JSON.parse(localStorage.getItem("bathrooms"))
    bathroomOutput.innerHTML = `
    Bathrooms: ${bathrooms}
    `
}

let bedroomNum = document.getElementById("bedroom-value")
let bedroomBtn = document.getElementById("save-bedroom")
let bedroomOutput = document.getElementById("bedroom-output")

function saveBedroomNumber() {
    localStorage.setItem("bedrooms", JSON.stringify(bedroomNum.value))
    let bedrooms = JSON.parse(localStorage.getItem("bedrooms"))
    bedroomOutput.innerHTML = `
    Bedrooms: ${bedrooms}
    `
}



