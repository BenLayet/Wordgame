const userInput = require('./userInput');
const gridOperations = require('./gridOperations');
const wordTools = require('./wordTools');

async function main(){
  console.log('Welcome to the word game!');
  const letters = await userInput.askForWord();

  const anagrams = wordTools.findAnagrams(letters);
 
  console.log(`Anagrams: ${anagrams.join(', ')}`);

console.log('End of the game')
}

main();