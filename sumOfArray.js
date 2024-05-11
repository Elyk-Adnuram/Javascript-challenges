/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50, 50, 50, 67, 60, 70, 78, 80, 80, 81, 90, 110];

//using forEach method
function sumArray(arr) {
  let total = 0;
  //loop through each item in array
  arr.forEach((item) => {
    //add item to a variable
    total += item;
  });
  return total;
}

//using the built-in reduce method
function sumArray(arr) {
  //loop through each item in array and apply the callback function
  const total = arr.reduce((prev, curr) => {
    prev + curr;
  });
  return total;
}

console.log(sumArray(studentCount));
