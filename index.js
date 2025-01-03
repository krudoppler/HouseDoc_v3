// HTML Elements
const homeInformation = document.getElementById("homeinformationform");
const radioTest = document.getElementById("container-test");

// Event Listeners
homeInformation.addEventListener("submit", function (e) {
  e.preventDefault();

  const homeFormData = new FormData(homeInformation);

  const homeAddress = homeFormData.get("address");
  const homePrice = homeFormData.get("price");
  const homeSqFt = homeFormData.get("sqft");
  const homeLotSize = homeFormData.get("lot-size");
  const homeYearBuilt = homeFormData.get("year-built");

  document.getElementById("form-data-render").innerHTML = `
    <p>
    Home Address: ${homeAddress} <br>
    Home Price: ${homePrice} <br>
    Square Feet: ${homeSqFt} <br>
    Lot Size: ${homeLotSize} <br>
    Year Built: ${homeYearBuilt} <br>
    </p>
`;
});
