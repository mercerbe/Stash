// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (n / 5 === 0) {
      return "fizz";
    }
    if (n / 5 === 0) {
      return "fizzbuzz";
    }
    return n;
  }
}

fizzBuzz(5);

module.exports = fizzBuzz;
