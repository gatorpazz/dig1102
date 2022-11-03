const students = ["Sharona", "Wanda"];

// Related data, hard to do with single variables
const name = "Michael Pascuzzi";
const occupation = "programmer";
const age = 30;
const isMarried = true;

// Related data, doesn't really work in an array
// const michael = ["Michael Pascuzzi", "programmer", 30, true]
// console.log(michael[0])

const person = {
  name: "Michael Pascuzzi",
  occupation: "programmer",
  age: 30,
  isMarried: true,
  sayMyName: function() {
    console.log(person.name);
  }
};

console.log(person);
// access values through dot syntax
console.log(person.name);
// access values through square bracket syntax
console.log(person["occupation"]);
console.log(person.occupation);
person.sayMyName();

const product = {
  name: "Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote (includes TV controls)",
  price: 34.99,
  image: "https://m.media-amazon.com/images/I/613O0QRe0-L._AC_SL1000_.jpg",
  reviews: [{
    author: "Alysa",
    title: "Efficient and Enjoyable ... Remote Design is AWFUL.",
    content: "Being an all Apple household I have to say this device impressed me quite a bit.",
    stars: 4,
    date: "October 4, 2022"
  },
  {
    author: "Chris",
    title: "Good Device, Impressed this Apple user",
    content: "Being an all Apple household I have to say this device impressed me quite a bit.",
    stars: 4,
    date: "January 29, 2022"
  }]
}
// logging the product object
// console.log(product);
// logging the reviews of the product
// console.log(product.reviews);
// logging Alysa's review from the reviews array
// console.log(product.reviews[0]);
// log specific info from Alysa's review
// console.log(product.reviews[0].content);
// for(let i = 0; i < product.reviews.length; i++) {
//   let review = product.reviews[i];
//   console.log(review.author);
// }

// map returns a brand new array, putting the transformed values into that array;
const authorNames = product.reviews.map(function(review) {
  return review.author;
})
console.log(authorNames);

const reviewsTemplate = product.reviews.map(function(review) {
  return `
    <div>
      <h4>Author: ${review.author}</h4>
      <h4>Title: ${review.title}</h4>
      <h4>Stars: ${review.stars}</h4>
      <p>Content: ${review.content}</p>
      <p>Reviewed on: ${review.date}</p>
    </div>
  `
});
console.log(reviewsTemplate);
const template = `
  <h1>${product.name}</h1>
  <h2>$${product.price}</h2>
  <img src="${product.image}">
  <section>
    <h3>Reviews</h3>
    ${reviewsTemplate.join('')}
  </section>
`

const mainEl = document.querySelector('main');
mainEl.innerHTML = template;