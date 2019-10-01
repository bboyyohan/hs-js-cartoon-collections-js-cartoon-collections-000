function dwarfRollCall(dwarves) {
  var array = [];
  for(var i = 0; i < dwarves.length; i++) {
    array.push(`${i+1}. ${dwarves[i]} `);
  } return array.join("");
}

function summonCaptainPlanet(planeteerCalls) {
  var array = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`);
  } return array;
}

function longPlaneteerCalls(calls) {
  if (calls.length > 4) {
    return true;
  } else {
    return false;
  }
}

function findTheCheese(food) {
 for (var i = 0; i < food.length; i++) {
   if (food[i] === "cheddar" || food[i] === "gouda" || food[i] === "camembert") {
     return food[i];
   } 
 } return "no cheese!"
}
  
  
  
