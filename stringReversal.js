/* We Come in Peace!   
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/
//reverse string manually
function reverseString(str) {
  //variable to hold new string
  let reversedStr = "";
  //loop through string in reverse
  for (let i = str.length - 1; i > 0; i--) {
    //attached reversed string letters to variable
    reversedStr += str[i];
  }
  return reversedStr;
}

//alternative solution with "for of" loop
function reverseString(str) {
  //variable to hold new string
  let reversedstr = "";   
  for (let letter of str) {
    //add each letter to reversed variable starting at the end of str
    reversed = letter + reversed; 
  }
  return reversed;
}

//reverse string using built in methods
function reverseString(str) {
  //split str to array. reverse and join back to string
  return str.split("").reverse().join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

//using previous function inside this function
function reverseStringsInArray(arr) {
  //map through array and apply prevous function on each element of array
  const newArray = arr.map((string) => reverseString(string));
  return newArray;
}

//using built-in methods
function reverseStringsInArray(arr) {
  //map through array and apply built in methods
  const newArray = arr.map((string) => string.split("").reverse().join(""));
  return newArray;
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));
