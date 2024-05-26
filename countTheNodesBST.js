// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// function countNodes(root){
//    if(!root){
//     return null
//    }

const nodemon = require("nodemon")

//    return 1+ countNodes(root.left)+countNodes(root.right)
// }

// const root= new TreeNode(1)
// root.left=new TreeNode(2)
// root.right=new TreeNode(3)
// root.left.left=new TreeNode(4)
// root.left.right=new TreeNode(5)

// console.log('numbes of nodes'+ countNodes(root))


// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function CountNodes(root){
//     if(!root){
//         return null
//     }
//     return 1+ CountNodes(root.left)+CountNodes(root.right)
// }

// const root= new TreeNode(1)
// root.left=new TreeNode(2)
// root.right=new TreeNode(3)
// root.left.left= new TreeNode(4)
// root.right.right= new TreeNode(5)

// console.log('nodes count ' + CountNodes(root))




// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function countNodes(root){
//     if(!root){
//         return null
//     }

//     return 1+ countNodes(root.left)+countNodes(root.right)
// }

// const root= new TreeNode(1)
// root.left= new TreeNode(2)
// root.right= new TreeNode(3)
// root.left.left=new TreeNode(4)
// root.left.right= new TreeNode(5)

// console.log('nodes count '+ countNodes(root))

// class TreeNode{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function CountNodes(root){
//   if(root===null){
//     return 0
//   }else {
//      return 1+ (CountNodes(root.left)+CountNodes(root.right))
//   }
// }

// const root = new TreeNode(1)
//  root.left=new TreeNode(2)
//  root.right=new TreeNode(3)
//  root.left.left=new TreeNode(5)
//  root.left.right=new TreeNode(7)

//  console.log('count of nodes is '+ CountNodes(root))

class TreeNode{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}
 function CountNodes(root){
  if(root===null){
    return 0
  }
  return 1+ CountNodes(root.left)+CountNodes(root.right)
 }

 const tree=new TreeNode(2)
 tree.left=new TreeNode(4)
 tree.right=new TreeNode(7)
 tree.left.left=new TreeNode(8)
 tree.left.right=new TreeNode(11)
 console.log('count of nodes is '+ CountNodes(tree))