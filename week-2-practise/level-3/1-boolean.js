// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain


//var isHappy value is string "false" not boolean false. This is a falsy. Data that JS deems equal to false/0.
var isHappy = "false";

if (isHappy == true) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
