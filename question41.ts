// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array


// Array of magicain's names
const magicainNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger",
 "Professor Albus Dumbledore", "Ron Weasley"];

 function show_magicians(magicains: string[]): void
 {
    for (const items of magicains) {
        console.log(items);
    }
 }


//  Call the function to show the magician's names
show_magicians(magicainNames);