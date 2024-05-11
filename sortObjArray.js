import products from "./data.js";

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/
//sort items by price
function sortProducts(data) {
  //apply sort method by using compare function
  // in compare function target the price property of each object
  // a - b sorts numbers in ascending order and
  // b - a sorts numbers in descending order
  return data.sort((a, b) => a.price - b.price);
}
const listByCheapest = sortProducts(products);
console.log(listByCheapest);

//alternate solution
// function sortProducts(data){
//     return data.sort((a,b) => {
//         return a.price - b.price
//     });
// }

// const listByCheapest = sortProducts(products);

listByCheapest.forEach((item) => console.log(item.product, item.price));

export default [
  {
    product: "🍭",
    price: 2.99,
  },
  {
    product: "🍫",
    price: 0.99,
  },
  {
    product: "🏡",
    price: 40000000,
  },
  {
    product: "🧁",
    price: 0.99,
  },
  {
    product: "📚",
    price: 0.99,
  },
  {
    product: "⏰",
    price: 13.99,
  },
  {
    product: "🍬",
    price: 0.89,
  },
  {
    product: "🥎",
    price: 3.99,
  },
  {
    product: "🎸",
    price: 13.99,
  },
  {
    product: "🎨",
    price: 23.99,
  },
  {
    product: "💕",
    price: 0,
  },
];
