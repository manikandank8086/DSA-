class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function countNodes(root){
   if(!root){
    return null
   }

   return 1+ countNodes(root.left)+countNodes(root.right)
}

const root= new TreeNode(1)
root.left=new TreeNode(2)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)

console.log('numbes of nodes'+ countNodes(root))