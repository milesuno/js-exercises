/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/* EXPECTED OUTPUT */

var fizzBuzz = arr.map(num => num).forEach((num) => {
  if (num % 3 == 0 && num % 5 == 0){
    return console.log(num = "FizzBuzz");
  } else if (num % 3 == 0){
    return console.log(num = "Fizz");
  } else if (num % 5 == 0){
    return console.log(num = "Buzz");
  } else {
    return console.log(num);
  };

//   switch(num){
//     case num % 3 == 0:
//       console.log(num = "Fizz");
//       break;
//     case num % 5 == 0:
//       console.log(num = "Buzz");
//       break;
//     case num % 3 == 0 && num % 5 == 0:
//       console.log(num = "FizzBuzz");
//     default:
//        console.log(num);
//        break;
//   };
})

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
