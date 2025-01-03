const wordlist = require('wordlist-english')['english'];
const createTrie = require('trie-prefix-tree2').createTrie;

const trie = createTrie(wordlist);

function findAnagrams(letters) {
    return trie.getSubAnagrams(letters);
}

module.exports = { findAnagrams };