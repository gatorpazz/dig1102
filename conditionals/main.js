var myName = 'Michael';

// Equivalency, one thing equal to the other
console.log(myName === 'Michael') // returns true if the left and right are exactly equal, both in type and value
console.log(myName === 'Josh') // returns false if the left and right noe not equal, either in type or value
console.log(myName !== 'Josh') // returns true if the left and right are not equal, either in type or value
console.log(myName !== 'Michael') // returns false if the left and right are equal to each other in type or value

var x = 15;
var y = 35;
var z = 15

console.log(x > y) // returns false if the left value is not bigger than the right value
console.log(x < y) // returns true
console.log(x >= z) // returns true
console.log(x <= z) // returns true
console.log(x === z) // returns true
console.log(x !== y) // returns true

if(myName !== 'Michael') {
  console.log("Happy birthday " + myName);
}

var hasWallet = false;

if (hasWallet) {
  alert("You can eat out downtown");
} else {
  alert("You can't eat out downtown");
}

var email = prompt("What is your email?");
var password = prompt("What is your password?");

// Truthy Values
// Any string that is not the empty string '' ""
// Any number that is not 0

// Falsy Values
// The empty string
// The number 0
// undefined & nulls values

if (email) {
 alert("Email has been entered")
}

if (!email) {
  alert("Email has been not entered")
}

if (email && password) {
  alert('User has entered in a email AND a password')
} else if (email || password) {
  alert('User has entered in a email OR a password')
} else {
  alert("The user hasn't entered either an email OR a password")
}
// the alert runs
if ((30 > 15) && (20 < 55)) {
  alert ("Both of those statements are true")
}
// the alert doesn't run
if ((30 < 15) && (20 < 55)) {
  alert ("Both of those statements are true")
}

