/*  
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// Solution 1: for loop
function isPalindrome(str) {
  //create empty variable to store reversed string
  let reversedStr = "";
  //loop through string in reverse and allocate to above variable
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  // compare reversed string to original string to determine if palindrome
  if (reversedStr == str) {
    //as this condition will inherently return true or false, the can be shortened to code on line 30
    return true;
  } else {
    return false;
  }
  // return reverseStr === str;
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("motorbike"));
