// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

const nodemon = require("nodemon")

// function heightOfTree(root){
//     if(root==null){
//         return 0
//     }else{
//         const  leftHight=heightOfTree(root.left)
//         const rigthHeight=heightOfTree(root.right)
        
//         return Math.max(leftHight,rigthHeight)+1
//     }
// }

// const root = new TreeNode(1)
// root.left=new TreeNode(2)
// root.right=new TreeNode(3)
// root.left.left=new TreeNode(4)
// root.left.right=new TreeNode(5)

// console.log('height of tree is '+ heightOfTree(root))



// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function heightOfTree(root){
//      if(root===null){
//         return 0
//      }else{

//      const  left=heightOfTree(root.left)
//      const right= heightOfTree(root.right)

//      return Math.max(left,right)+1
// }
// }


// const root= new TreeNode(1)
// root.left= new TreeNode(3)
// root.right= new TreeNode(5)
// root.left.left= new TreeNode(8)
// root.left.right= new TreeNode(10)
// root.left.left.left= new TreeNode(12)
// root.left.left.left.right= new TreeNode(16)
// console.log('height of the tree is '+ heightOfTree(root))



// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left= null
//         this.right=null
//     }
// }

// function findHeightofTree(root){
//     if(root === null){
//         return 0
//     }else{
//         const leftheight= findHeightofTree(root.left)
//         const rightHeight= findHeightofTree(root.right)
//         return Math.max(leftheight,rightHeight)+1
//     }
// }

// const root= new TreeNode(1)
// root.left=new  TreeNode(3)
// root.right=new TreeNode(4)
// root.left.left= new TreeNode(6)
// root.left.right= new TreeNode(8)

// console.log('height of the tree is '+ findHeightofTree(root))


// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right= null
//     }
// }

// function heightOfTree(root){
//     if(root === null){
//         return 0
//     }else{
//         const left= heightOfTree(root.left)
//         const right = heightOfTree(root.right)

//         return Math.max(left,right)+1
//     }

// }

// const root = new TreeNode(1)
// root.left=new TreeNode(2)
// root.right=new TreeNode(4)
// root.left.left=new TreeNode(6)
// root.left.right=new TreeNode(8)
// console.log('height of the tree is '+  heightOfTree(root))

// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }

// }

// function HeightOftreee(root){
//    if(root===null){
//     return 0
//    }else{
//     const left = HeightOftreee(root.left)
//     const right= HeightOftreee(root.right)

//     return Math.max(left,right)+1
//    }
// }

// const root= new TreeNode(2)
// root.left=new TreeNode(5)
// root.right= new TreeNode(7)
// root.left.left=new TreeNode(9)
// root.left.right=new TreeNode(100)
// console.log('height of tree is '+ HeightOftreee(root))

// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// function HeightOftreee(root){
//     if(root===null) return null

//     left = HeightOftreee(root.left)
//     right=HeightOftreee(root.right)
//      return Math.max(left,right)+1
// }

// const tree=new TreeNode(2)
// tree.left=new TreeNode(4)
// tree.right= new TreeNode(7)
// tree.left.left=new TreeNode(9)
// tree.left.right= new TreeNode(11)

// console.log('height of the tree is '+ HeightOftreee(tree))

// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function HeightOftree(root){
//     if(root===null){
//         return 0
//     }
//     let left= HeightOftree(root.left)
//     let right= HeightOftree(root.right)
//     return Math.max(left,right)+1
// }

// const tree= new TreeNode(3)
// tree.left=new TreeNode(5)
// tree.right=new TreeNode(9)
// tree.left.left=new TreeNode(8)
// tree.left.right=new TreeNode(11)

// console.log('height of the tree is '+ HeightOftree(tree))

// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function CountNodes(root){
//     if(root===null){
//         return null
//     }
//     return 1+ CountNodes(root.left)+CountNodes(root.right)
// }
// const  tree=new TreeNode(4)
// tree.left=new TreeNode(5)
// tree.right=new TreeNode(9)
// tree.left.left=new TreeNode(11)
// tree.left.right=new TreeNode(14)
// console.log('count of node is '+ CountNodes(tree))  


// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left = null
//         this.right=null
//     }
// }

// function heightOfTree(root){
//     if(root===null){
//         return 0
//     }
//        let left= heightOfTree(root.left)
//        let right= heightOfTree(root.right)

//        return Math.max(left,right)+1
// }

// function CountNodes(root){
//     if(root===null){
//         return 0
//     }

//     return 1+CountNodes(root.left)+CountNodes(root.right)
// }

// const tree= new TreeNode(3)
// tree.left=new TreeNode(4)
// tree.right=new TreeNode(9)
// tree.left.left=new TreeNode(12)
// tree.left.right=new TreeNode(13)
// console.log(CountNodes(tree))
// console.log(heightOfTree(tree))


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

}

   function HeightOftree(node){
    if(node===null){
        return 0
    }
    let left=HeightOftree(node.left)
    let right = HeightOftree(node.right)
    return Math.max(left,right)+1
   }

const bst= new BinaryTree()
bst.insert(3)
bst.insert(7)
bst.insert(8)
bst.insert(1)
bst.insert(23)
console.log('count of node is '+ HeightOftree(bst.root))

