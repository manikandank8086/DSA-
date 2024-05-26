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
//         this.root=this._inserRecursive(this.root,value)
//     }
     
//      _inserRecursive(node,value){
//         if(node===null){
//             return new TreeNode(value)
//         }
//         if(value<node.value){
//             node.left=this._inserRecursive(node.left,value)
//         }
//         if(value>node.value){
//             node.right=this._inserRecursive(node.right,value)
//         }
//         return node
//      }

//        sort(){
//         let array=[]
//         return  this._sortInorder(this.root,array)
//        }
//        _sortInorder(node,array){
//         if(node===null){
//             return array
//         }
         

//          this._sortInorder(node.left,array)
//          array.push(node.value)
//          this._sortInorder(node.right,array)
//          return array
//        }
//     }

//     const bst=new BinaryTree()
//     bst.insert(3)
//     bst.insert(28)
//     bst.insert(2)
//     bst.insert(7)


// console.log('sorted array is '+ bst.sort())

// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinaryTree{
//       constructor(){
//         this.root=null
//       }

//       insert(value){
//         this.root= this._insertRecursive(this.root,value)
//       }
//       _insertRecursive(node,value){
//         if(node === null){
//             return new TreeNode(value)
//         }
//           if(value<node.value){
//             node.left=this._insertRecursive(node.left,value)
//           }
//           if(value>node.value){
//             node.right=this._insertRecursive(node.right,value)
//           }
//             return node
//       }

//       InorderTraversea(){
//         let array =[]
//         return  this._inorderRecursive(this.root,array)
//       }
//       _inorderRecursive(node,arr){
//         if(node==null){
//             return arr
//         }
//            node.left=this._inorderRecursive(node.left,arr)
//            arr.push(node.value)
//            node.right= this._inorderRecursive(node.right,arr)
        
//         return arr
//       }
// }

// const bst = new BinaryTree()
// bst.insert(2)
// bst.insert(4)
// bst.insert(5)
// bst.insert(8)
// console.log('after traverse'+ bst.InorderTraversea())

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
//          this.root= this._inserRecursive(this.root,value)
//     }
//     _inserRecursive(node,value){
//         if(node===null){
//             return new TreeNode(value)
//         }
//         if(value>node.value){
//             node.left=this._inserRecursive(node.left,value)
//         }
//         if(value<node.value){
//             node.right=this._inserRecursive(node.right,value)
//         }
//         return node
//     }

//     InorderTraverse(){
//         this.InorderRecursive(this.root)
//     }
//     InorderRecursive(node){
//         if(node!==null){
//             this.InorderRecursive(node.left)
//             console.log(node.value)
//             this.InorderRecursive(node.right)
//         }
//     }

//     SortArray(){
//         let array=[]
//         return this.sortRecursive(this.root,array)
//     }
//     sortRecursive(node,arr){
//         if(node!==null){
//             this.sortRecursive(node.left,arr)
//             arr.push(node.value)
//             this.sortRecursive(node.right,arr)
//         }
//         return arr
//     }
// }

// const tree=new BinaryTree()
// tree.insert(1)
// tree.insert(0)
// tree.insert(11)
// tree.insert(7)
// tree.insert(14)
// tree.insert(12)

// console.log('inorder Traversal is '+ tree.InorderTraverse())
// console.log('sorted array is '+ tree.SortArray())


class TreeNode{
    constructor(value) {
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
       this.root= this._insertRecursive(this.root,value)
    }
    _insertRecursive(node,value){

        if(node ===null){
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
        let arr=[]
        return  this.inorderRecursive(this.root,arr)
       
    }
    inorderRecursive(node,arr){
        if(node!==null){
            this.inorderRecursive(node.left,arr)
             if(node.value%2==0){
                arr.push(node.value)
             }
            this.inorderRecursive(node.right,arr)
        }
        return arr
    }
}
const bst = new BinaryTree()
bst.insert(2)
bst.insert(5)
bst.insert(8)
bst.insert(9)
console.log(bst.InorderTraverse())