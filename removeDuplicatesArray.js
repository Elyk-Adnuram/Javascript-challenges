// /* Chef Mario's Recipe Book
// Chef Mario was in the middle of writing his cookbook masterpiece
// when he spilled coffee on his keyboard! Now all his recipes have repeat
// ingredients.

// Help save Chef Mario's cookbook by writing a function that takes in an array
// and returns a new array with all the duplicates removed.

// Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
// Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
// */

// const eggScrambleRecipe = [
//   "🥓 bacon",
//   "🥓 bacon",
//   "🍳 eggs",
//   "🫑 green peppers",
//   "🧀 cheese",
//   "🌶️ hot sauce",
//   "🥓 bacon",
//   "🥦 broccoli",
//   "🧀 cheese",
//   "🥦 broccoli",
//   "🌶️ hot sauce",
// ];

// function removeDupesFromArray(arr) {
//   //create new empty array
//   const updatedArray = [];
//   //loop through exisiting array
//   arr.forEach((item) => {
//     //if new array does not contain element from existing array add it to new array
//     //if item already exists in new array, do nothing
//     if (!updatedArray.includes(item)) {
//       updatedArray.push(item);
//     }
//   });
//   return updatedArray;
// }

// //alternative solution with object
// function removeDupesFromArray(arr) {
//   // create a new object to keep track of duplicates
//   // use filter to loop thorugh each item in the arr
//   // for each item in arr
//   // look up the item in the lookup table
//   // if the item does NOT exist in the lookup, add it and return true
//   // return false

//   const trackDupes = {};

//   return arr.filter((item) => {
//     if (!trackDupes[item]) {
//       trackDupes[item] = true;
//       return true;
//     }
//     return false;
//   });
// }
// console.log(removeDupesFromArray(eggScrambleRecipe));

// //alternative solution using Set. A Set automatically removes duplicates
// function removeDupesFromArray(arr) {
//   return [...new Set(arr)];
// }

// function matchingStrings(strings, queries) {
//   //empty array
//   let results = [];
//   //loop through strings array
//   strings.forEach((string) => {
//     //check if item in queries array exists in strings array
//     if (queries.includes(string)) {
//       results.push(string);
//     }
//   });
//   return results;
// }
function matchingStrings(strings, queries) {
  //empty array
  let results = [];
  //loop through strings array
  strings.forEach((string) => {
    //check if item in queries array exists in strings array
    if (queries.includes(string)) {
      results.push(string);
    }
  });

  const count = {};

  for (let ele of results) {
    if (count[ele]) {
      count[ele] += 1;
    } else {
      count[ele] = ;
    }
  }
  return count;
}
const strings = ["abc", "ab", "ab"];
const queries = ["ab", "abc", "bc"];
console.log(matchingStrings(strings, queries));
