const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let solution = '';

Given('the player has input the nine letters', function () {
  // Simulate inputting letters
  solution = '';
});

When('the player requests the solution', function () {
  // Simulate getting the solution
  solution = 'FEDCBA';
});

Then('the player should see the correct words on the screen', function () {
  // Check if the solution is displayed
  assert.strictEqual(solution, 'FEDCBA', 'The solution is not displayed correctly');
});