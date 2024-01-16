let personName = "waqas ahmed, first assignment of typescrit";
let titleCaseName = personName.split(" ");

console.log("Lower Case :" + personName.toLowerCase());
console.log("Upper Case :" + personName.toUpperCase());

for (let i = 0; i < titleCaseName.length; i++) {
  titleCaseName[i] =
    titleCaseName[i].charAt(0).toUpperCase() +
    titleCaseName[i].slice(1).toLowerCase();
}

console.log("Title Case: ", titleCaseName.join(" "));

export {};
