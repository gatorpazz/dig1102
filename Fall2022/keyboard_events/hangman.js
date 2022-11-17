const movies = ["Thor", "Spiderman", "Titanic", "Avatar", "Predator"];

let chosenWord;
let hiddenWord;
let lives;

document.body.addEventListener('keyup', function(event) {
  // when the user presses a key, we want to compare that letter to each letter in the word;
  const keyPressed = event.key.toLowerCase();
  console.log(keyPressed);
  let letterFound = false;
  for(let i = 0; i < chosenWord.length; i++) {
    if(keyPressed === chosenWord[i]) {
      hiddenWord[i] = keyPressed;
      letterFound = true;
    }
  }
  if(!letterFound) {
    console.log("You lost a life!");
    lives--;
    if(lives === 0) {
      console.log("You lost!")
      const playAgain = confirm("Do you want to play again?");
      if (playAgain) {
        setup();
      }
    }
  }
  renderGame();
})

const livesEl = document.querySelector('#lives');
const hiddenWordEl = document.querySelector('#wordToGuess');

function setup() {
  lives = 5;
  hiddenWord = []
  chosenWord = movies[Math.floor(Math.random() * movies.length)].toLowerCase();
  livesEl.textContent = lives;
  
  for (let i = 0; i < chosenWord.length; i++) {
    hiddenWord.push('_');
  }
  hiddenWordEl.textContent = hiddenWord.join(' ');
}

function renderGame() {
  hiddenWordEl.textContent = hiddenWord.join(' ');
  livesEl.textContent = lives;
}

setup();