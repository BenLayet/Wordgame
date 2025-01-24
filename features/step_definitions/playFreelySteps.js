const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let currentOrder = '';

Given('the player has input the nine letters', function () {
  // Simulate inputting letters
  currentOrder = 'ABCDEFGHI';
});

When('the player moves the letters', function () {
  // Simulate moving letters
  currentOrder = 'BCDAEFGHI';
});

Then('the player should see the letters in his new order', function () {
  // Check if the letters are in the new order
  assert.strictEqual(currentOrder, 'BCDAEFGHI', 'The letters are not in the new order');
});