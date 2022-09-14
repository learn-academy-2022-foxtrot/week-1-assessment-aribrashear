// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple";
const fruit2 = "banana";
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// I need to use a conditional statement to accept the variable "temp" and compare it to the boiling point (212). I'll use an if / else statement for this purpose.
// I need a relational operator to compare the two values. I'll need to answer three questions:
// Is the temperature below the boiling point? (I can use less than (<) for this.)
// Is the temperature the same as the boiling point? (I can use strict equality for this (===)).
// Is the temperature above the boiling point? (I can use greater than (>) for this.)
// After each block of code, I'll need to add a console.log to let the user know what the outcome will be.
// After accounting for all three possibilities, I'll need to use the else statement to log an error message in case something goes wrong.

const temp = 42;
// Expected output: "42 is below boiling point"

// const temp = 350;
// Expected output: "350 is above boiling point"

// const temp = 212;
// Expected output: "212 is at boiling point"

if (temp < 212) {
  console.log(`${temp}° is below the boiling point!`);
} else if (temp === 212) {
  console.log(`${temp}° is at the boiling point!`);
} else if (temp > 212) {
  console.log(`${temp}° is above the boiling point!`);
} else {
  console.log("Whoops! Looks like we've hit an error.");
}

//----------- AFTER RUNNING -----------
// I tested the temp variable at 42, 350, 212, and with the string "temperature" to confirm that all outputs are working correctly. The statement seems to be functioning properly. (:

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

// In order to combine the two arrays, I'm going to need to concatenate them. I can do this using the .concat() method.
// First, I'll declare a variable to store the combined Arrays. I'll name it "padresTotalRuns" in case I want to add more values later. I'm also going to use let instead of const, since this might be updated later.
// Then, when I use the assignment operator, I'll input both the arrays with the .concat() method to combine and store them in the new array.
// In order to make the value of the new variable the TOTAL amount of runs, instead of all the numbers in a single Array, I'm going to use the .length() method after the .concat() method in order to convert it to the total amount.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
// Expected output: 9

let padresTotalRuns = padres1984WorldSeriesRuns.concat(
  padres1998WorldSeriesRuns
).length;
console.log(padresTotalRuns);

//----------- AFTER RUNNING -----------
// The output of the variable "padresTotalRuns" was 9 as expected when I ran the program. I also tested it by adding the number 5 into the first array, which returned a value of 10 (+1 element to the array, so 9 + 1) as expected.

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// In order to reverse the letters in the string "Foxtrot 2022", I'll first need to:
// Convert the data to an Array. I can do this with the .split() method.
// Use the .reverse() method to reverse the locations of each of the elements.
// Use the .join() method to convert the array back into a string.
// Wrap the code into a console.log() so that it's visible in the console.

const currentCohort = "Foxtrot 2022";
// Expected output: "2202 tortxoF"

console.log(currentCohort.split("").reverse().join(""));

//----------- AFTER RUNNING -----------
// The output I got was "2202 tortxoF", which matches the expected output!

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// To access the last index of any given element, I'll need to use the method .lastIndexOf(). This method will return the LAST index of any given value that I call it for.
// I'll use a console.log() with the variable the array is stored in with the .lastIndexOf() method in order to check that the output matches what I'm expecting it to for this assignment.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10];
const givenValue1 = 42;
// Expected output: 7

const givenValue2 = 10;
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue1));

//----------- AFTER RUNNING -----------
// The output I got for givenValue1 was 7 as expected, and the output I got for givenValue2 was 8 as expected. Code seems to be working! :D

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// This one is definitely a little confusing for me as far as methods go. After re-reading through the syllabus, I found the .sort() function which I believe will work well for this purpose. I'll need to console.log() the variable holding the array, then apply .sort() to it.
// In the given example on the syllabus, the function is looking for smallest to largest - ((a, b) => a - b).
// This function will take two arguments, a & b.
// Then, the function will subtract value b from value a.

// I had to do a little research to understand this one. Here's what I learned:
// The .sort() method cannot automatically work on numbers. You have to give it an argument so that the logic will understand what result you want.
// When the function runs, it's going to return a positive, negative, or 0 value.
// As the function continues to subtract numbers from each other, it's going to order them from either negative or positive numbers first depending on what argument you pass it. For our case, I wanted it to start with the negative integers, so I placed the second argument first in the function.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66];
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a));
console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a));

//----------- AFTER RUNNING -----------
// The output I got for sanDiegoSummerTemperatures was 82, 80, 79, 77, 76, 73, 72 as expected. The output I got for sanDiegoWinterTemperatures was 68, 67, 66, 66, 62, 59, 59 as expected. I feel like I mostly understand how this works, but I'm getting a little stuck on the math it's actually performing to the Array. I'm not sure if its subtracting ALL the numbers from each other, or just in chronological order.
