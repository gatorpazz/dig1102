// Built in JavaScript functions

// const name = prompt("What is your name?");
// console.log(name);
// const hungry = confirm("Are you hungry?");
// Math.floor(Math.random() * 5);

// User defined functions
// Function Definition
function greeting() {
  console.log("Hi Michael!");
  console.log("Hi class!");
}

// Arrow function with parameter
const greetingCopy = (teacherName) => {
  console.log("Hi " + teacherName + "!");
  console.log("Hi class!");
}

// Function call
// greeting();
greetingCopy("Michael");
greetingCopy("Phillip");
greetingCopy("Mark");
greetingCopy("Anne");
greetingCopy("Maria");

function add(x, y) {
  console.log(x + y);
}

add(10, 15);
add(34, 25.5);
add(20, 22);

// Real life example
const subtotal = 59.99;
const salesTax = 0.065;
const total = subtotal * salesTax;

function calculateTotal(subtotal, salesTax) {
  return subtotal * (1 + salesTax);
}

const total1 = calculateTotal(59.99, salesTax);
const total2 = calculateTotal(105.34, salesTax);
const total3 = calculateTotal(98.88, salesTax);

console.log(total1);
console.log(total2);
console.log(total3);

// beefier real life example
const cart = [1096.99, 1597.99, 18.16, 59.99]

// subtotal is a local variable
function calculateSubTotal(cart) {
  let subtotal = 0;
  for(let i = 0; i < cart.length; i++) {
    subtotal += cart[i];
  }
  console.log(subtotal);
  return subtotal;
}

const subtotal2 = calculateSubTotal(cart);
console.log(subtotal);
const total4 = calculateTotal(subtotal2, salesTax);
console.log(total4.toFixed(2))

// Function logging values from the global scope
function printMessage() {
  console.log(total4);
  console.log(subtotal);
  console.log(calculateSubTotal);
}

printMessage();

function letterFirstName(name) {
  
}