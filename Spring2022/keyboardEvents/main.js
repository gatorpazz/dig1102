// Click Events Review

// Grab the element with DOM methods
const button = document.querySelector('button');
// Add an event listener to that element
button.addEventListener('click', function() {
  alert("Button clicked")
})

// Keyboard events
// keydown
// document.body.addEventListener('keydown', function() {
//   console.log('Key went down')
// })
// keyup
document.body.addEventListener('keyup', function(event) {
  // Event is an optional parameter that gives you information about the event
  // console.log(event);
  console.log(event.key)
})