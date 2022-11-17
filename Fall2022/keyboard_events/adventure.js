document.body.addEventListener('keyup', function(event) {
  if(event.key.toUpperCase() === 'F') {
    alert("You got eaten by a bear")
  } else if(event.key.toUpperCase() === 'N') {
    alert("You went home safetly")
  }
})