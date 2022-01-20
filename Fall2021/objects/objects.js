// OBJECTS

// PERSON ATTRIBUTES
  // HAIR COLOR
  // EYE COLOR
  // HEIGHT
  // WEIGHT

// separate variables don't work so well
const hairColor = 'blonde';
const name = 'Michael';
const weight = 220;

// objects can group this together
const person = {
  hairColor: 'blonde',
  name: 'Michael',
  weight: 220,
  programmingLanguagesKnown: ['JavaScript', 'Java', 'C++'],
  isTeacher: true,
  address: {
    streetNumber: 123,
    streetName: 'Marilou Ave',
    city: 'Orlando',
    state: 'FL'
  },
  sayHello() {
    console.log("Hello")
  }
}

// Accessing the whole object
console.log(person);

console.log(person.name);
console.log(person.programmingLanguagesKnown);
console.log(person["weight"])
console.log(person.weight)
person.sayHello();

// DATA PASSED VIA JSON

const products = [
  {
    id: 1,
    name: 'Macbook',
    price: 2000
  },
  {
    id: 2,
    name: 'Dell Laptop',
    price: 500
  },
  {
    id: 3,
    name: 'Lenovo Laptop',
    price: 600
  },
  {
    id: 4,
    name: 'Microsoft Surface',
    price: 1000
  },
  {
    id: 5,
    name: 'HP Laptop',
    price: 450,
    picture: 'https://i5.walmartimages.com/asr/22e2aeb0-6f30-4ff8-a3d5-83426f540fe4_1.0f7508ac902156da910976c6fd2e5716.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
  },
]

const listEl = document.querySelector('ul');

const listOfProducts = products.map(item => {
  return (`
    <li>
      <h3>${item.name}</h3>
      <h3>$${item.price}</h3>
    </li>
  `)
})

listEl.innerHTML = listOfProducts.join('')