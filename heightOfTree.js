class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function heightOfTree(root){
    if(root==null){
        return 0
    }else{
        const  leftHight=heightOfTree(root.left)
        const rigthHeight=heightOfTree(root.right)
        
        return Math.max(leftHight,rigthHeight)+1
    }
}

const root = new TreeNode(1)
root.left=new TreeNode(2)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)

console.log('height of tree is '+ heightOfTree(root))