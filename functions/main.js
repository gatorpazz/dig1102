// FUNCTIONS - Reusable chunks of code

// BUILT IN (some of them)
// alerts
// alert("hello world")
// prompts
// const name prompt("What is your name?")
// console.log
console.log("This is a log")

// USER DEFINED

// Function Declaration, function keyword + [nameOfFunction] + () + {}

function sayHello() {
  console.log("Hello")
}

// Function Expression
let sayHello2 = function() {
  console.log("Hello")
}

// Arrow Function
// const greetStudent2 = (name) => {
//   console.log("Hello " + name + "!");
// }

// Arrow functions with only one line inside of the code block {}, you can omit the curly braces
// const greetStudent2 = (name) => console.log("Hello " + name + "!")

// Arrow functions with only one line inside of the code block {}, you can omit the curly braces
// const greetStudent2 = name => console.log("Hello " + name + "!")


sayHello()

// WET CODE
// console.log("Hello Jared!");
// console.log("Hello Elvira!");
// console.log("Hello Gunner!");
// console.log("Hello Jolene!");

// DRY CODE
function greetStudent(name, topic, grade) {
  console.log("Hello " + name + "!");
  console.log("Today's topic will be " + topic)
  console.log("Your current grade is " + grade)
  console.log("I hope you have a great day in class")
}

greetStudent("Jared", "functions", 80)
greetStudent("Elvira", "arrays", 96)
greetStudent("Gunner", "conditionals", 77)
greetStudent("Jolene", "objects", 46)

// GETTING VALUES OUT OF FUNCTIONS

function add(x, y) {
  // return keyword
  return x + y;
}

const sum = add(45, 93);


console.log(sum);