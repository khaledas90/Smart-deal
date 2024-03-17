"use strict";

// Selectors
const form = document.querySelector(".form"),
  usernameInp = document.getElementById("inputnameNamePay"),
  numberInp = document.getElementById("inputnameNumberpay"),
  bankNameSelector = document.getElementById("BankNAme"),
  planNameSelector = document.getElementById("PlanName"),
  datePlanInp = document.getElementById("DatePlan"),
  table = document.getElementById("dataTable"),
  tableBody = document.getElementById("tbodyPay");
  




const userDataLocal = localStorage.getItem("data");




if (userDataLocal) {
  const data = JSON.parse(userDataLocal);
  data.forEach((user) => createUserTable(user));
}




function createUserTable(data) {
  const {
    date: startSubDate,
    bankName,
    planName,
    username,
    numberOfSub,
    endSubDate,
  } = data;

  const userStructure = `
  <tr>
    <td>تم ارفاق ملف</td>
    <td>${endSubDate}</td>
    <td >${startSubDate}</td>
    <td>${bankName}</td>
    <td > قيد المراجعه </td>
    <td>${planName}</td>
    </tr>`;
    
    tableBody.innerHTML += userStructure;
  }
  
