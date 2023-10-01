"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//  Non-empty array case
const userNames = ["Nouman", "Abdullah", "Azan"];
// functional case
function greetUsers(userName) {
    if (userNames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
}
for (const userName of userNames) {
    if (userName.toLowerCase() === 'admine') {
        console.log('Hello admine, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName}, thank you for logging it again.`);
    }
}
console.log(`For non empty userName:\n`);
greetUsers(userNames);
//  to make array empty we just assinged empty array to userNames
console.log(`/n/n For empty username:\n`);
greetUsers(userNames);
