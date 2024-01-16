/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function makeShirt37(Ssize: string = "L", msg: string = "I love Typescript") {
  console.log(`The Size of Shirt is ${Ssize} and ${msg}`);
}

makeShirt37();

makeShirt37("M");

makeShirt37("S", "Shirt Size is small");
