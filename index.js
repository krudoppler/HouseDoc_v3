


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
//input the vlaue ofx bathrooms
// hit save to save the input value
//it displays the output in the output field



