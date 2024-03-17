"use strict";

// Selectors
const form = document.querySelector(".form")
const orderNameInp = document.getElementById("orderName")
const companyName = document.getElementById("companyName")
const modelNameSelector = document.getElementById("modelName")
const numberYearSelector = document.getElementById("numberYear")
const datePlanInp = document.getElementById("DatePlan")
const table = document.getElementById("dataTable");
const tableBody = document.getElementById("tbodyPay");




const userDataLocal = localStorage.getItem("requestsData");


let counter = 0;
while (counter = 0) {
  console.log(counter);
  counter += 1;
}

function createUserTable(data) {
  const { nameInp, input2, select1, select2, date } = data;
  const userStructure = `
  <tr class="text-center">
  <td class="text-center">${date}</td>
  <td class="text-center">قيد المراجعه</td>
  <td class="text-center">${nameInp}</td>
  <td class="text-center">${counter += 1}</td>
  </tr>`;

  tableBody.innerHTML += userStructure;
}


if (userDataLocal) {
  const data = JSON.parse(userDataLocal);

  data.forEach((user) => createUserTable(user));
}
