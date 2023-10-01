"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Nouman Aslam";
// step 1 show in lower case:
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// setp 2 show name in uppercase
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// step 3 show in titlecase
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].toLowerCase() + "";
}
console.log(titlecaseName);
