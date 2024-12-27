const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

 async function askForWord(){
  return readline.question('Enter a word: ', word => {
    readline.close();
    return word;
  });
}

module.exports = {askForWord};
