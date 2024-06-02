// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left =null
//         this.right = null
//     }
// }
// class BinaryTree{
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         this.root = this._insertRecursive(this.root,value)
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

//     findDepthOfNode(value){
//         return this._depathOfnode(this.root,value,0)
//     }
//     _depathOfnode(node,value,depth){
//         if(node=== null){
//             return -1
//         }
//         if(node.value===value){
//             return depth
//         }

//       let depthLeft= this._depathOfnode(node.left,value,depth+1)
//           if(depthLeft!==-1){
//             return depthLeft
//           }
//         return this._depathOfnode(node.right,value,depth+1)
//     }
// }
// const bst = new BinaryTree()

// bst.insert(4)
// bst.insert(7)
// bst.insert(9)
// bst.insert(30)
// bst.insert(43)

// console.log('depth of node is '+ bst.findDepthOfNode(30))

//depth of node

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
//         this.root=this._insertRecursive(this.root,value)
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

//     findDepthofNode(value){
//      return this._depthofNode(this.root,value,0)
//     }
//     _depthofNode(node,value,depth){
//         if(node===null){
//             return -1
//         }
//         if(node.value===value){
//             return depth
//         }

//         let leftDepth= this._depthofNode(node.left,value,depth+1)
//         if(leftDepth!==-1){
//             return leftDepth
//         }
//         return this._depthofNode(node.right,value,depth+1)
//     }

// }

// const bst = new  BinaryTree()
// bst.insert(3)
// bst.insert(7)
// bst.insert(9)
// bst.insert(11)
// console.log('depth of node is '+ bst.findDepthofNode(11))

class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryTree{
    constructor(){
        this.root =null
    }
    insert(value){
         this.root = this._inserRecursive(this.root,value)
    }
    _inserRecursive(node,value){
        if(node===null){
            return new TreeNode(value)
        }
        if(value<node.value){
            node.left=this._inserRecursive(node.left,value)
        }
        if(value>node.value){
            node.right=this._inserRecursive(node.right,value)
        }
        return node
    }
     findDepthOfNode(value){
        return this._depthofnode(this.root,value,0)
    }
    _depthofnode(node,value,depth){
        if(node===null){
            return -1
        }
        if(node.value===value){
            return depth
        }
        let leftnode=this._depthofnode(node.left,value,depth+1)
        if(leftnode!==-1){
            return leftnode
        }
        return this._depthofnode(node.right,value,depth+1)
    }
}
const bst = new BinaryTree()
bst.insert(2)
bst.insert(6)
bst.insert(9)
bst.insert(2)
console.log('depth of node is '+ bst.findDepthOfNode(9))


