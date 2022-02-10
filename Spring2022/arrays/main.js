// ARRAYS

const classroom = ["Michael", "Sebastien", "Griffin", "Caio", "Valerie"]
// prints the whole array
console.log(classroom);
// prints Caio, the value at index 3
console.log(classroom[3]);
// length property: number of items in the array
console.log(classroom.length)
// Get the last item of the array
console.log(classroom[classroom.length - 1]);

const grades = [83, 58, 94, 67];
// adds 77 to end of the array
grades.push(77);
console.log(grades)
// removes 77 from the end of the array
grades.pop();
console.log(grades)
// remove 83 from the beginning of the array
grades.shift();
console.log(grades);
// add 99 to the beginning of the array
grades.unshift(99);
console.log(grades);
// remove items from any index of an array
grades.splice(1, 2);
console.log(grades);

// console.log(classroom[0]);
// console.log(classroom[1]);
// console.log(classroom[2]);
// console.log(classroom[3]);
// console.log(classroom[4]);
// Looping through an array
for(let i = 0; i < classroom.length; i++) {
  console.log(classroom[i])
}