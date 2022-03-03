const products = ['Salmon', 'Eggs', 'Milk', 'Butter', 'Tomatoes', 'Carrots']
const list = document.querySelector('ul');

for(let i = 0; i < products.length; i++) {
  const li = document.createElement('li');
  li.textContent = products[i]
  list.appendChild(li);
}

const name = "Michael Pascuzzi"
const job = 'teacher'
const pet = 'snake';
const template = `
<p>My name is ${name}</p>
<p>I am a ${job}</p>
<p>I have a wife and 2 kids and I have a ${pet}</p>`

document.querySelector('section').innerHTML = template;