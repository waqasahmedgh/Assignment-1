/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

let greatMagName: string[] = [
  "David Copperfield",
  "David Blaine",
  "Shin Lim",
  "Derren Brown",
];

function makeGreat(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    console.log(`${magician[i]} the Great`);
  }
}

function showMagicians42(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    console.log(magician[i]);
  }
}
makeGreat(greatMagName);
showMagicians42(greatMagName);
