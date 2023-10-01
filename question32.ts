// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// step 1 arrays
const current_users: string[] = ["Nouman", "Abdullah", "Ali", "Faizan"];

const new_users: string[] = ["Azan", "Hussain", "Ahmad", "Zain"];

// step 2 function 

function checkUserNames(current_users: string[], new_users: string[]): void
{
    const lowercasedCurrentUser = current_users.map(user => user.toLowerCase());

for (const newUser of new_users) {
    const lowercasedNewUser = newUser.toLowerCase();
    if (lowercasedCurrentUser.includes(lowercasedNewUser)) {
        console.log(`Username "${newUser}" is already taken. please enter anew username.`);
} else {
    console.log(`Username "${newUser}" is available.`);
}
}
}

//  console.log(current_user)

// Test the function


checkUserNames(current_users, new_users);