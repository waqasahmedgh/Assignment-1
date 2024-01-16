/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/

function makeSandwich(...items: string[]): void {
  console.log("Sandwich order:");
  for (let i = 0; i < items.length; i++) {
    console.log(`  ${items[i]}`);
  }
}

makeSandwich("Chicken Burger", "Tomato", "Cheese");
makeSandwich("Zinger", "Double");
makeSandwich("Shami Burger");
