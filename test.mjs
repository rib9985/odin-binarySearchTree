import Tree from "./Tree.mjs";

export function prettyPrint(node, prefix = "", isLeft = true) {
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
console.log(`The height is ${treeTwo.height(treeTwo.tree)}`);
console.log(treeTwo.depth(2)); // expect 1 ;
console.log(treeTwo.depth(4)); // expect 0 ;
console.log(treeTwo.depth(9)); // expect 2 ;
console.log(treeTwo.isBalanced()); // expect true

treeTwo.insert(10);
treeTwo.insert(11);
treeTwo.insert(15);
treeTwo.insert(7);
treeTwo.insert(5);
console.log(treeTwo.isBalanced()); // expect false
prettyPrint(treeTwo.tree);
treeTwo.rebalance(); // expect false
prettyPrint(treeTwo.tree);
