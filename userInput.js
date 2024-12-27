const readline = require('readline');

function askForWord() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter a word: ', (word) => {
      rl.close();
      resolve(word);
    });
  });
}

module.exports = { askForWord };