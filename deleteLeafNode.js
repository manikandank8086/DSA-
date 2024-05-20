class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertValue(this.root, value);
    }

    _insertValue(node, value) {
        if (node == null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this._insertValue(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertValue(node.right, value);
        }
        return node;
    }

    removeLeafNode(target) {
        this.root = this.dfs(this.root, target);
    }

    dfs(node, target) {
        if (!node) return null;

        // Traverse the left subtree and update the reference of the left child
        node.left = this.dfs(node.left, target);

        // Traverse the right subtree and update the reference of the right child
        node.right = this.dfs(node.right, target);

        // Check if the current node is a leaf node with the target value
        if (!node.left && !node.right && node.value === target) {
            // If it is a leaf node with the target value, return null to remove it
            return null;
        }

        // Otherwise, return the node unchanged
        return node;
    }

    InorderTraversal() {
        return this.inorderRecursive(this.root);
    }

    inorderRecursive(node) {
        if (node !== null) {
            this.inorderRecursive(node.left);
            console.log(node.value);
            this.inorderRecursive(node.right);
        }
    }
}

const bts = new BinaryTree();
bts.insert(3);
bts.insert(4);
bts.insert(5);
bts.insert(6);
bts.insert(7);
bts.insert(8);
bts.insert(9);

console.log("Inorder Traversal:");
bts.InorderTraversal();

bts.removeLeafNode(3);
console.log('After removing leaf node with value 3:');
bts.InorderTraversal();