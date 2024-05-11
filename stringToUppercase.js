/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
function panic(str) {
  return str.split(" ").join(" 😱 ").toUpperCase() + "!";
}

//alternative solution
function panic(sentence) {
  //use the replace method and a regular expression to replace each empty space between words with the emoji
  let newSentence = sentence.replace(/ /g, " 😱 ");
  //return the newSentance variable as uppercase letters with a exclamation point
  return `${newSentence.toUpperCase()}!`;
}
// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
