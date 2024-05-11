import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
  // create a empty array
  const shoppingCart = [];
  //filter the data by the type property i.e. type === sweet
  return data.filter((item) => item.type === "sweet");
  //map through the filtered data to display only the item & price
  shoppingCart.push.map((product) => {
    return {
      item: product.item,
      price: product.price,
    };
  });

  return shoppingCart;
}

console.log(getSaleItems(products));

//alternative solution
function getSaleItems(data) {
  // filter the data by product.type -- only sweet
  return (
    data
      .filter((product) => product.type === "sweet")
      // loop through the data using map
      .map((product) => {
        // for every candy, return a new object with only item and price
        return {
          item: product.item,
          price: product.price,
        };
      })
  );
}

const shoppingCart = getSaleItems(products);
console.log(shoppingCart);

//alternative solution with destructuring of the array
function getSaleItems(data) {
  // filter the data by product.type -- only sweet
  return (
    data
      .filter((product) => product.type === "sweet")
      // loop through the data using map
      .map(({ item, price }) => {
        // for every candy, return a new object with only item and price
        return {
          item,
          price,
        };
      })
  );
}

export default [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
  },
  {
    item: "🍬",
    price: 0.89,
    type: "sweet",
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
  },
];
