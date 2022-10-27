// console.log(window);
// window.alert("Hello");

console.log(document.body);

const h1 = document.querySelector('h1');
console.log(h1);

h1.textContent = "I'm changing this with JavaScript";
h1.style.color = "purple";

// const p = document.querySelector('p');
// console.log(p);
// p.textContent = "This is the paragraph that was grabbed";

const firstPEl = document.querySelector('.firstP')
firstPEl.textContent = "Grabbing this paragraph by its class";

const secondPEl = document.querySelector('#secondP');
secondPEl.textContent = "Grabbing this paragraph by its ID";

const mainEl = document.querySelector('main');

const pictureURL = "https://placekitten.com/200/200";

mainEl.innerHTML = `
  <p>This is a new paragraph that I made in JavaScript</p>
  <img src=${pictureURL}>
`

const liEls = document.querySelectorAll('li');
console.log(liEls);

for(let i = 0; i < liEls.length; i++) {
  const li = liEls[i];
  li.textContent = i;
  li.style.color = "red";
  li.style.background = "pink";
}

const h3 = document.createElement('h3');
h3.textContent = "This is an h3 created with JavaScript";
// document.body.appendChild(h3);
// document.body.prepend(h3);

mainEl.appendChild(h3);

// const name = prompt("What is your name?");

// localStorage.setItem('name', name);
const name = localStorage.getItem('name');
if (name) {
  const h2 = document.createElement('h2');
  h2.textContent = `Hello ${name}`;
  document.body.appendChild(h2);
}