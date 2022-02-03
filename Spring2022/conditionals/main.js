// const isHungry = confirm("Are you hungry?");
// // console.log(isHungry);

// // // if statement
// if (isHungry) {
//   alert("You need to get some food")
//   alert("You can go to McDonalds");
// }

// if (!isHungry) {
//   alert("You're good then!");
// }

// const numKids = parseInt(prompt("How many kids do you have?"));
// const hasLotsOfKids = numKids > 3;
// console.log("Has lots of kids: " + hasLotsOfKids);
// const hasACoupleKids = numKids <= 3;
// console.log("Has a couple kids: " + hasACoupleKids);
// const hasNoKids = numKids === 0;
// console.log("Has no kids: " + hasNoKids);

// if(numKids > 3) {
//   console.log("Dang that's a lot of kids!");
// } else if(numKids <= 3 && numKids >= 1) {
//   console.log("That's a normal sized family");
// } else {
//   console.log("You have no kids");
// }

// TRUTHY
// Non Empty Strings " " "Michael"
// Any number that is not 0
// arrays & objects

const name = prompt("What is your name?");

if(!name) {
  alert("You did not enter a value")
} else if(name === "Michael") {
  alert("You're the teacher!");
} else if (name !== "Michael") {
  alert("You're a student!");
}

// FALSY
// The empty string ""
// The number 0
// undefined & null;

const coinFlip = "heads";

if (coinFlip === "heads") {
  alert("You got heads");
} else {
  alert("You got tails");
}
const isHungry = true;
const isThirsty = false;
const areYouNotOkay = isHungry && isThirsty;
console.log("Are you not okay? " + areYouNotOkay)
const areYouHungryORThirsty = isHungry || isThirsty;
console.log("Are you hungry or thirsty? " + areYouHungryORThirsty)