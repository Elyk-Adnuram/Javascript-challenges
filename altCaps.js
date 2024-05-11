/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  // assemble each character back into a new string
  let newStr = "";
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // uppercase every character with an even index
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
//alternative solution
// function altCaps(str) {
//   //turn string into an array
//   let newStr1 = str.split("");
//   //loop through array add conditional statement
//   for (let i = 0; i < newStr1.length; i + 2) {
//     if (i % 2 == 0) {
//       newStr1[i] = newStr1[i].toUpperCase();
//     }
//   }
//   //convert array back to string
//   let newStr = newStr1.join("");
//   return newStr;
// }

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
