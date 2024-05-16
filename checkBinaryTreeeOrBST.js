
class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) return true;

    if (root.value < min || root.value > max) return false;

    return isBST(root.left, min, root.value - 1) && isBST(root.right, root.value + 1, max);
}

// Example usage:
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log("Is it a BST?", isBST(root)); 
