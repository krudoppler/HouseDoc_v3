// HTML Elements
const homeInformation = document.getElementById("homeinformationform");
const radioTest = document.getElementById("container-test");

// Event Listeners
homeInformation.addEventListener("submit", function (e) {
  e.preventDefault();

  const homeFormData = new FormData(homeInformation);

  const homeAddress = homeFormData.get("address");
  const homePrice = homeFormData.get("price");

  document.getElementById("form-data-render").innerHTML = `
    <p>Home Address: ${homeAddress} <br>
     Home Price: ${homePrice} </p>
`;
});

