const formEl = document.querySelector('#accountRegistration');
const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');
const emailEl = document.querySelector('#email');
const ageEl = document.querySelector('#age');
const mainEl = document.querySelector('main');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Collect user inputted text
  const username = usernameEl.value;
  const password = passwordEl.value;
  const email = emailEl.value;
  const age = ageEl.value;

  console.log(username);
  console.log(password);
  console.log(email);
  console.log(age);

  if (password.length < 8) {
    alert("Sorry, your password isn't long enough");
    return;
  }
  if (age < 18) {
    alert("Sorry, you are not old enough to register an account");
    return;
  }

  const template = `
    <h2>Account Registered Successfully</h2>
    <h3>Username: ${username}</h3>
    <h3>Email: ${email}</h3>
    <h3>Age: ${age}</h3>
  `
  mainEl.innerHTML = template;
  usernameEl.value = '';
  passwordEl.value = '';
  emailEl.value = '';
  ageEl.value = '';
})

// Stuff I like form;
const stuffILikeForm = document.querySelector('#stuffILike');
const stuffInput = document.querySelector('#stuff');
const theStuffList = document.querySelector('ul');
let stuffILike = [];

stuffILikeForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const stuff = stuffInput.value;
  if (stuffILike.length < 10) {
    stuffILike.push(stuff);
  }
  console.log(stuffILike);
  stuffInput.value = '';
  renderStuffList();
})

function renderStuffList() {
  const template = stuffILike.map(item => `<li>${item}</li>`);
  theStuffList.innerHTML = template.join('');
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
  stuffILike = [];
  renderStuffList();
})

const lastItemButton = document.querySelector('#lastItem');
lastItemButton.addEventListener('click', function() {
  stuffILike.pop();
  renderStuffList();
})