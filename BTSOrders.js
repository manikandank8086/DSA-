// class TreeNode{
//     constructor(value){
//         this.value=value
//        this.left=null
//        this.right=null
//     }
// }

const nodemon = require("nodemon")

// class BinaryTree{
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         this.root=this._insertRecursive(this.root,value)
//     }

//     _insertRecursive(node,value){
//         if(node==null){
//             return new TreeNode(value)
//         }
//         if(value < node.value){
//             node.left=this._insertRecursive(node.left,value)
//         }else if(value > node.value){
//             node.right=this._insertRecursive(node.right,value)
//         }
//         return node
//     }

//     preorderTraversal(node){
//         this._preorderRecursive(this.root)
//     }
//     _preorderRecursive(node){
//         if(node !== null){
//             console.log(node.value)
//             this._preorderRecursive(node.left)
//             this._preorderRecursive(node.right)
//         }
//     }

//     InorderTraverse(node){
//         this._innorderRecursive(this.root)
//     }
//       _innorderRecursive(node){
//         if(node !== null){
//             this._innorderRecursive(node.left)
//             console.log(node.value)
//             this._innorderRecursive(node.right)
//         }
//       }
//       postorderTraverse(node){
//         this._postorderRecursive(this.root)
//       }
//        _postorderRecursive(node){
//         if(node !==null){
//             this._postorderRecursive(node.left)
//             this._postorderRecursive(node.right)
//             console.log(node.value)
//         }
//        }
// }

// const bts = new BinaryTree()
// bts.insert(10)
// bts.insert(8)
// bts.insert(12)
// bts.insert(15)
// bts.insert(20)
// bts.insert(5)
// bts.insert(3)

// console.log('Innorder traversal is ')
// bts.InorderTraverse()
// console.log('preorder traversal')
// bts.preorderTraversal()
// console.log('post order')
// bts.postorderTraverse()


// class  TreeNode{
//     constructor (value){
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
//         if(node ===null){
//             return new TreeNode(value)
//         }
//         if(value <node.value){
//             node.left=this._insertRecursive(node.left,value)
//         }else if( value > node.value){
//             node.right=this._insertRecursive(node.right,value)
//         }
//         return node
//     }

//     PreOrderTraversal(node){
//         this._preOrderRecursive(this.root)
//     }
//     _preOrderRecursive(node){
//         if(node !==null){
//         console.log(node.value)
//         this._preOrderRecursive(node.left)
//         this._preOrderRecursive(node.right)
//         }
//     }

//     InnerOrderTraversal(node){
//         this._innerOrderRecursive(this.root)
//     }
//     _innerOrderRecursive(node){
//         if(node !==null){
//     this._innerOrderRecursive(node.left)
//     console.log(node.value)
//     this._innerOrderRecursive(node.right)
//     }
// }

//     PostOrderTraversal(node){
//         this._postorderRecursive(this.root)
//     }
//     _postorderRecursive(node){
//         if(node !==null){
//         this._postorderRecursive(node.left)
//         this._postorderRecursive(node.right)
//         console.log(node.value)
//         }
//     }

// }

// const bts = new BinaryTree()
// bts.insert(20)
// bts.insert(11)
// bts.insert(12)
// bts.insert(13)
// bts.insert(14)
// bts.insert(15)

// console.log('preOrder')
// bts.PreOrderTraversal()
// console.log('innOrder')
// bts.InnerOrderTraversal()
// console.log('post order')
// bts.PostOrderTraversal()



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
//         this.root= this._insertRecursive(this.root,value)
//     }
//     _insertRecursive(node,value){
//         if(node===null){
//             return new TreeNode(value)
//         }

//         if(value < node.value){
//              node.left=this._insertRecursive(node.left,value)
//         }else if(value>node.value){
//             node.right=this._insertRecursive(node.right,value)
//         }
//         return node
//     }

//     PreOrderTraverse(){
//         this._preOrderRecursive(this.root)
//     }
//     _preOrderRecursive(node){
//         if(node !==null){
//             console.log(node.value)
//             this._preOrderRecursive(node.left)
//             this._preOrderRecursive(node.right)
//         }

//     }

