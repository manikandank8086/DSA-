// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word) {
//         let node = this.root;
//         for (const char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }
// }

// // Example usage:
// const trie = new Trie();
// trie.insert("apple");
// trie.insert("banana");
// trie.insert("apricot");

// console.log("Trie after insertion:", trie);



class TreeNode{
    constructor(){
        this.children={}
        this.isEndofString=false
    }
}

class Trie{
    constructor(){
        this.root= new TreeNode()
    }

    insert(word){
        let node = this.root
        for(let char of children[word]){
            if(!node.children[char]){
                node.children[char]= new TreeNode()
            }
          node=node.children[char]
        }
        node.isEndofString=true
    }
}

const trie= new Trie()
trie.insert('apple')
trie.insert('banana')
trie.insert('apricot')
console.log('trie is '+ trie) 