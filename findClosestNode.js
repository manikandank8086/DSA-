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
        this.root = this._insertRecursive(this.root, value);
    }

    _insertRecursive(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this._insertRecursive(node.left, value);
        } else {
            node.right = this._insertRecursive(node.right, value);
        }
        return node;
    }

    findClosestValue(target) {
        if (this.root === null) {
            return null;
        }
        let closest = this.root.value;
        let currentNode = this.root;

        while (currentNode !== null) {
            if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
                closest = currentNode.value;
            }

            if (target < currentNode.value) {
                currentNode = currentNode.left;
            } else if (target > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                break;
            }
        }
        return closest;
    }
}

// Example usage:
const bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

const target = 6;
console.log("Closest value to", target, "is:", bst.findClosestValue(target));