//     PostOrderTraversal(){
//         this._postOrderRecursive(this.root)
//     }
//     _postOrderRecursive(node){
//         if(node!==null){
//             this._postOrderRecursive(node.left)
//             this._postOrderRecursive(node.right)
//             console.log(node.value)
//         }
//     }
//     InerOrderTraversal(){
//         this.innerOrderRecursive(this.root)

//     }
//         innerOrderRecursive(node){
//             if(node !==null){
//                 this.innerOrderRecursive(node.left)
//                 console.log(node.value)
//                 this.innerOrderRecursive(node.right)
//             }
//         }
// }

// const bts = new BinaryTree()
// bts.insert(1)
// bts.insert(2)
// bts.insert(3)
// bts.insert(4)
// bts.insert(5)

// console.log('preOrder')
// bts.PreOrderTraverse()
// console.log('/n post order ')
// bts.PostOrderTraversal()
// console.log(' inner')
// bts.InerOrderTraversal()

// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left = null
//         this.right=null
//     }
// }
// class BinaryTree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         this.root=this._insertionRecursive(this.root,value)
//     }
//     _insertionRecursive(node,value){
//         if(node ===null){
//             return new TreeNode(value)
//         }
//         if(value < node.value){
//             node.left=this._insertionRecursive(node.left,value)
//         }else if(value>node.value){
//             node.right=this._insertionRecursive(node.right,value)
//         }
//         return node
        
//     }

//     PreOrderTraverse(){
//         this._preOrderRecursive(this.root)
//     }
//     _preOrderRecursive(node){
//         if(node !==null){
//         console.log(node.value)
//         this._preOrderRecursive(node.left)
//         this._preOrderRecursive(node.right)
//         }
//     }

//     PostOrderTraversal(){
//         this._postOrderTraversal(this.root)
//     }
//     _postOrderTraversal(node){
//         if(node !==null){
//             this._postOrderTraversal(node.left)
//             this._postOrderTraversal(node.right)
//             console.log(node.value)
//         }
//     }
//     InOrderTraverse(){
//         this.inOrderRecursive(this.root)
//     }
//     inOrderRecursive(node){
//         if(node !==null){
//             this.inOrderRecursive(node.left)
//             console.log(node.value)
//             this.inOrderRecursive(node.right)
//         }
//     }
// }


// const bts =  new BinaryTree()
// bts.insert(1)
// bts.insert(12)
// bts.insert(13)
// bts.insert(14)
// bts.insert(15)
// bts.insert(16)

// console.log('iner')
// bts.InOrderTraverse()
// console.log('pre')
// bts.PreOrderTraverse()
// console.log('post')
// bts.PostOrderTraversal()


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

//         }else if(value>node.value){
//             node.right=this._insertRecursive(node.right,value)
//         }
//         return node
//     }



//     contains(value){
//         return  this._containsRecursively(this.root,value)
//     }
//     _containsRecursively(node,value){
//         if(node ===null){
//             return false
//         }
//         if(value=== node.value){
//             return true
//         }else if (value < node.value){
//             return  this._containsRecursively(node.left,value)
//         }else {
//             return this._containsRecursively(node.right,value)
//         }
//     }

//     inorderTraverse(){
//         this._inorderRecusive(this.root)
//     }
//     _inorderRecusive(node){
//         if(node !==null){
//             this._inorderRecusive(node.left)
//             console.log(node.value)
//             this._inorderRecusive(node.right)
//         }
//             }
//             preorderTraversal(){
//                 this._preorderRecursive(this.root)
//             }
//             _preorderRecursive(node){
//                 if(node !==null){
//                 console.log(node.value)
//                 this._preorderRecursive(node.left)
//                 this._preorderRecursive(node.right)
//                 }
//             }

//             postorderTraversal(){
//                 this._postorderTravers(this.root)
//             }
//             _postorderTravers(node){
//                 if(node!==null){
//                 this._postorderTravers(node.left)
//                 this._postorderTravers(node.right)
//                 console.log(node.value)
//                 }
//             }
// }

// const bts =new BinaryTree()
// bts.insert(1)
// bts.insert(2)
// bts.insert(3)
// bts.insert(4)
// bts.insert(5)
// bts.insert(7)
// console.log('search is '+ bts.contains(4))
// console.log('pre')
// bts.preorderTraversal()
// console.log('inn')
// bts.inorderTraverse()

