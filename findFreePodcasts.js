import podcasts from "./data.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data) {
  //get all podcasts where paid === false
  let newArray = data.filter((item) => !item.paid);
  //loop through podcasts that are free using map and display only the title, rating and paid properties and their value in an object using {}
  let finalArr = newArray.map((item) => {
    return { title: item.title, rating: item.rating, paid: item.paid };
  });
  return finalArr;
}

console.log(getFreePodcasts(podcasts));

//other solution
function getFreePodcasts(data){
    // filter list by paid prop
    // use map to create a new array of objects with only the specified properties 
    return data
        .filter(item => item.paid === false)
        .map(podcast => {
            return {
                title: podcast.title,
                rating: podcast.rating,
                paid: podcast.paid
            }
        });
}

export default [
  {
    id: 1,
    title: "Scrimba Podcast",
    duration: 50,
    tags: ["education", "jobs", "technology"],
    hosts: ["Alex Booker"],
    rating: 10,
    genre: "education",
    paid: false,
  },
  {
    id: 2,
    title: "Crime Fan",
    duration: 150,
    tags: ["crime", "entertainment", "mature"],
    hosts: ["Bob Smith", "Camilla Lambert"],
    genre: "true crime",
    rating: 5,
    paid: true,
  },
  {
    id: 3,
    title: "Mythical Creatures",
    duration: 99,
    tags: ["entertainment", "general", "unicorns"],
    hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"],
    genre: "fantasy",
    rating: 8,
    paid: true,
  },
  {
    title: "Crime Crime Crime",
    duration: 70,
    tags: ["crime", "entertainment", "mature"],
    hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"],
    genre: "true crime",
    rating: 6,
    paid: true,
  },
  {
    title: "Something about Witches",
    duration: 35,
    tags: ["fantasy", "entertainment"],
    hosts: ["Frewin Wyrm", "Evanora Highmore"],
    genre: "fantasy",
    rating: 8,
    paid: false,
  },
  {
    title: "Coding Corner",
    duration: 55,
    tags: ["education", "jobs", "technology"],
    hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"],
    genre: "education",
    rating: 9,
    paid: false,
  },
];
