// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference.
// Use the rest operator to handle the variable number of arguments.
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  const diff = numbers.reduce((acc, cur) => {
    return acc - cur;
  }, numbers[0]);

  return diff;
}

console.log(subtract(10, 2, 3)); // Example usage
