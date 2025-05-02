/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic

Prompt:

- Write a function called addTwoNumbers that accepts two numeric arguments and 
  returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

/* const addTwoNumbers = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return a + b;
};

console.log(addTwoNumbers(5, 10)); // 15
console.log(addTwoNumbers(10, -2)); // 8
console.log(addTwoNumbers(0, 0)); // 0
console.log(addTwoNumbers("Hello", 5)); // NaN
console.log(addTwoNumbers("Hello", "World")); // NaN */

/* const addTwoNumbers = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  return NaN;
};

console.log(addTwoNumbers(5, 10)); // 15
console.log(addTwoNumbers(10, -2)); // 8
console.log(addTwoNumbers(0, 0)); // 0
console.log(addTwoNumbers("Hello", false)); // NaN
console.log(addTwoNumbers(true, false)); // NaN */

let userInput = prompt(
  "Guess a number between 1 and 100. You have 5 attempts."
); // Prompt user for input
let attempts = 5; // Number of attempts
let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

while (attempts > 0) {
  // Loop until attempts are 0
  if (userInput === null) {
    console.log("You did not enter a valid input. The program will now exit.");
    process.exit(); // Exit if user did not enter anything
  } else if (isNaN(userInput)) {
    // Check if input is not a number
    console.log("You did not enter a valid number. The program will now exit.");
    process.exit(); // Exit if user did not enter a valid number
  } else if (Number(userInput) === randomNumber) {
    console.log("Congratulations! You guessed the number.");
    process.exit(); // Exit if user guessed the number
  } else if (Number(userInput) < randomNumber) {
    console.log("Too low! Try again.");
  } else if (Number(userInput) > randomNumber) {
    console.log("Too high! Try again.");
  }
  attempts--; // Decrease attempts by 1
  userInput = prompt(`You have ${attempts} attempts left. Guess again:`); // Prompt user for input again
}

if (attempts === 0) {
  // If attempts are 0, user has lost
  console.log(
    `Sorry, you've run out of attempts. The number was ${randomNumber}.`
  );
}
