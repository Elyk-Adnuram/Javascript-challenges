/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/

const url = "https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature";
const flowerBed = document.querySelector(".emoji-flower-bed");

function clearTheGarden(arr) {
  // filter by group property - "animal bug" && "plant flower"
  return arr.filter((emoji) => emoji.group === "animal bug" || emoji.group === "plant flower");
}

fetch(url)
  .then((response) => response.json())
  .then((result) => clearTheGarden(result))
  .then((data) => {
    data.forEach((emoji) => {
      flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
    });
  })
  .catch((err) => console.log(err));

/*
CSS
html, body {
    margin: 0;
    padding: 0;
    text-align: center;
    background: tan;
}

.emoji-flower-bed {
    width: 70%; 
    min-height: 60vh;
    margin: auto;
    margin-top: 2em;
    padding-left: 0;
    border: 10px solid green;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: lightgreen;
    padding: 1em; 
    border-radius: 5px;
}
.emoji-flower-bed li {
    list-style-type: none;
    font-size: 2.5em;
    padding: 2px;
}
*/

/*HTML
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <ul class="emoji-flower-bed"></ul>
        <script src="index.pack.js"></script>
    </body>
</html>
*/
