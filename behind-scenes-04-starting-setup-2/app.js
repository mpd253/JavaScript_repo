const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

// Garbage Collector
let person = { name: 'Max' };

person = null;

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

// 위의 것과 같음
// function addListener() {
//   clickableBtn.addEventListener('click', function() {
//     const value = messageInput.value;
//     console.log(value || 'Clicked me!');
//   });
// }

function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

addListenerBtn.addEventListener('click', addListener);