let strip_name = "          Waqas Ahmed             ";
let strip_name1 = "\t       Waqas Ahmed            ";
let strip_name2 = "         Waqas Ahmed          \n  ";

console.log("White Space : " + strip_name);
console.log("Tab :" + strip_name1);
console.log("Next Line: " + strip_name2);

console.log("Stripping White Space :" + strip_name.trim());
console.log("Stripping Tab :" + strip_name1.trim());
console.log("Stripping Next Line :" + strip_name2.trim());
