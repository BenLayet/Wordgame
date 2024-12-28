const userInput = require('./userInput');
const gridOperations = require('./gridOperations');
const wordTools = require('./wordTools');
const userDisplay = require('./userDisplay');
const cheatTed = require('./cheatTed').cheatTed;

cheatTed(userInput, wordTools, gridOperations, userDisplay).catch(error => {
  console.error('An error occurred:', error);
});