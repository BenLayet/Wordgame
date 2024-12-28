const wordlist = require('wordlist-english')['english'];
const trie = require('trie-prefix-tree2').trie;

const allWordsTrie = trie(wordlist);

function findAnagrams(letters) {
    return allWordsTrie.getAnagrams(letters);
}

module.exports = { findAnagrams };