import { TreeNode } from "./TreeNode";

export class BinaryTree<T> {
    root: TreeNode<T> | null

    constructor() {
        this.root = null;
    }

    add(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    preOrder(node: TreeNode<T> | null = this.root): void {
        if(node != null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrder(node: TreeNode<T> | null = this.root): void {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    postOrder(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}