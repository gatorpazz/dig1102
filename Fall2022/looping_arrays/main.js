// DRY Do not repeat yourself, this code is WET, we enjoy typing
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")

// Incrementing with a for loop
for(let i = 0; i < 15; i++) {
  console.log("Hello");
  console.log(i);
}

console.log("After the for loop");

// Counting down with a for loop
for(let i = 100; i > 0; i--) {
  console.log(i);
}

// While loop
// let name;
// while(!name) {
//   name = prompt("What is your name?");
// }

// const student1 = "Jonte";
// const student2 = "Sharona";
// const student3 = "Chang";
// const student4 = "Alberte";
// const student5 = "Wanda";

const students = ["Jonte", "Sharona", "Chang", "Alberte", "Wanda"];
console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

console.log(students.length);

// reassigns a new value to index 4 of the array
students[4] = "Mary";
console.log(students);

// adds a new value onto the end of the array
students.push("Gilmaris");
console.log(students);

// remove the last value of the array.
students.pop();
console.log(students);

// adds a new value onto the beginning of the array
students.unshift("Sabrina");
console.log(students);

// remove the value at the beginning of the array
students.shift();
console.log(students);


// for(let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

// Some people like to have a variable to represent the current element the loop is on
for(let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  console.log(currentStudent)
}

// iterating through the array from end to beginning skipping every other student
for(let i = students.length - 1; i >= 0; i-=2) {
  console.log(students[i])
  console.log(i + 1); // hint for the assessment
}

// Multidimensional Array
const stuff = [[0,1], [0,2], [0,3]]

const shows = ["Dexter", "House of the Dragon", "Expanse"];