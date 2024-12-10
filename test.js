// Import the functions from the app.js file
const { sum, fromEuroToDollar } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test, call the sum function with 2 numbers
    let total = sum(14, 9);
    expect(total).toBe(23); // Use Jest's `toBe` matcher to validate the result
});

// Test for Euro to Dollar conversion
test("One euro should be 1.07 dollars", () => {
    // Call the fromEuroToDollar function
    const dollars = fromEuroToDollar(3.5); // Assume it returns a single number
    const expected = 3.5 * 1.07; // Calculate the expected result
    expect(dollars).toBeCloseTo(expected); // Use Jest's `toBeCloseTo` matcher for floating-point comparison
});
