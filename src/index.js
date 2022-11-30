// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// let newNumber = [];

// numbers.forEach(function (x) {
//   newNumber.push(x * 2);
// });

// const newNumber = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.

// const newNumber = numbers.filter(function (num) {
//   return num < 10;
// });

// const newNumber = [];

// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumber.push(num);
//   }
// });

// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.
// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.reduce(function (accumulator, currentNum) {
//   console.log("Accumulator = " + accumulator);
//   console.log("Current Number = " + currentNum);

//   return accumulator + currentNum;
// });
// console.log(newNumber);

// let newNumber = 0;

// numbers.forEach(function (currentNum) {
//   newNumber += currentNum;
// });
// console.log(newNumber);

var numbers = [3, 56, 2, 48, 5];
//Find - find the first item that matches from an array.

const newNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber);

//FindIndex - find the index of the first item that matches.
