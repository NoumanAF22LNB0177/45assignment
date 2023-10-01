"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Array of magicain's names
const magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger",
    "Professor Albus Dumbledore", "Ron Weasley"];
function showmagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatmagicians = magicians.map(magician => `The Great ${magician}`);
    return greatmagicians;
}
// Modigy the array to add "the great" to each magician's name
const greatmagicianNames = make_great(magicianNames);
// Call the functions to show the  original magician's names
console.log("Original Magicians:");
showmagicians(magicianNames);
// Call the function to show the great magician's names
console.log("\nGreat Magicians");
showmagicians(greatmagicianNames);
