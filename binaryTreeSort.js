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
        this.root=this._inserRecursive(this.root,value)
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

       sort(){
        let array=[]
        return  this._sortInorder(this.root,array)
       }
       _sortInorder(node,array){
        if(node===null){
            return array
        }
         

         this._sortInorder(node.left,array)
         array.push(node.value)
         this._sortInorder(node.right,array)
         return array
       }
    }

    const bst=new BinaryTree()
    bst.insert(3)
    bst.insert(28)
    bst.insert(2)
    bst.insert(7)


console.log('sorted array is '+ bst.sort())