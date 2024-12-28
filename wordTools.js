const wordlist = require('wordlist-english')['english'];
var trie = require('trie-prefix-tree2').trie;

const allWordsTrie = trie.trie(wordlist);

function findAnagrams(letters){
    return allWordsTrie.subAnagrams(letters);
}
module.exports = { findAnagrams };