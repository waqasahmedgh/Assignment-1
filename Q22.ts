// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let numArray: number[] = [1, 2, 3, 4, 5];

// console.log(`Index Error ${numArray[6]}`);

if (numArray[6] == undefined) {
  console.log("Index Error");
}

console.log(`Correct Index ${numArray[4]}`);
