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

    InorderTraverse(){
        return this._inorderRecursive(this.root)
    }
    _inorderRecursive(node){
        if(node!==null){
            this._inorderRecursive(node.left)
            console.log(node.value)
            this._inorderRecursive(node.right)
        }
    }
      deleteNode(value){
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
            let minRight= this._findMinNode(node.right)
            node.value=minRight.value
             node.right=this._delete(node.value,minRight.value)
        }
        return node
        
      }
      _findMinNode(node){
        while(node.left){
            node=node.value
        }
        return node

      }
}

const bst = new BinaryTree()
bst.insert(3)
bst.insert(4)
bst.insert(1)
bst.insert(88)
bst.insert(6)
bst.insert(4)

bst.InorderTraverse()
bst.deleteNode(4)
console.log('after deletion')
bst.InorderTraverse()
