/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  // split sentence into an array of words
  const sentenceArr = str.split(" ");
  // loop through the arrays of words and capitalizeWord func on each word
  const capArr = sentenceArr.map((word) => capitalizeWord(word));
  // join sentence arr back into a string
  return capArr.join();
}

//alternative solutions
function capitalizeWord(word) {
  let firstLetter = word[0].toUpperCase();
  let restOfWord = word.slice(1);
  let newWord = firstLetter + restOfWord;
  return newWord;
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  //variable to hold updated string
  let newStr = "";
  //obtain every word in string
  let splitStr = str.split(" ");
  //loop through array of words and apply previous function
  for (let i = 0; i < splitStr.length; i++) {
    newStr += capitalizeWord(splitStr[i]) + " ";
  }
  return newStr;
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
