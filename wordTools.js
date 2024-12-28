const wordlist = require('wordlist-english')['english'];
const Trie = require('trie-prefix-tree2');

const allWordsTrie = Trie(wordlist);

function findAnagrams(letters) {
    return allWordsTrie.getAnagrams(letters);
}

module.exports = { findAnagrams };