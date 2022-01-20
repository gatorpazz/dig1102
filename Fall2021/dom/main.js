// Selecting elements from the DOM.

// Query Select by element name
const h1El = document.querySelector('h1');
console.log(h1El)

// Text content is a property of elements that let's you change text
h1El.textContent = 'OFIEJoifjweoifjweoijf'

// Query Select by ID
const firstPEl = document.querySelector('#firstParagraph')
console.log(firstPEl);
firstPEl.textContent = 'I changed the text of the first paragraph'

// Query Select by Class
const secondPEl = document.querySelector('.secondParagraph')
console.log(secondPEl);

// Inner HTML let's you render HTML elements inside of the selected element
secondPEl.innerHTML = 'Changed the second paragraph as well, <b>how about that?</b>'

// Grabbing multiple elements from the DOM with querySelectorAll
const allPEls = document.querySelectorAll('p')
console.log(allPEls)

for(let i = 0; i < allPEls.length; i++) {
  allPEls[i].textContent = "Changed paragraph " + (i + 1) + "'s text";
}

// Create DOM elements in JavaScript

// Step 1: Making the element with document.createElement
const pTag = document.createElement('p');
console.log(pTag)

// Step 2: Do stuff with that element
pTag.textContent = "This is the third paragraph";
// setAttribute let's you set attributes on elements;
pTag.setAttribute('id', 'thirdParagraph');

// Step 3: Put it on the page
// appendChild
const mainEl = document.querySelector('main');
mainEl.appendChild(pTag);

const name = "Michael"

mainEl.innerHTML = `
  <section>
    <h3>This is ${name}'s section</h3>
    <p>The is a paragraph in my section</p>
  </section>
`;

const animals = ['lions', 'tigers', 'bears', 'monkeys', 'dragons'];
let template = ``
for(let i = 0; i < animals.length; i++) {
  template += `<li>${animals[i]}</li>`
}
document.querySelector('ul').innerHTML = template;