const wordlist = require('wordlist-english')['english'];
const anagrams = require('anagrams');

function findAnagrams(letters){
    return englishWords.filter(word => anagrams(input, word));
}
module.exports = { findAnagrams };