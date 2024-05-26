// class TreeNode{
//     constructor(){
//         this.childre={}
//         this.isEndofString= false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new TreeNode()
//     }
//     insert(word){
//         let node =  this.root
//         for(let char of word){
//             if(!node.childre[char]){
//                 node.childre[char]= new TreeNode()
//             }
//             node = node.childre[char]
//         }
//         this.isEndofString=true
//     }

//     printAllWords(){
//         let words=[]
//         const traverse= (node,path)=>{
//             if(this.isEndofString){
//                 words.push(path.join(''))
//             }
//             for(let char in node.childre){
//                 path.push(char)
//                 traverse(node.childre[char],path)
//                 path.pop()
//             }
//         }
//         traverse(this.root,[])
//         return words
//     }
// }

// const trie = new Trie()
// trie.insert('apple')
// trie.insert('banana')
// trie.insert('apricot')
// console.log('printed values is'+ trie.printAllWords())

// class TreeNode{
//     constructor(){
//         this.children={}
//         this.isEndString=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root= new TreeNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]= new TreeNode()
//             }
//             node=node.children[char]
//         }
//         node.isEndString=true
//     }
//     printAllWords()
// {
//     let words=[]

//    const traversa=(node,path)=>{
//       if(node.isEndString){
//         words.push(path.join(''))
//       }
//       for(let char in node.children){
//         path.push(char)
//         traversa(node.children[char],path)
//         path.pop()
//       }
//    }
//     traversa(this.root,[])
//    return words
// }}

// const trie = new Trie()
// trie.insert('apple')
// trie.insert('banana')
// trie.insert('aprico')

// console.log('trie is '+ trie.printAllWords())

// class TreeNode{
//     constructor(){
//         this.childre={}
//         this.isEndOfsring=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new TreeNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.childre[char]){
//                 node.childre[char]= new TreeNode()
//             }
//             node=node.childre[char]
//         }
//         node.isEndOfsring=true
//     }

//     printStrings(){
//         let words=[]
//         const travers=(node,path)=>{
//             if(node.isEndOfsring){
//                 words.push(path.join(''))
//             }

//             for(let char in node.childre){
//                path.push(char)
//                travers(node.childre[char],path)
//                path.pop()
//             }
//         }
//         travers(this.root,[])
//         return words
//     }
// }

// const trie= new Trie
// trie.insert('apple')
// trie.insert('banana')
// trie.insert('aprico')
// console.log('trie is '+ trie.printStrings())

// class TreeNode{
//     constructor(){
//         this.children={}
//         this.isEndOfString=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root= new TreeNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]= new TreeNode()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfString=true
//     }
//     printString(){
//         let words=[]
//         const traverse=(node,path)=>{
//             if(node.isEndOfString){
//                 words.push(path.join(''))
//             }

//             for(let char in node.children){
//                 path.push(char)
//                 traverse(node.children[char],path)
//                 path.pop()
//             }
//         }
//         traverse(this.root,[])
//         return words
//     }
// }
// const trie = new Trie()
// trie.insert('apple')
// trie.insert('banana')
// trie.insert('aprico')

// console.log('after trie  '+ trie.printString())

// class TreeNode {
//   constructor() {
//     this.children = {};
//     this.isEndOfString = false;
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new TreeNode();
//   }
//   insert(word) {
//     let node = this.root;
//     for (let char of word) {
//       if (!node.children[char]) {
//         node.children[char] = new TreeNode();
//       }
//       node = node.children[char];
//     }
//     node.isEndOfString = true;
//   }

//   printString() {
//     let words = [];
//     const travers = (node, path) => {
//       if (node.isEndOfString) {
//         words.push(path.join(""));
//       }
//       for (let char in node.children) {
//         path.push(char);
//         travers(node.children[char], path);
//         path.pop();
//       }
//     };
//     travers(this.root, []);
//     return words;
//   }
// }
// const trie = new Trie();
// trie.insert("apple");
// trie.insert("banana");
// trie.insert("aprico");

