// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left =null
//         this.right =null
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

//     PreorderTraverse(){
//         return this._preorderRecurive(this.root)
//     }
//     _preorderRecurive(node){
//         if(node!==null){
//             console.log(node.value)
//             this._preorderRecurive(node.left)
//             this._preorderRecurive(node.right)
//         }
//     }

//     SortArray(){
//         let array=[]
//          this._sort(this.root,array)
//          return array
//     }
//     _sort(node,array){
//         if(node!==null){
            
//             this._sort(node.right,array)
//             array.push(node.value)
//             this._sort(node.left,array)
            
//         }         
//     }
//     search(value){
//         return this._search(this.root,value)
//     }
//     _search(node,value){
//         if(node===null){
//             return false
//         }
//         if(node.value===value){
//             return true
//         }
//         if(value<node.value){
//             return this._search(node.left,value)
//         }else{
//             return this._search(node.right,value)
//         }
//     }

//     delete(value){
//         return this._delete(this.root,value)
//     }
//     _delete(node,value){
//         if(node===null){
//             return null
//         }
//         if(value<node.value){
//             node.left=this._delete(node.left,value)
//         }else if(value>node.value){
//             node.right=this._delete(node.right,value)
//         }else{
//             if(!node.left && !node.right){
//                 return null
//             }
//             if(!node.left){
//                 return node.right
//             }
//             if(!node.right){
//                 return node.left
//             }
//             let minRight=this._findMin(node.right)
//             node.value=minRight.value
//             node.right=this._delete(node.value,minRight.value)
//         }
//         return node
//     }
//     _findMin(node){
//         while(node.left){
//             node=node.left
//         }
//         return node
//     }

//     HeightOfNode(){
//         return this._height(this.root)
//     }
//     _height(node){
//         if(node===null){
//             return null
//         }
//         let left=this._height(node.left)
//         let right=this._height(node.right)
//         return Math.max(left,right)+1
//     }

//     CountOfnodes(){
//         return this._count(this.root)
//     }
//     _count(node){
//         if(node===null){
//             return null
//         }
//         return 1+ this._count(node.left)+this._count(node.right)
//     }

//     DepthOfNodes(value){
//         return this._depth(this.root,value,0)
//     }
//     _depth(node,value,depth){
//         if(node===null){
//             return -1
//         }
//         if(node.value===value){
//             return depth
//         }
//         let leftDepth= this._depth(node.left,value,depth+1)
//         if(leftDepth!==-1){
//             return leftDepth
//         }
//         return this._depth(node.right,value,depth+1)
//     }
//     chekBinaryTree(){
//         return this._checkBinarayTree(this.root,-Infinity,Infinity)
//     }
//     _checkBinarayTree(node,min,max){
//          if(node===null){
//             return true
//          }
//          if(node.value<=min || node.value>=max){
//             return false
//          }
//          return this._checkBinarayTree(node.left,min,node.value) && this._checkBinarayTree(node.right,node.value,max)
//     } 

//     removeLeaf(){
//          return this._removeLeaf(this.root)
//     }
//     _removeLeaf(node){
//         if(node===null){
//             return null
//         }
//         if(!node.left && !node.right ){
//             return null
//         }
//         node.left=this._removeLeaf(node.left)
//         node.right=this._removeLeaf(node.right)
//          return node
//     }
// }
// const bst = new BinaryTree()
// bst.insert(3)
// bst.insert(7)
// bst.insert(6)
// bst.insert(2)
// console.log(bst.SortArray())
// console.log(bst.search(0))
// console.log('preorder')
// bst.PreorderTraverse()
// //bst.delete(2)
// console.log('after deletion')
// bst.PreorderTraverse()
// console.log('height of the node is '+ bst.HeightOfNode())
// console.log('count of node is '+ bst.CountOfnodes())
// console.log('depth of the node is '+ bst.DepthOfNodes(7))
// console.log('check binary tree or not '+ bst.chekBinaryTree())
// console.log('after remove leaft node')
// bst.removeLeaf(2)
// bst.PreorderTraverse()

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
    PreorderTraverse(){
        return this._preorderRecursive(this.root)
    }
    _preorderRecursive(node){
        if(node!==null){
            console.log(node.value)
            this._preorderRecursive(node.left)
            this._preorderRecursive(node.right)
        }
    }
       
    checkBinaryTree(){
        return this._checkBinartyTree(this.root,-Infinity,Infinity)
    }
    _checkBinartyTree(node,min,max){
        if(node===null){
            return true
        }
        if(node.value<=min || node.value>=max){
            return false
        }
        return this._checkBinartyTree(node.left,min,node.value) && this._checkBinartyTree(node.right,node.value,max)

    }

    search(value){
        return this._search(this.root,value)
    }
    _search(node,value){
        if(node===null){
            return false
        }
        if(node.value===value){
            return true
        }
           if(value<node.value){
          return this._search(node.left,value)
           }else{
         return this._search(node.right,value)
           }
    }
    findSum(){
        return this._findSum(this.root)
    }
    _findSum(node){
        if(node===null){
            return null
        }
        return node.value+this._findSum(node.left)+this._findSum(node.right)
    }

    SortArray(){
        let array=[]
         this._sortArray(this.root,array)
         return array
    }
    _sortArray(node,array){
        if(node===null){
            return array
        }
        if(node!==null){
            this._sortArray(node.left,array)
            array.push(node.value)
            this._sortArray(node.right,array)
        }
        }

        DepthOfnode(value){
            return this._depth(this.root,value,0)
        }
        _depth(node,value,depth){
            if(node===null){
                return -1
            }
            if(node.value===value){
                return depth
            }
            let left=this._depth(node.left,value,depth+1)
            if(left!==-1){
                return left
            }
            return this._depth(node.right,value,depth+1)

        }
        Height(){
            return this._height(this.root)
        }
        _height(node){
            if(node===null){
                return 0
            }
            let left=this._height(node.left)
            let right =this._height(node.right)
            return Math.max(left,right)+1
        }

        CountOfnode(){
            return this._count(this.root)
        }
        _count(node){
            if(node===null){
                return 0
            }
            return 1+this._count(node.left)+this._count(node.right)
        }

        delete(value){
            return this._delete(this.root,value)
        }
        _delete(node,value){
            if(node===null){
                return null
            }
            if(value<node.value){
                node.left=this._delete(node.left,value)
            }else if(value>node.value){
                node.right=this._delete(node.right,value)
            }else{
                if(!node.left && !node.right){
                    return null
                }
                if(!node.left){
                    return node.right
                }
                if(!node.right){
                    return node.left
                }
                let minRight=this._findMin(node.right)
                node.value=minRight.value
                node.right=this._delete(node.value,minRight.value)
            }
            return node
        }
        _findMin(node){
            if(node.left){
                node=node.left
            }
            return node
        }

}
const bst = new BinaryTree()
bst.insert(3)
bst.insert(5)
bst.insert(1)
bst.insert(2)
bst.insert(8)
bst.insert(12)
bst.PreorderTraverse()
console.log('check binary tree '+ bst.checkBinaryTree())
console.log('search '+ bst.search(0))
console.log('sum of the tree '+ bst.findSum())
console.log('sorted array is '+ bst.SortArray())
console.log('depth of node is '+ bst.DepthOfnode(8))
console.log('height of the node is '+ bst.Height())
console.log('count of tree '+ bst.CountOfnode())
console.log('after remove' + bst.delete(8))
bst.PreorderTraverse()
