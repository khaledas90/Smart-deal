"use strict"

// Selectors
const dateInp = document.querySelector("#DatePlan"),
  nameInp = document.querySelector("#orderName"),
  companyInp = document.querySelector("#companyNameTwo"),
  priceInp = document.querySelector("#inputPrice"),
  quntyInp = document.querySelector("#inputqunty"),
  companySelector = document.querySelector("#companyNameSelect"),
  modelSelector = document.querySelector("#modelName"),
  numberSelector = document.querySelector("#numberYear"),
  stateSelector = document.querySelector("#stateCar"),
  tableBody = document.getElementById("data-table-body");






// Variables
let requestsData = []





// Initialize code
let requestsDataLocal = localStorage.getItem("requestsData")
if (requestsDataLocal) requestsData = JSON.parse(requestsDataLocal)






// Functions
function saveOrderData() {
  const data = {
    date: dateInp.value,
    nameInp: nameInp.value,
    company: companyInp.value,
    priceInp: priceInp.value,
    quntyInp: quntyInp.value,
    companySelector: companySelector.value,
    modelSelector: modelSelector.value,
    numberSelector: numberSelector.value,
    stateSelector: stateSelector.value,
    isRequestSent: false,
  };

  requestsData.push(data)

  localStorage.setItem("requestsData", JSON.stringify(requestsData));

  displayData();
}



function displayData() {
  tableBody.innerHTML = "";
  const unsentData = requestsData.filter(({isRequestSent}) => !isRequestSent)

  unsentData.forEach(data => {
    const userStructure = `
    <tr>
      <td>${data?.priceInp}</td>
      <td>${data?.quntyInp}</td>
      <td>${data?.stateSelector}</td>
      <td>${data?.numberSelector}</td>
      <td>${data?.modelSelector}</td>
      <td>${data?.companySelector}</td>
      <td>${data?.company}</td>
    </tr>
    `
    tableBody.innerHTML += userStructure
  })
}

displayData();



function sendRequest() {
  requestsData.map(data => {
    data.isRequestSent = true
  })
  localStorage.setItem("requestsData", JSON.stringify(requestsData));
  
  window.location.href = "./order.html"
}