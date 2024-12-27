const userInput = require('./userInput');
const gridOperations = require('./gridOperations');
const wordTools = require('./wordTools');

async function main(){
  console.log('Welcome to the word game!')
    const word = await  userInput.askForWord();

  const anagrams = wordTools.findAnagrams(word);
  
  console.log(`Word: ${word}`);
}
main().then(()=>(console.log('End of the game')));
