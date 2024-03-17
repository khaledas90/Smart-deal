// JavaScript to toggle the responsive navigation bar
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
});

// JavaScript to toggle the responsive aside bar
const aside_Toggle = document.querySelector('.navbar-toggle-board');
const aside = document.querySelector('.aside_bar');

aside_Toggle.addEventListener('click', function() {
  aside.classList.toggle('active');
});


//  JavaScript to toggle the responsive drobdown par
const drobdown_one_Toggle = document.querySelector('.down-one');
const drobdown_two_Toggle = document.querySelector('.down-two');
const drobdown_three_Toggle = document.querySelector('.down-three');
const drobdown_dash_one = document.querySelector('.nav-menu-one');
const drobdown_dash_two = document.querySelector('.nav-menu-two');
const drobdown_dash_three = document.querySelector('.nav-menu-three');

drobdown_one_Toggle.addEventListener('click', function() {
  drobdown_dash_one.classList.toggle('active');
});
 drobdown_two_Toggle.addEventListener('click', function() {
  drobdown_dash_two.classList.toggle('active');
});
drobdown_three_Toggle.addEventListener('click', function() {
  drobdown_dash_three.classList.toggle('active');
});

// upload file

let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change", () => {
  fileList.innerHTML = "";
  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

  for (i of fileInput.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    fileList.appendChild(listItem);
  }
});




// chat support

const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "Sajad";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}





  // print order

function printOrder(){
  window.print();
}

  // print order payment
function PrintOrederPayment(){
  window.print();
}

// responsive table
$(document).ready(function(){
  $('.dataTable').DataTable( {
    responsive: true
  } );

})
$(document).ready(function(){
  $('.tablesub').DataTable( {
    responsive: true
  } );
})
$(document).ready(function(){
  $('.headTableOrder').DataTable( {
    responsive: true
  } );

})
$(document).ready(function(){
  $('.endtableorder').DataTable( {
    responsive: true
  } );
})






