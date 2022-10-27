// Grabbing the button with querySelector
const buttonEl = document.querySelector('button');
// changing the button text after grabbing it with querySelector
buttonEl.textContent = "Click me please"
let counter = 0;

const counterEl = document.querySelector('span');
// listening to a click on the buttonEl with addEventListener
buttonEl.addEventListener('click', function(event) {
  // console.log(event);
  console.log("This button was clicked");

  if (counter < 4) {
    const h2 = document.createElement('h2');
    h2.textContent = "This heading tag was created with JavaScript in response to a user click";
    document.body.appendChild(h2);
    counter++;
    counterEl.textContent = counter;
  }
})

