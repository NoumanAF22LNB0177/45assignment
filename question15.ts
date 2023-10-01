// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList: Array<string> = [
  "Sir Jahanzaib Tayyab",
  "Sir Zia Khan",
  "Sir kamran",
  "Sir Abid Shirwani",
  "Sir Arsalan"
];

// Step 1. Print the name of person who can't make it.

let guestHowCantMakeIt: string = "Sir kamran"
console.log(`${guestHowCantMakeIt} can't make it to dinner`)

// Step 2 Replace the name of the guest who can’t make it

let NewGuest: string ="Sir Jahanzaid Tayyab"
let indexOfguestHowCantMakeIt: number = guestList.indexOf
(guestHowCantMakeIt)
console.log(indexOfguestHowCantMakeIt)

if (indexOfguestHowCantMakeIt !== -1) 
{
  guestList[indexOfguestHowCantMakeIt] = NewGuest
}
console.log(guestList[1])

// Step 3 Print a second set of invitation messages
console.log("Second set of invitation message:")
guestList.forEach((guest:string) =>
{
  console.log(`Dear ${guest}, you are invited to dinner.`)
})
export{guestList}