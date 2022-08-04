// return statements
// returns data to whatever has called the function
// execution of function stops after return statement - no code
// runs once the function returns
function addThreeNumbers(a, b, c) {
   return a + b + c;
   console.log("this does nothing"); // code is unreachable
}
// functions without a return statement always return "undefined"

// multiple functions can be defined within a file
// function return the sum of all possible multiplications of two numbers
// 2, 3
// (0 * 0) + (0 * 1) + (0 * 2) + (0 * 3) + (1 * 0) + (1 * 1)... (2 * 3)
function sumOfMultiples(x, y) {
   // when starting to write a function, figure out what you're returning
   // then define that value
   var sum = 0;

   for (var i = 0; i <= x; i++) {
      // console.log("i is: " + i);
      for (var j = 0; j <= y; j++) {
         // console.log("j is: " + j);
         sum += i * j;
         // console.log("i * j is: " + (i * j));
      }
   }

   return sum;
}

// var result = addThreeNumbers(6, 8, 246);
// console.log(result);

// console.log(sumOfMultiples(0, 0)); // expected output is: 0
// console.log(sumOfMultiples(1, 0)); // expected output is: 0
// console.log(sumOfMultiples(0, 1)); // expected output is: 0
// console.log(sumOfMultiples(1, 1)); // expected output is: 1
console.log(sumOfMultiples(2, 2)); // expected output is: 9