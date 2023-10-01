"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// step 1: Create an array to store Travle destinations.
let TravleDestinations = ["Madina Munawara", "Paris", "Islamabad", "America", "Murree"];
// step 2: Print your array in its original orders.
console.log("Original Order");
console.log(TravleDestinations);
// Step 3:  Print your array in alphabetical order without modifying the actual list.
console.log("\n alphabetical order without modifying the actual list.");
console.log([...TravleDestinations].sort());
// Step 4  Show that your array is still in its original order by printing it.
console.log("Showing array is still in its original order.");
console.log(TravleDestinations);
// Step 5 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n reverse alphabetical order without modifying the actual list.");
console.log([...TravleDestinations].sort().reverse());
// Step 6 Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order.");
console.log(TravleDestinations);
// Step 7 Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order");
TravleDestinations.reverse();
console.log(TravleDestinations);
// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nback to Original");
TravleDestinations.reverse();
console.log(TravleDestinations);
// Step 9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabetical order");
TravleDestinations.sort();
console.log(TravleDestinations);
// Step 10  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabetical order");
TravleDestinations.sort();
console.log(TravleDestinations);
