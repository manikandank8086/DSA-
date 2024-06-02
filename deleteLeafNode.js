// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         this.root = this._insertValue(this.root, value);
//     }

//     _insertValue(node, value) {
//         if (node == null) {
//             return new TreeNode(value);
//         }
//         if (value < node.value) {
//             node.left = this._insertValue(node.left, value);
//         } else if (value > node.value) {
//             node.right = this._insertValue(node.right, value);
//         }
//         return node;
//     }

//     removeLeafNode(target) {
//         this.root = this.dfs(this.root, target);
//     }

//     dfs(node, target) {
//         if (!node) return null;
//         node.left = this.dfs(node.left, target);
//         node.right = this.dfs(node.right, target);
//         // Check if the current node is a leaf node with the target value
//         if (!node.left && !node.right && node.value === target) {
//             // If it is a leaf node with the target value, return null to remove it
//             return null;
//         }
//         return node;
//     }

//     InorderTraversal() {
//         return this.inorderRecursive(this.root);
//     }

//     inorderRecursive(node) {
//         if (node !== null) {
//             this.inorderRecursive(node.left);
//             console.log(node.value);
//             this.inorderRecursive(node.right);
//         }
//     }
// }

// const bts = new BinaryTree();
// bts.insert(3);
// bts.insert(4);
// bts.insert(5);
// bts.insert(6);
// bts.insert(7);
// bts.insert(8);
// bts.insert(9);

// console.log("Inorder Traversal:");
// bts.InorderTraversal();

// bts.removeLeafNode(3);
// console.log('After removing leaf node with value 3:');
// bts.InorderTraversal();


// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinaryTree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         this.root= this.insertRecursive(this.root,value)
//     }
//     insertRecursive(node,value){
//         if(node===null){
//             return new TreeNode(value)
//         }
//         if(value<node.value){
//             node.left=this.insertRecursive(node.left,value)
//         }
//         if(value>node.value){
//             node.right=this.insertRecursive(node.right,value)
//         }
//         return node
//     }

//     removeLeafNode(){
//         this.root=this.removeRecursive(this.root)
//     }
//     removeRecursive(node){
//         if(!node) return null
//         node.left=this.removeRecursive(node.left)
//         node.right=this.removeRecursive(node.right)

//         if(!node.left && !node.right){
//             return null
//         }
//         return node
//     }

//     PreOrderTraverse(){
//          this.RecursiveTraverse(this.root)
//     }
//     RecursiveTraverse(node){
//         if(node!==null){
//             console.log(node.value)
//             this.RecursiveTraverse(node.left)
//             this.RecursiveTraverse(node.right)
//         }
//     }
// }
// const tree=new BinaryTree()
// tree.insert(3)
// tree.insert(4)
// tree.insert(4)
// tree.insert(6)
// tree.insert(7)

// console.log('value is ')
// tree.PreOrderTraverse()
// tree.removeLeafNode()
// console.log('after removal')
// tree.PreOrderTraverse()



class TreeNode{
    constructor(value){
        this.value=value
        this.left = null
        this.right =null
    }
}
class BinaryTree{
    constructor(){
       this.root=null
    }
    insert(value){
        this.root=this._insertRecursive(this.root,value)
    }
    _insertRecursive(node,value){
        if(node===null){
            return new TreeNode(value)
        }
        if(value<node.value){
             node.left=this._insertRecursive(node.left,value)
        }
        if(value>node.value){
            node.right=this._insertRecursive(node.right,value)
        }
        return node
    }

      search(value){
        return this._searchValue(this.root,value)
      }
      _searchValue(node,value){
        if(node===null){
            return false
        }
        if(node.value===value){
            return true
        }
        if(value<node.value){
             return this._searchValue(node.left,value)
        }else{
           return this._searchValue(node.right,value)
        }
      }
    }

const bst = new BinaryTree()
bst.insert(4)
bst.insert(3)
bst.insert(8)
bst.insert(19)
console.log('searched value is '+ bst.search(4))