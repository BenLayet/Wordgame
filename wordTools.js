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
function findAnagrams(letters){
    return wordlist.filter(word => anagrams(letters, word));
}


module.exports = { askForWord, findAnagrams};