// console.log("trie is " + trie.printString());


// class TreeNode{
//     constructor(){
//         this.children={}
//         this.isEndOfSrtring=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root= new TreeNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new TreeNode()
//             }
//             node.children[char]=char
//         }
//         node.isEndOfSrtring=true
//     }
//     print(){
//         let words=[]
//         const traverse=(node,path)=>{
//             if(node.isEndOfSrtring){
//                 words.push(path.join(''))
//             }
//             for(let char in node.children){
//                 path.push(char)
//                 traverse(node.children[char],path)
//                 path.pop()
//             }
//         }
//         traverse(this.root,[])
//         return words
//     }
// }
// const trie=new Trie()
// trie.insert('apple')
// trie.insert('banana')
// trie.insert('apprico')
// console.log('trie is '+ trie.print())


// class TreeNode{
//     constructor(){
//         this.children={}
//         this.isEndOfString= false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new TreeNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new TreeNode()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfString=true
//     }
//     printStrings(){
//         let words=[]
//         const travers=(node,path)=>{
//             if(node.isEndOfString){
//                 words.push(path.join(''))
//             }
//             for(let char in node.children){
//                 path.push(char)
//                 travers(node.children[char],path)
//                 path.pop()
//             }
//         }
//         travers(this.root,[])
//         return words
//     }
// }

// const trie = new Trie()
// trie.insert('apple')
// trie.insert('banana')
// trie.insert('apprico')
// console.log('trie is +'+ trie.printStrings())


// class TreeNode{
//     constructor(){
//         this.children={}
//         this.isEndOfString=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root= new TreeNode()
//     }
//     insert(word){
//         let node = this.root
//          for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]= new TreeNode()
//             }
//             node=node.children[char]
//          }
//          node.isEndOfString=true
//     }

//     printAllWords(){
//         let words=[]
//         const travese=(node,path)=>{
//             if(node.isEndOfString){
//                 words.push(path.join(''))
//             }
//             for(let char in node.children){
//                 path.push(char)
//                 travese(node.children[char],path)
//                 path.pop()
//             }
//         }
//         travese(this.root,[])
//         return words
//     }
// }

// const trie= new Trie()
// trie.insert('apple')
// trie.insert('apprico')
// trie.insert('banana')

// console.log( trie.printAllWords())


// class TreeNode{
//     constructor(){
//         this.children={}
//         this.isEndOfString=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root= new TreeNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new TreeNode()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfString=true
//     }

//     printAllWords(){
//         let words=[]
//         const travers=(node,path)=>{
//             if(node.isEndOfString){
//                 words.push(path.join(''))
//             }
//             for(let char in node.children){
//                  path.push(char)
//                  travers(node.children[char],path)
//                  path.pop()
//             }
//         }
//         travers(this.root,[])
//         return words
//     }
// }

// const trie = new Trie()
// trie.insert('apple')
// trie.insert('banana')
// trie.insert('apprico')

// console.log(trie.printAllWords())

class TreeNode{
    constructor(){
        this.children={}
        this.isEndOfString=false
    }
}
class Trie{
    constructor(){
        this.root= new TreeNode()
    }
    insert(word){
        let node = this.root
          for(let char of word){
            if(!node.children[char]){
                node.children[char]= new TreeNode()
            }
            node=node.children[char]
          }
          node.isEndOfString= true
    }

    printAllWords(){
        let words=[]
        const travers=(node,path)=>{
            if(node.isEndOfString){
                words.push(path.join(''))
            }
            for(let char in node.children){
                    path.push(char)
                    travers(node.children[char],path)
                     path.pop()
            }
        }
        
        travers(this.root,[])
        return words
    }
}

const trie = new Trie()
trie.insert('apple')
trie.insert('banana')
trie.insert('apprico')

console.log(trie.printAllWords())