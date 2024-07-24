import Tree from "./Tree.mjs";

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

// const testArrayOriginal = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const tree = new Tree(testArrayOriginal);
// prettyPrint(tree.tree);

const testArray = [1, 2, 3, 4, 6, 8, 9];
const treeTwo = new Tree(testArray);
prettyPrint(treeTwo.tree);
console.log(treeTwo.levelOrder(treeTwo.tree));
console.log(treeTwo.inOrder(treeTwo.tree));
console.log(treeTwo.preOrder(treeTwo.tree));
console.log(treeTwo.postOrder(treeTwo.tree));
