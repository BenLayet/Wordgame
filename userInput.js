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
function chooseOne(options) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log('Choose one of the following options:');
    options.forEach((option, index) => {
      console.log(`${index + 1}: ${option}`);
    });

    rl.question('Enter the number of your choice: ', (choice) => {
      rl.close();
      const index = parseInt(choice, 10) - 1;
      if (index >= 0 && index < options.length) {
        resolve(options[index]);
      } else {
        console.log('Invalid choice, please try again.');
        resolve(chooseOne(options)); // Recursively call if invalid choice
      }
    });
  });
}
module.exports = { askForWord, chooseOne };