// console.log('post')
// bts.postorderTraversal()


// 


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
//         this.root=this._insertRecursively(this.root,value)
//     }
//     _insertRecursively(node,value){
//         if(node === null){
//             return new TreeNode(value)
//         }

//         if(value<node.value){
//             node.left=this._insertRecursively(node.left,value)
//         }
//         if(value>node.value){
//             node.right=this._insertRecursively(node.right,value)
//         }
//         return node
//     }


//     InorderTraversal(){
//         this._inorderRecursively(this.root)
//     }
//     _inorderRecursively(node){
//         if(node !==null){
//             this._inorderRecursively(node.left)
//             console.log(node.value)
//             this._inorderRecursively(node.right)
//         }
//     }

//     PostorderTraversal(){
//         this._postorderRecursive(this.root)
//     }
//     _postorderRecursive(node){
//         if(node !==null){
//             this._postorderRecursive(node.left)

//             this._postorderRecursive(node.right)
//             console.log(node.value)
//         }
//     }

//     PreorderTraversal(){
//         this._preorderRecursive(this.root)
//     }
//     _preorderRecursive(node){
//         if(node !== null){
//             console.log(node.value)
//             this._preorderRecursive(node.left)
//             this._preorderRecursive(node.right)
//         }
//     }
    
// }


// const bts=new BinaryTree()
// bts.insert(1)
// bts.insert(2)
// bts.insert(3)
// bts.insert(4)
// bts.insert(5)

// console.log('Inorder')
// bts.InorderTraversal()
// console.log('post Order')
// bts.PostorderTraversal()
// console.log('Inorder')
// bts.InorderTraversal()


// class TreeNode{
//     constructor(value){
//         this.value= value
//         this.left=null
//         this.right=null
//     }
// }

// class BinaryTree{
//     constructor() {
//          this.root=null
//     }

//     insert(value){
//         this.root=this._insertRecursively(this.root,value)
//     }
//     _insertRecursively(node,value){
//         if(node === null){
//             return new TreeNode(value)
//         }
//         if(value<node.left){
//             node.left=this._insertRecursively(node.left,value)
//         }
//         if(value>node.value){
//             node.right=this._insertRecursively(node.right,value)
//         }
//         return node
//     }

//     InorderTraversal(){
//         this._inorderRecursively(this.root)
//     }
//     _inorderRecursively(node){
//         if(node !== null){
//            this._inorderRecursively(node.left)
//            console.log(node.value)
//            this._inorderRecursively(node.right)
//         }
//     }

//     contains(value){
//         return this._containValue(this.root,value)
//     }
//     _containValue(node,value){
//         if(node==null){
//             return false
//         }
//         if(value=== node.value){
//             return true
//         }else if(value<node.left){
//             return this._containValue(node.left,value)
//         }else {
//             return this._containValue(node.right,value)
//         }

//     }
// 

// const bts=new BinaryTree()
// bts.insert(1)
// bts.insert(2)
// bts.insert(3)
// bts.insert(4)
// bts.insert(5)
// bts.insert(6)

// console.log('Inorder traversal')
// bts.InorderTraversal()

// console.log(bts.contains(11))


// class TreeNode{
//     constructor(value){
//         this.value= value
//         this.left = null
//         this.right=null
//     }
// }
// class BinaryTree{
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         this.root= this._insertValue(this.root,value)
//     }
//     _insertValue(node,value){
//         if(node ===null){
//             return  new TreeNode(value)
//         }
//         if(value<node.value){
//             node.left=this._insertValue(node.left,value)
//         }
//         if(value>node.value){
//             node.right=this._insertValue(node.right,value)
//         }
//         return node
//     }

//     InorderTraversal(){
//         this._inorderRecursive(this.root)
//     }
//     _inorderRecursive(node){
//         if(node !==null){
//             this._inorderRecursive(node.left)
//             console.log(node.value)
//             this._inorderRecursive(node.right)
//         }
//     }
// }

