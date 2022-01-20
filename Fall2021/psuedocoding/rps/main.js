var rounds = parseInt(prompt("How many rounds do you want to play?"));
var wins = 0;
// rounds is the number of times you want to play
// parseInt converts prompt value to a number

// Make a loop and plug in rounds
  // just make a for loop that console.logs(i)
  // check that it runs the number of times that were entered in rounds

// In the loop
  // prompt for r, p, or s from the user and store it in a variable
  // computer picks r, p, or s

// Math.random() gives you a number between 0-1, ex 0.000001 - 0.9999999999 0.00001 - 9.99999999
console.log(Math.floor(Math.random() * 3)); // Generate a number between 0 - 9
// Formula: Math.floor(Math.random() * x)) generates a number between 0 - (x-1)
// store that number in a variable
// use conditionals, to take the random number that you generated, and map it to a choice
var computerChoice = 0; // random number
if (computerChoice === 0) {
  computerChoice = 'r'
}
// compare the userChoice === 'r' to the computerChoice === 's'

// Win Conditions, will need &&
  // if you pick scissors and the computer picks paper
  // if you pick rock and the computer picks scissors
  // if you pick paper and the computer picks rock
  // alert that you won
  // increment the wins variable

// Tie Conditions, userChoice === computerChoice
  // alert that you tied
  // increment the tie variable

// Loss Conditions, can just be else
  // alert that you lost
  // increment the tie variable

// Outside the for loop
  // alert the number of times you win, tied, and lost