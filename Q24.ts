/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

console.log("Is subaru == subaru? I predict True.");
console.log("subaru" == "subaru");

console.log("Is Toyota != 'Honda'? I predict True.");
//console.log("Toyota" != "Honda");

console.log("Is SUBARU in LOWER CASE == subaru? I predict True.");
//console.log("SUBARU".toLowerCase == "subaru");

console.log("The 10 is equal to 10 ? I predict True.");
console.log(10 == 10);

console.log("The 10 is not equal to 100 ? I predict True.");
// console.log(10 !== 100);

console.log("The 20 is greater than 10 ? I predict True.");
console.log(20 > 10);

console.log("The 10 is less than 20 ? I predict True.");
console.log(10 < 20);

console.log("The 20 is greater than and equal to 10 ? I predict True.");
console.log(20 >= 20);

console.log("The 10 is less than equal to 20 ? I predict True.");
console.log(10 <= 20);

console.log("The 10 is less than 20 and 30 is less than 40 ? I predict True.");
console.log(10 < 20 && 30 < 40);

console.log("The 10 is less than 20 or 30 is less than 40 ? I predict True.");
console.log(10 < 20 || 30 < 40);

let arrNum: number[] = [1, 2, 3, 4, 5];
console.log("Original Array ", arrNum);
console.log(`${arrNum.includes(2)}, 2 value found in array`);

console.log(`${arrNum.includes(6)}, 6 value not found in array`);
