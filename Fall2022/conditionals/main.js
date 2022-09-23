// basic boolean true/false
let isHungry = true;

// comparison expressions
// let name = "Michael";

// == loose comparison operator compares value, is not in common use
// console.log(name == "michael");
// console.log("65" == 65); // evaluates to true

// === strict comparison operator compares type AND value, you should use this
// console.log(name === "michael");
// console.log("65" === 65); // evaluates to false

// ! logical "not" operator, shouldn't use !=
// console.log(name != "michael");
// console.log("65" != 65); // evaluates to false

// console.log(name !== "michael");
// console.log("65" !== 65); // evaluates to true

// Number comparisons
// let year = 2022;
// console.log(year === 3000);
// console.log(year < 3000);
// console.log(year > 3000);

// let age = 30;
// console.log(age > 30);
// console.log(age >= 30);
// console.log(age < 30);
// console.log(age <= 30);

// let name = prompt("What is your name?");

// if (name === "Michael") {
//   alert("You are the teacher of this class!")
// }
// username: gatorpazz password: spaghetti
// let username = prompt("What is your username?");
// let password = prompt("What is your password");

// let existingUsername = "gatorpazz";
// let existingPassword = "spaghetti";

// if (username === "gatorpazz") {
//   alert ("You got the correct username!");
//   if (password === "spaghetti") {
//     alert("Welcome to your account");
//   } else {
//     alert("Sorry you entered the wrong password");
//   }
// }

// if (username === "gatorpazz" && password === "spaghetti") {
//   alert("Welcome to your account!");
// } else {
//   alert("Sorry you entered the wrong username or the wrong password")
// }

// Website with 2 admin accounts, gatorpazz, johndoe
// let username = prompt("What is your username?");

// if(username === "gatorpazz" || username === "johndoe") {
//   alert("Welcome to your account admin!");
// } else {
//   alert("Welcome to your account, you are not an admin")
// }

// let testScore = parseFloat(prompt("What did you get on the test?"));

// if(testScore >= 90) {
//   alert("Congratulations, you got an A on the test!");
// } else if(testScore >= 80) {
//   alert("You got a B on the test!");
// } else if(testScore >= 70) {
//   alert("You got a C on the test!");
// } else if(testScore >= 60) {
//   alert("You got a D on the test!");
// } else {
//   alert("Sorry, you got an F on the test!");
// }

// if(testScore < 60) {
//   alert("You got a F on the test!");
// } else if(testScore < 70) {
//   alert("You got a D on the test!");
// } else if(testScore < 80) {
//   alert("You got a C on the test!");
// } else if(testScore < 90) {
//   alert("You got a B on the test!");
// } else {
//   alert("Congratulations, you got an A on the test!");
// }

// Truthy Falsey
let name = prompt("What is your name?");

// A value is truthy if
// It's a string value that is not the empty string ""
// It's a number value that is not 0
// It's not null or undefined

// A value is falsey if
// It's the empty string
// It's the number 0
// It's null or undefined

if(name) {
  console.log("The value is truthy")
} else {
  console.log("The value is falsey")
}

let name2 = null;

if(name2) {
  console.log("The value is truthy")
} else {
  console.log("The value is falsey")
}