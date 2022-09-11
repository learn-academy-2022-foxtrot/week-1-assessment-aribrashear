// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"];
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022";
// console.log(cohort.length);

// a) Your answer: I believe this will log "10" to the console. I know that the .length() method doesn't look at the index of the numbers, it simply counts the number of characters defined inside of the string, and I believe spaces also count as a character.

// b) Verify and explain: The output was 10! It's important to note it was 10 as a NUMBER and not a string, because it's performing a mathematical operation, so the returned value will be a number.

// --------------------2) What will this log?

const greeting = "Hello World!";
// console.log(greeting[4]);

// a) Your answer: I believe this code is checking to access the 4th index of an Array, but "Hello World!" is not an Array, so it will most likely return "undefined".

// b) Verify and explain: I was wrong! The output was "o". I didn't realize that the command [4] would check for the index of a character even outside of an array, because I previously thought that the method .indexOf() was the only way to do that. Good to know!

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"];
const index = 1;
// console.log(languages[index]);

// a) Your answer: I believe this will log the string "Ruby" to the console, because it's using the number 1 (set as the value for the variable index), and that value will be passed into the brackets to return what is located in index 1 of the array. It should be the same as:
// console.log(languages[1]).

// b) Verify and explain: I was correct! Even though we're passing a variable name into the array call, it's still going to use the value of that array, which is the number 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"];
// console.log(weekendDays.toUpperCase());

// a) Your answer: I'm not sure if this is going to work. Because the data is inside of an array, I believe you have to specify what element you want to apply the method to for it to work. Since this is applying the method to the ENTIRE array, I think it's going to either log the array as it is, or return an error.

// b) Verify and explain: I was right! It returned the error "weekendDays.toUpperCase is not a function". I'm not 100% sure why it thinks that the method call is a function, but I've actually seen this error before while helping some of my classmates with a previous question. Just to test it out, I'm going to try the code:

// console.log(weekendDays[0].toUpperCase());
// output: "SATURDAY"

// Yep! I was right, you have to specify what element you want to apply the method to. I would love to know why it thinks it's a function when you apply it to the whole array, though!

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"];
// console.log(typeof dataTypes.length);

// a) Your answer: I believe this is going to return "number". It's asking typeof to look at the LENGTH of the array, and not the array itself.

// b) Verify and explain: I was right! It was "number", because the length of the array dataTypes is 3, which is a number. If you typed: console.log(typeof dataTypes), it will return "object". (I know this because I checked in dev tools after I ran the code!)
