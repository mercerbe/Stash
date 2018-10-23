// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//==========================================================//

// //simple solution
// function reverse(str) {
//   //turn string to array
//   const arr = str.split("");
//   //reverse the array
//   arr.reverse();
//   //return joined array
//   return arr.join("");
// }

//simple solution w/o arr constant
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// //loop and replace letters
// function reverse(str) {
//   let reversed = "";
//
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// // reduce helper
// function reverse(str) {
//   return str.split('').reduce((reversed, char)=> {
//     return char + reversed
//   }, '')
// }

// // reduce helper w/ es6
// function reverse(str) {
//   return str.split("").reduce((reversed, char) => char + reversed, "");
// }

module.exports = reverse;
