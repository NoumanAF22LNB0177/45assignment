"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// function to create a fruit object
function createFriut(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
// create an arry of fruits
const fruits = [
    createFriut("Apple", "Red", "Sweet"),
    createFriut("Mango", "Yellow", "Sweet"),
    createFriut("Orange", "Orange", "Citrusy"),
    createFriut("Grapes", "green", "Sweet"),
    createFriut("strawberry", "Red", "Sweet"),
];
// Access an invalid index
const invalidIndex = 10;
// tere are only 5 elements in the array, so that cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
// Print the fruits
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});
