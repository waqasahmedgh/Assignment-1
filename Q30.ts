/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

let username1: string[] = ["admin", "waqas", "ali", "arif", "asim"];

for (let i = 0; i < username1.length; i++) {
  console.log(`Hello ${username1[i]} , Greating`);
}

for (let i = 0; i < username1.length; i++) {
  if (username1.includes("admin")) {
    console.log("Hello Admin, would you like to see a status report?");
    break;
  } else {
    console.log(`Hello ${username1[i]}, thank you for logging in again`);
  }
}
