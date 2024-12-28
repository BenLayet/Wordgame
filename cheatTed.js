async function cheatTed(userInput, wordTools) {
  console.log('Welcome');
  const letters = await userInput.askForWord();

  const anagrams = wordTools.findAnagrams(letters);

  const word = await userInput.chooseOne(anagrams);
 
  console.log(`Anagram: ${word}`);

  console.log('End of the game');
}

module.exports = { cheatTed };