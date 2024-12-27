const wordlist = require('wordlist-english')['english'];
const anagrams = require('anagrams');

function findAnagrams(letters){
    return wordlist.filter(word => anagrams(letters, word));
}
module.exports = { findAnagrams };