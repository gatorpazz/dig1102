const userchoice = prompt('Heads or tails?');

const cointoss = Math.floor(Math.random() * 2);
let coin;
if (cointoss === 0) {
  coin = 'heads';
} else {
  coin = 'tails';
}
console.log(coin)
console.log(userchoice)

let h1 = document.createElement('h1');
if (coin === userchoice) {
  h1.textContent = 'You got the coin toss correct!'
} else {
  h1.textContent = 'Bummer you got the coin toss wrong'
}
document.body.appendChild(h1);

const age = prompt("How old are you?");

if (age >= 21) {
  const h2 = document.createElement('h2');
  h2.textContent = "Welcome to the booze cruise!";
  document.body.appendChild(h2);
} else {
  window.location = 'https://www.familytalkaboutdrinking.com/';
}