class Trie {
    // Constructor, insert, and search methods...

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false; // Character not found
            }
            node = node.children[char];
        }
        return true; // Prefix exists
    }
}

// Continuing from the previous example...
console.log("Prefix search 'ap' in trie:", trie.startsWith("ap")); // Output: true
console.log("Prefix search 'ban' in trie:", trie.startsWith("ban")); // Output: true
console.log("Prefix search 'or' in trie:", trie.startsWith("or")); // Output: false
