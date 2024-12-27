const userInput = require('./userInput');
const gridOperations = require('./gridOperations');
//const wordlist = require('./wordlist');

async function main(){
  console.log('Welcome to the word game!')
    const word = await userInput.askForWord();

  
  console.log(`Word: ${word}`);
}
main().then(()=>(console.log('End of the game')));
