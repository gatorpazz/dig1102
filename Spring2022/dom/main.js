// DOM Manipulation

// querySelector to grab elements from the HTML
const h1 = document.querySelector('h1');
// editing the textContent of the element to change the text displayed on the page
h1.textContent = "Awesome Website";

// grabs only the first li on the page with class of list-item
const li = document.querySelector('.list-item');
li.textContent = "Changed the list item"
// change the class on an element
li.classList = 'Hello'
// change the color of an element
li.style.color = 'red';
// Non existant element gives us null
const h2 = document.querySelector('h2');
console.log(h2);

// grab an element by ID
const secondSet = document.querySelectorAll('#second-list li')
console.log(secondSet)

for (let i = 0; i < secondSet.length; i++) {
  secondSet[i].textContent = "List item: " + i;
}

const p = document.createElement('p');
p.classList = 'coolParagraph'
p.style.color = 'purple'
p.textContent = 'This is a really cool paragraph'
// prepend to put it at the top
// document.body.prepend(p);
// appendChild to put it at the bottom
// document.body.appendChild(p);

