const userInput = require('./userInput');
const gridOperations = require('./gridOperations');
const wordTools = require('./wordTools');
const cheatTed = require('./cheatTed').cheatTed;

cheatTed(userInput, wordTools, gridOperations).catch(error => {
  console.error('An error occurred:', error.message);
});