const clickMeButton = document.querySelector('#clickMe')

clickMeButton.textContent = "Don't click me";

let counter = 0;
const counterEl = document.querySelector('#counter');

clickMeButton.addEventListener('click', function() {
  counter++;
  counterEl.textContent = counter;
})

const buttons = document.querySelectorAll('section button');
const h2El = document.querySelector('h2');
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    h2El.textContent = `Button ${i + 1} was clicked`;
  })
}