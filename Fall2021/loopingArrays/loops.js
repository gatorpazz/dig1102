for(let i = 0; i < 100; i++) {
  console.log(i);
}

for(let i = 0; i < 100; i += 5) {
  console.log(i);
}

for (let i = 50; i > 0; i -=5) {
  console.log(i);
}

for (let i = 50; i > 0; i--) {
  console.log(i);

  if( i === 43) {
    console.log("let i has reached 43")
  }


}

console.log("Outside the loop")

let i = 0;
while(i < 15) {
  console.log(i);
  i++;
}