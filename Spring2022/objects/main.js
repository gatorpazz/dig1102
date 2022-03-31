// variables store single values
let name = "Michael";
// arrays store multiple values
let names = ["Valerie", "Michael", "Justin"]
let occupation = "director of engineering";
let age = 29;
let numKids = 2;

// let michael = ["Michael", "director of engineering", 29, 2]

// Objects (dictionaries) store different pieces of information about a single thing
const person = {
  name: "Michael",
  occupation: "director of engineering",
  age: 29,
  numKids: 2,
  address: {
    city: "Orlando",
    state: "FL"
  },
  cars: ['vw', 'mazda']
}

console.log(person);
// accessing values dot-syntax
console.log(person.occupation)
// accessing values bracket syntax
console.log(person["occupation"])
// really only useful for using variables with keynames
const key = prompt("What key do you want to access?"); // "numKids"
console.log(person[key]);

// accessing nested object properties
console.log(person.address.city);

// accessing array values in objects
console.log(person.cars[1])
// adding properties to object
person.registeredVoter = true;
console.log(person);
// changing properties on object
person.numKids = 3

fetch('https://api.github.com/users/gatorpazz/repos')
  .then(response => response.json())
  .then(data => console.log(data[0].owner.url))


const catFoods = [
  {
    name: "Cat Chow Indoor Hairball & Healthy Weight Dry Cat Food, 15-lb bag",
    stars: 5,
    numReviews: 1240,
    price: 15.99,
    picture: "https://img.chewy.com/is/image/catalog/173768_MAIN._AC_SS232_V1630360946_.jpg",
    link: 'https://www.chewy.com/cat-chow-indoor-hairball-healthy/dp/200464'
  },
  {
    name: "Meow Mix Original Choice Dry Cat Food, 22-lb bag",
    stars: 5,
    numReviews: 1223,
    price: 18.98,
    picture: "https://img.chewy.com/is/catalog/99967_MAIN._AC_SS232_V1462999359_.jpg",
    link: 'https://www.chewy.com/meow-mix-original-choice-dry-cat-food/dp/127508'
  },
  {
    name: "Cat Chow Purina Cat Chow Naturals Original with Added Vitamins, Minerals & Nutrients Dry Cat Food, 13-lb...",
    stars: 5,
    numReviews: 1027,
    price: 16.26,
    picture: 'https://img.chewy.com/is/image/catalog/100144_MAIN._AC_SS232_V1645816342_.jpg',
    link: 'https://www.chewy.com/purina-cat-chow-naturals-original/dp/127682'
  }
]
const catFoodsEl = document.querySelector('ul');
let template = ''
for (let i = 0; i < catFoods.length; i++) {
  const item = `
    <li>
      <a href="${catFoods[i].link}" target="_blank" rel="noopener noreferrer"">
        <img src="${catFoods[i].picture}"
        <h2>${catFoods[i].name}</h2>
        <p>Stars: ${catFoods[i].stars}</p>
        <p>Number of Reviews: ${catFoods[i].numReviews}</p>
        <p>Price: ${catFoods[i].price}</p>
      </a>
    </li>
  `
  template += item;
}
catFoodsEl.innerHTML = template;