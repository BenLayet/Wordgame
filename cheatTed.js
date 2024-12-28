function assert(condition, message) {
  if (!condition) {
    throw message;
  }
}

async function cheatTed(userInput, wordTools) {
  console.log('Welcome');

  const letters = await userInput.askForWord();
  const anagrams = wordTools.findAnagrams(letters);
  assert(anagrams.length > 0, 'No anagram found');
  const word = await userInput.chooseOne(anagrams);
  console.log(`Anagram: ${word}`);

  console.log('Bye');
}

module.exports = { cheatTed };