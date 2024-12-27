const readline = require('readline');

function askForWord() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter letters: ', (letters) => {
      rl.close();
      resolve(letters);
    });
  });
}

module.exports = { askForWord };