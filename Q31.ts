/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let username2: string[] = ["admin", "waqas", "ali", "arif", "asim"];
let emptyUser: string[] = username2.splice(0, username2.length);

//console.log(username2.length);

if (username2.length == 0) {
  console.log("List of user name is empty. we need to find some user");
} else {
  console.log("List of user name is not empty");
}
