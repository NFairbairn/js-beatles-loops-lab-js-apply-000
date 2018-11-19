// add solution here

  function theBeatlesPlay(musicians, instruments) {
//creates an empty array
  var empty = [];
//adds counter, checks if counter is less than the quantity of musicians, incriments counter
  for(var i = 0; i < musicians.length; i++) {
//pushes the concatenated string calling my arrays and counter to the empty array
  empty.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return empty
    }



function johnLennonFacts(facts) {
//creates my counter
var counter = 0;
//checks if counter is less than how many facts are within the array
  while ( counter < facts.length) {
//calls the next fact using the counter, and adds a '!!!' at the end of the string.
    facts[counter]+='!!!';
//incriments the counter for the loop
    counter++;
}
return facts
}

//used the parameter 'number' because i need it to determine how long to run the loop
function iLoveTheBeatles(number) {
  var emptyArray = [];

  do {
//pushes the string to the empty array
     emptyArray.push('I love the Beatles!');
//incriments the counter for the loop
     number++;
  }
//sets parameter for the loop to keep going until its been executed 14 times
  while (number < 15);

  return emptyArray
}
