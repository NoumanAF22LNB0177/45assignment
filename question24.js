"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2);
// false
console.log(str1 !== str2);
//  True
// • Tests using the lower case function
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2);
// True
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2);
// False
console.log(num1 !== num2);
//  True
console.log(num1 > num2);
// False
console.log(num1 >= num2);
// True
console.log(num1 < num2);
// False
console.log(num1 <= num2);
//  True
// • Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 20;
console.log(x < y && y < z);
// True, both conditions are true
console.log(x < y || y < z);
// True, at least one conditions is true
console.log(x < y && y < z);
// False, both conditions are false
console.log(x < y || y < z);
// False, both conditions are false
// • Test whether an item is in a array
const Fruits = ['apple', 'mango', 'orange', 'banana'];
console.log(Fruits.includes('Banana'));
// True
console.log(Fruits.includes('kiwi'));
// False
// • Test whether an item is not in a array
const colors = ['red', 'orange', 'blue', 'yellow'];
console.log(!colors.includes('purple'));
//  True
console.log(!colors.includes('green'));
// false
