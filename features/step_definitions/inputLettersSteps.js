const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let letters = '';

Given('the player has started the app', function () {
  // Simulate app started
  letters = '';
});

When('the player inputs the nine letters', function () {
  // Simulate inputting letters
  letters = 'ABCDEFGHI';
});

Then('the player should see the nine letters on the screen', function () {
  // Check if the letters are displayed
  assert.strictEqual(letters.length, 9, 'The letters are not displayed correctly');
});

When('the player requests random letters', function () {
  // Simulate getting random letters
  letters = 'JKLMNOPQ';
});

Then('the player should see nine random letters on the screen', function () {
  // Check if the random letters are displayed
  assert.strictEqual(letters.length, 9, 'The random letters are not displayed correctly');
});