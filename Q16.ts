// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let guestList16: string[] = ["Asim", "Zahid", "Fahad"];

console.log(`${guestList16} found a bigger dinner table`);

// Add new guest to the beginning of your array.

guestList16.unshift("Arif");
guestList16.unshift("Asif");
guestList16.unshift("Imran");

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list

let midNewGuest: number = Math.floor(guestList16.length / 2);

console.log("----------------------");
guestList16.splice(midNewGuest, 0, "Mustafa");
for (let c = 0; c < guestList16.length; c++) {
  console.log(`Hello ${guestList16[c]} , you are invited for dinner`);
}
//console.log(guestList16);
