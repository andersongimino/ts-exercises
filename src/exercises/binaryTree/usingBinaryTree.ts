import { BinaryTree } from "../classes/BinaryTree";

const tree = new BinaryTree<number>();

tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(13);
tree.add(18);

console.log('Pre order traversal:');
tree.preOrder();

console.log("In-Order Traversal:");
tree.inOrder();

console.log("Post-Order Traversal:");
tree.postOrder();