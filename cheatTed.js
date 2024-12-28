async function cheatTed(userInput, wordTools) {
  console.log('Welcome');
  const letters = await userInput.askForWord();

  const anagrams = wordTools.findAnagrams(letters);

assert(anagrams.length>0,'No anagram found');
  const word = await userInput.chooseOne(anagrams);
 
  console.log(`Anagram: ${word}`);

  console.log('End of the game');
}



module.exports = { cheatTed };