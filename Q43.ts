/*
Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

let greatMagName43: string[] = [
  "David Copperfield",
  "David Blaine",
  "Shin Lim",
  "Derren Brown",
];

function makeGreat43(magician: string[]) {
  let newMagician: string[] = [];
  for (let i = 0; i < magician.length; i++) {
    newMagician.push(`${magician[i]} the Great`);
  }
  return newMagician;
}

function showMagicians43(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    console.log(magician[i]);
  }
}
console.log(makeGreat43(greatMagName43));
showMagicians43(greatMagName43);
