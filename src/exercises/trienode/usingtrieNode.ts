import { Trie } from "../classes/TrieNode";

const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); // true
console.log(trie.search("hell"));  // false