"use strict";

// Selectors
const form = document.querySelector(".form");
const usernameInp = document.getElementById("inputnameNamePay");
const numberOfSubInp = document.getElementById("inputnameNumberpay");
const bankNameSelector = document.getElementById("BankNAme");
const planNameSelector = document.getElementById("PlanName");
const datePlanInp = document.getElementById("DatePlan");





// Variables
let usersData = [];
const userDataLocal = localStorage.getItem("data");





// Functions
function saveDataLocal(e) {
  // Stop submit event
  e.preventDefault();

  const subDate = getDigitDate(datePlanInp.value, 1);
  const planName = planNameSelector.value;
  const { endSubDate } = calculateSubscriptionStatus(subDate, planName);

  // Save data to Local Storage
  const data = {
    username: usernameInp.value,
    numberOfSub: numberOfSubInp.value,
    bankName: bankNameSelector.value,
    planName: planNameSelector.value,
    date: datePlanInp.value,
    endSubDate: endSubDate,
  };

  // Save data into Local Storage
  usersData.push(data);
  localStorage.setItem("data", JSON.stringify(usersData));

  // Change page to second-page.html
  // window.location.href = "../pages/Subscriptions.html";
  window.location.href = "./Subscriptions.html";
}



function setDataFromLocal() {
  const data = JSON.parse(userDataLocal);
  const lastDataInserted = data[data.length - 1];
  const { username, numberOfSub, bankName, planName, date } = lastDataInserted;

  usersData = data;

  // Draw data in the inputs/selectors
  usernameInp.value = username;
  numberOfSubInp.value = numberOfSub;
  bankNameSelector.value = bankName;
  planNameSelector.value = planName;
  datePlanInp.value = date;
}



function getDigitDate(insertedDate, increaseMonthBy = 0) {
  const date = new Date(insertedDate),
    currYear = date.getFullYear(),
    currMonth = (date.getMonth() + increaseMonthBy).toString().padStart(2, 0),
    currDay = date.getDate().toString().padStart(2, 0),
    datePattern = `${currYear}-${currMonth}-${currDay}`;

  return datePattern;
}



function calculateSubscriptionStatus(duration, typeSub) {
  const currentDate = new Date();
  const subsDate = new Date(duration);
  let startSubDate, endSubDate;
  let timeDiff, daysRemaining;
  // let noun = ""

  startSubDate = getDigitDate(subsDate, 1);
  timeDiff = subsDate.getTime() - currentDate.getTime();
  daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (typeSub === "شهرية") subsDate.setMonth(subsDate.getMonth() + 2);
  if (typeSub === "سنوية") {
    subsDate.setFullYear(subsDate.getFullYear() + 1);
    subsDate.setMonth(subsDate.getMonth() + 1);
  }
  if (typeSub === "نصف سنوية") subsDate.setMonth(subsDate.getMonth() + 7);

  endSubDate = getDigitDate(subsDate);

  // noun = daysRemaining <= 0 ? "غير مشترك" : "مشترك";
  return { startSubDate, endSubDate };
}






// Events
window.addEventListener("load", () => {
  const savedData = localStorage.getItem("data");

  if (savedData) setDataFromLocal();
});


form.addEventListener("submit", (e) => saveDataLocal(e));