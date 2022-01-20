const keyEl = document.querySelector('#key');


// KEYUP EVENT ONLY FIRES WHEN FINGER IS LIFTED FROM PRESSED KEY
// document.body.addEventListener('keyup', function(event) {
//   keyEl.textContent += event.key;
// })

document.body.addEventListener('keydown', function(event) {
  keyEl.textContent += event.key;
})