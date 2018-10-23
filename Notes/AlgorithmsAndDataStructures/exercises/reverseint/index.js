// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// .toString() turns ints into strings, then can use string based methods
// string to number using parseInt()
// function reverseInt(n) {
//   let reversed = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }

//using Math.sign()
function reverseInt(n) {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
