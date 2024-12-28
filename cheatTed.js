const { calculatePoints } = require('./tedPolicies');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function cheatTed(userInput, wordTools, gridOperations, userDisplay) {
  userDisplay.showMessage('Welcome');

  const letters = await userInput.askForWord();
  const anagrams = wordTools.findAnagrams(letters);
  assert(anagrams.length > 0, 'No anagram found');
  
  anagrams.sort((a, b) => calculatePoints(a) - calculatePoints(b));
  
  const word = await userInput.chooseOne(anagrams);

  const analysis = gridOperations.analyse(letters, word);

  userDisplay.showAnalysis(analysis);

  userDisplay.showMessage('End of the game');
}

module.exports = { cheatTed };