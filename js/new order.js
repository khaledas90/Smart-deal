"use strict"

// Selectors
const form = document.querySelector(".form")
const orderNameInp = document.getElementById("orderName")
const companyName = document.getElementById("companyName")
const modelNameSelector = document.getElementById("modelName")
const numberYearSelector = document.getElementById("numberYear")
const datePlanInp = document.getElementById("DatePlan")





// Variables
let usersData = []
const userDataLocal = localStorage.getItem("data");





// Functions
function saveDataLocal(e) {
  // Stop submit event
  e.preventDefault()


  // Save data to Local Storage
  const data = {
    input1: orderNameInp.value,
    input2: companyName.value,
    select1: modelNameSelector.value,
    select2: numberYearSelector.value,
    date: datePlanInp.value,
  };


  // Save data into Local Storage
  console.log(data);
  console.log(usersData);
  usersData.push(data);
  localStorage.setItem("data", JSON.stringify(usersData));


  // Change page to second-page.html
  window.location.href = "../pages/order.html";
}


function setDataFromLocal() {
  const data = JSON.parse(userDataLocal);
  const lastDataInserted = data[data.length - 1];
  const { input1, input2, select1, select2, date } = lastDataInserted

  usersData = data

  // Draw data in the inputs/selectors
  orderNameInp.value = input1;
  companyName.value = input2;
  modelNameSelector.value = select1;
  numberYearSelector.value = select2;
  datePlanInp.value = date;
}





// Events
window.addEventListener("load", () => {
  const savedData = localStorage.getItem("data");

  if (savedData) setDataFromLocal()
});


form.addEventListener("submit", (e) => saveDataLocal(e))