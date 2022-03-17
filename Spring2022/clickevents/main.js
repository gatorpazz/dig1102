const button = document.querySelector('button');

button.textContent = "Create Headings";

// Click Event Listenter
button.addEventListener('click', function(event) {
  // WHAT HAPPENS WHEN YOU CLICK GOES HERE
  console.log(event);
  const h1 = document.createElement('h1');
  h1.textContent = "This is a dynamically generated heading";
  document.body.appendChild(h1);
})

const loginButton = document.querySelector('#loginButton');

// const username = prompt("What's your username?");
// const password = prompt("What's your password?");

loginButton.addEventListener('click', function() {
  if(username === 'gatorpazz' && password === 'secretPassword') {
    alert("Welcome to the website!");
  } else {
    alert("Incorrect password")
  }
})

const githubButton = document.querySelector('#githubButton');

githubButton.addEventListener('click', async function() {
  const response = await fetch("https://api.github.com/users/gatorpazz")
  const data = await response.json();
  document.querySelector('main').textContent = JSON.stringify(data);
})

let count = 0;
const counterEl = document.querySelector('#counter')
const counterButton = document.querySelector('#raiseCount');
counterButton.addEventListener('click', function() {
  count++;
  console.log(count);
  counterEl.textContent = count;
})