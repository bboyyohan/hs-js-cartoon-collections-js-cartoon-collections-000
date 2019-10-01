function dwarfRollCall(dwarves) {
  var array = [];
  for(var i = 0; i < dwarves.length; i++) {
    array.push(`${i+1}. ${dwarves[i]} `);
  } return array.join("");
}

function summonCaptainPlanet(planteerCalls) {
  var array = [];
  for (var i = 0; i < planteerCalls.length; i++) {
    array.push(`${planteerCalls[i].toUpperCase()}!`);
  } return array;
}

function longPlanteerCalls(calls) {
  
}