// const bst = new BinaryTree()
// bst.insert(2)
// bst.insert(3)
// bst.insert(5)
// bst.insert(6)
// console.log(bst.InorderTraversal())



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
//       this.root=this._insertRecursively(this.root,value)
//     }
//     _insertRecursively(node,value){
//         if(node === null){
//             return new TreeNode(value)
//         }
//         if(value<node.value){
//             node.left=this._insertRecursively(node.left,value)
//         }
//         if(value>node.value){
//             node.right=this._insertRecursively(node.right,value)
//         }
//         return node
//     }


//     InorderTraversal(){
//         return this._inorderRecursive(this.root)
//     }
//     _inorderRecursive(node){
//         if(node !==null){
//             this._insertRecursively(node.left)
//             console.log(node.value)
//             this._inorderRecursive(node.right)
//         }
//     }

//     PreorderTraversal(){
//         return this._preorderRecursive(this.root)
//     }
//     _preorderRecursive(node){
//         if(node !==null){
//             console.log(node.value)
//             this._preorderRecursive(node.left)
//             this._preorderRecursive(node.right)
//         }
//     }
//     PostorderTraversal(){
//         return this._postorderRecursive(this.root)
//     }
//     _postorderRecursive(node){
//         if(node !== null){
//             this._postorderRecursive(node.left)
//             this._postorderRecursive(node.right)
//             console.log(node.value)
//         }
//     }

// }

// const bts= new BinaryTree()
// bts.insert(2)
// bts.insert(3)
// bts.insert(6)
// bts.insert(8)
// bts.insert(32)
// bts.insert(62)
// bts.insert(72)

// console.log('In Traversal')
// bts.InorderTraversal()
// console.log('postOrder Traversal')
// bts.PostorderTraversal()
// console.log('preOrder Traversal')
// bts.PreorderTraversal()

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
//         this.root=this._insertRecursively(this.root,value)
//     }
//     _insertRecursively(node,value){
//         if(node===null){
//             return new TreeNode(value)
//         }

//           if(value<node.value){
//             node.left=this._insertRecursively(node.left,value)
//           }
//           if(value>node.value){
//             node.right=this._insertRecursively(node.right,value)
//           }
//           return node
//     }

//     removeNode(target){
//      this.root=this._removeValue(this.root,target)
//     }
//     _removeValue(node,target){
//         if(!node){
//             return  null
//         }

//         node.left=this._removeValue(node.left,target)
//         node.right=this._removeValue(node.right,target)

//         if(!node.left && !node.right && node.value===target){
//             return null
//         }
//         return node
//     }

//     InorderTraversal(){
//         this.inorderRecursively(this.root)
//     }
//     inorderRecursively(node){
//         if(node !== null){
//             this.inorderRecursively(node.left)
//             console.log(node.value)
//             this.inorderRecursively(node.right)
//         }
//     }
// }

// const bst= new BinaryTree()
// bst.insert(1)
// bst.insert(3)
// bst.insert(5)
// bst.insert(7)
// bst.insert(9)

// bst.InorderTraversal()
// console.log('removing nodes');
// bst.removeNode(3)
// bst.InorderTraversal()


// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function NodesCount(root){
//     if(root===null){
//         return 0
//     }
   
//    return 1+ NodesCount(root.left)+NodesCount(root.right)

// }

// const tree=new TreeNode(2)
// tree.left=new TreeNode(4)
// tree.right=new TreeNode(6)
// tree.left.left= new TreeNode(9)
// tree.left.right= new TreeNode(8)
// console.log('nodes count'+ NodesCount(tree))


class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
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

    InorderTraverse(){
        this._inordeRecursive(this.root)
    }
    _inordeRecursive(node){
        if(node!==null){
            this._inordeRecursive(node.left)
            console.log(node.value)
            this._inordeRecursive(node.right)
        }
    }

    removeLeafNode(target){
        this._removeLeaf(this.root,target)
    }
    _removeLeaf(node,target){
        if(!node){
            return null
        }
        node.left=this._removeLeaf(node.left,target)
        node.right=this._removeLeaf(node.right,target)

        if(!node.left && !node.right && node.value===target){
              return null
        }
        return node
    }
}
const tree=new BinaryTree()
tree.insert(3)
tree.insert(7)
tree.insert(9)
tree.insert(19)

tree.InorderTraverse()
tree.removeLeafNode(19)
console.log('after remove leaf')
tree.InorderTraverse()