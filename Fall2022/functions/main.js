// Function declaration/definition
function greet(name) {
  console.log("Hello " + name);
}

// calling/invoking a function
greet("Michael");

const students = ["Jonte", "Sharona", "Chang", "Alberte", "Wanda"];
for(let i = 0; i < students.length; i++) {
  greet(students[i]);
}

const cart = [4.99, 3.99, 29.99, 4.99, 2.79];

function checkout(arr) {
  let subtotal = 0;
  for(let i = 0; i < cart.length; i++) {
    subtotal += cart[i];
  }
  const stateTaxRate = 0.06;
  const total = subtotal + subtotal * stateTaxRate;
  return total;
}

const total = checkout(cart);
console.log("You total today is $" + total);