// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let GuestList: Array<string> = [
  "Sir Jahanzaib Tayyab",
  "Sir Zia Khan",
  "Sir kamran",
  "Sir Abid Shirwani",
];

// Step 1 informing people that you found a bigger dinner table.
for(let guest of GuestList) {
   console.log(`Hello, ${guest}, we found a bigger dinner table.`)
}

// Step 2 Add one new guest to the beginning of array.
let newGuestAtBeginning: string ="Abdullah"
GuestList. unshift(newGuestAtBeginning)

console.log(GuestList)

// step 2 Add one new guest to the middle of array
let newGuestInMiddle: string = "Ali"
let middleIndex: number = Math.floor(GuestList.length/2)
GuestList.splice(middleIndex, 0, newGuestInMiddle)

console.log(GuestList)

// step 4 use append() to add new guest to the end of your list

let newGuestAtEnd: string = "Muhammad Abdullah"
GuestList.push(newGuestAtEnd)

console.log(GuestList)
// Final step

console.log("new set of invitation message:")

for(let guest of GuestList)
{
  console.log(`dear ${guest}, you are invited to dinner`)
}