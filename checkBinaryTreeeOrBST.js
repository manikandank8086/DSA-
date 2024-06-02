// const { Router } = require("express")

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
//        this.root=this._insertRecursive(this.root,value)
//     }
//     _insertRecursive(node,value){
//         if(node===null){
//             return new TreeNode(value)
//         }
//         if(value<node.value){
//             node.left=this._insertRecursive(node.left,value)
//         }
//         if(value>node.value){
//             node.right=this._insertRecursive(node.right,value)
//         }
//         return node
//     }

//     // isBST(){
//     //   return this._checkBstOrNot(this.root,-Infinity,+Infinity)
//     // }
//     // _checkBstOrNot(node,min,max){
//     //      if(node===null){
//     //         return true
//     //      }
//     //      if(node.value<=min || node.value>=max){
//     //         return false
//     //      }

//     //      return this._checkBstOrNot(node.left,min,node.value) && this._checkBstOrNot(node.right,max,node.value)
//     // }

//     checkBinaryTree(){
//         return this._checkBinaryTree(this.root,-Infinity,+Infinity)
//     }
//     _checkBinaryTree(node,min,max){
//         if(node===null){
//             return null
//         }

//         if(node.value<min || node.value>max){
//             return false
//         }
//          return this._checkBinaryTree(node.left,min,node.value) && this._checkBinaryTree(node.right,max,node.value)
//     }
// }

// const bst = new BinaryTree()
// bst.insert(3)
// bst.insert(6)
// bst.insert(7)
// bst.insert(8)
// // bst.root=new TreeNode(6)
// // bst.root.left=new TreeNode(10)
// // bst.root.right=new TreeNode(8)
// // bst.root.left.left=new TreeNode(88)
// // bst.root.left.right=new TreeNode(22)
// console.log(bst.checkBinaryTree())

class TreeNode{
    constructor(value) {
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
        this.root = this._insertRecursive(this.root,value)
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

    checkBinary(){
        return this._checkBinary(this.root,-Infinity,Infinity)
    }
    _checkBinary(node,min,max){
        if(node===null){
            return true
        }
        if(node.value<=min || node.value>=max){
             return false
        }
        return this._checkBinary(node.left,min,node.value) && this._checkBinary(node.right,node.value,max)
        // return this._checkBinary(node.left, min, node.value) && this._checkBinary(node.right, max, node.value)

    }
}

const bst = new BinaryTree()
bst.insert(3)
bst.insert(6)
bst.insert(7)
bst.insert(9)
console.log(bst.checkBinary())