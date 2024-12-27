const wordlist = require('wordlist-english')['english'];
const anagrams = require('anagrams');

function findAnagrams(letters){
    return wordlist.filter(word => anagrams(input, word));
}
module.exports = { findAnagrams };