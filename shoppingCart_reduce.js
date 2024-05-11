import shoppingCart from "./data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr) {
  //create an array with only the prices
  return (
    arr
      .map((item) => item.price)
      // use reduce method to get a sum of the groceries
      .reduce((prev, current) => {
        return prev + current;
      })
      .toFixed(2)
  );
}

console.log(total(shoppingCart));

//alternate solution
function total(arr) {
  const total = arr.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return total.toFixed(2);
}

console.log(total(shoppingCart));

export default [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
    onSale: true,
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
    onSale: true,
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
    onSale: false,
  },
  {
    item: "🍬",
    price: 0.89,
    type: "sweet",
    onSale: false,
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
    onSale: false,
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
    onSale: true,
  },
];
