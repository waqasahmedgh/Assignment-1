/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

console.log(`invite only two people for dinner`);

let guestList17: string[] = ["Asim", "Zahid", "Fahad", "Arif", "Mustafa"];
let remGuestList171 = guestList17.pop();
let remGuestList172 = guestList17.pop();
let remGuestList173 = guestList17.pop();
//guestList17.pop(); // remove the last element from the array

console.log(`${remGuestList171} Sorry, You are not invited for dinner`);
console.log(`${remGuestList172} Sorry, You are not invited for dinner`);
console.log(`${remGuestList173} Sorry, You are not invited for dinner`);

console.log(`Only ${guestList17}, you are invited for dinner`);

guestList17.pop();
guestList17.pop();

console.log("Empty List ", guestList17);
