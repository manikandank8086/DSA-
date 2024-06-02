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

    PreorderTraverse(){
        this._preorderTraverse(this.root)
    }
    _preorderTraverse(node){
        if(node!==null){
            console.log(node.value)
            this._preorderTraverse(node.left)
            this._preorderTraverse(node.right)
        }
    }
    removeNode(target){
         this._removeNode(this.root,target)
    }
    _removeNode(node,target){
        if(!node){
            return null
        }
        if(node.value<target){
            node.left=this._removeNode(node.left,target)
        }else if(node.value>target){
            node.right=this._removeNode(node.right,target)
        }else{
            if(node.left===null && node.right===null){
                return null
            } 
            if(node.left===null){
                return node.right
            }else if(node.right===null){
                return node.left
            }

            let minRight= this._findMin(node.right)
            node.value= minRight.value
            node.right=this._removeNode(node.right,minRight.value)
        }
        return node
    }
    _findMin(node){
        while(!node==null){
            node=n
        }
    }
}

const bst = new BinaryTree()
bst.insert(3)
bst.insert(6)
bst.insert(11)
bst.insert(11)
bst.PreOrderTraverse()
bst.removeLeafNode(6)
console.log('after insertion')
bst.PreOrderTraverse()