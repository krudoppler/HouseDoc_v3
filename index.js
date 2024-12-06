const homeInformation = document.getElementById("homeinformationform");

homeInformation.addEventListener("submit", function (e) {
  e.preventDefault();

  const homeFormData = new FormData(homeInformation);

  const homeAddress = homeFormData.get("address");
  const homePrice = homeFormData.get("price");

  document.getElementById("form-data-render").innerHTML = `
    <p>Home Address: ${homeAddress} <br>
     Home Price: ${homePrice} </p>
`
});
