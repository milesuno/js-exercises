// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index

function replace(arr, index, value) {
  var arr2 = [...arr];
  arr2.splice(index, 1, value); //This code was not working because I was returning the output of the arr.splice() not the mutated arr
  return arr2;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 1, 2);
var newNames = replace(names, 2, "Rares");

console.log('orginal', numbers);
console.log(newNumbers);
console.log('orginal', names);
console.log(newNames);
/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Ashleigh, Rares]
*/
