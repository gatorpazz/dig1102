// LOOPING

// Changing Numbers
var num = 0;
num = num + 11;
// shorthand to add 11
num += 11;
num += 1;
num++;
num -= 10;
num--;

for(let i = 1; i < 6; i++) {
  console.log(i);  
}

for(let i = 5; i >= 0; i--) {
  console.log(i)
}

// WHILE LOOP
let numPeopleInRestaurant = 20;
while(numPeopleInRestaurant) {
  console.log("People are still eating");
  numPeopleInRestaurant--;
}
for(let i = 20; i > 0; i--) {
  console.log("People are still eating");
}