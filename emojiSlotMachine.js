function plusMinus(arr) {
  const positiveArray = [];
  const negativeArray = [];
  const zeroArray = [];
  const newArray = [];
  // loop through array
  arr.forEach((item) => {
    // if element in array is more than zero,save in separate arr
    if (item > 0) {
      positiveArray.push(item);
    }
    //if element less than zero, save
    else if (item < 0) {
      negativeArray.push(item);
    }
    //if element equals zero, save
    else {
      zeroArray.push(item);
    }
    const positives = (positiveArray.length / arr.length).toFixed(5);
    const negatives = (negativeArray.length / arr.length).toFixed(5);
    const zeros = (zeroArray.length / arr.length).toFixed(5);
    newArray.push(positives, negatives, zeros);
  });
  return newArray;
}

const anArr = [-4, 3, -9, 0, 4, 1];

plusMinus(anArr);

// /*
//    Let's create an emoji slot machine! Replace the hardcoded
//    data with random fruit emojis from an emojis API.

//    - Request emoji food data from the API resource below. Log it and look at it!
//         - Write a function that takes in the data and returns a new array of only
//         fruit emoji objects
//         - Write a function to get 9 random fruits from your new array of fruit

//    - Load nine random fruits into the slot machine
// */

// const slotMachine = document.querySelector(".emoji-slots-game");
// const food = "https://apis.scrimba.com/emojihub/api/all/category/food-and-drink";

// function makeFruitArray(arr) {
//   // filter by group prop, looking for a str that includes the word "fruit"
//   return arr.filter((emoji) => emoji.group.includes("fruit"));
// }

// function getRandomFruits(arr) {
//   // initialize a new arr to hold 9 random fruits
//   const randomFruits = [];
//   // create a loop 0 - 9
//   for (let i = 0; i < 9; i++) {
//     // generate a random num
//     // use the random number as an index to choose a random fruit from the fruit arr
//     // push the random fruit into new arr
//     let randNum = Math.floor(Math.random() * arr.length);
//     randomFruits.push(arr[randNum]);
//   }
//   console.log(randomFruits.length);
//   return randomFruits;
// }

// // write your fetch request here
// fetch(food)
//   .then((response) => response.json())
//   .then((result) => makeFruitArray(result))
//   .then((fruits) => getRandomFruits(fruits))
//   .then((fruit) => {
//     fruit.forEach((fruit) => {
//       slotMachine.innerHTML += `
//                 <li>
//                     ${fruit.htmlCode}
//                 </li>
//             `;
//     });
//   })
//   .catch((err) => console.log(err));

// /*
//     HTML
//     <!doctype html>
// <html>
//     <head>
//         <link rel="stylesheet" href="index.css">
//     </head>
//     <body>
//         <div class="container">
//             <ul class="emoji-slots-game">

//             </ul>
//         </div>
//         <script src="index.pack.js"></script>
//     </body>
// </html>
//     */

// /*
// CSS
// html, body {
//     margin: 0;
//     padding: 0;
// }

// .container {
//     height: 100vh;
//     min-height: 100vh;
//     display: flex;
//     background: red;
//     align-items: center;
//     justify-content: center;
// }

// .emoji-slots-game {
//     padding-left: 0;
//     min-width: 90%;
//     min-height: 60%;
//     display: flex;
//     border-radius: 5px;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: center;
//     background: white;
//     border: 12px solid gold;
// }

// .emoji-slots-game li {
//     list-style-type: none;
//     font-size: 3em;
//     display: flex;
//     flex-basis: 33.3333333%;
//     justify-content: center;
// }
//  */
