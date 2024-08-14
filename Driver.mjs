import Tree from "./Tree.mjs";
import { prettyPrint } from "./test.mjs";
function createRandomArray(arraySize, maxNumber, minNumber) {
  if (minNumber == null) {
    minNumber = 0;
  }
  const array = [];
  while (array.length < arraySize) {
    const number =
      Math.floor(Math.random() * maxNumber - minNumber) + minNumber;
    array.push(number);
  }

  return array;
}

function insertArrayBst(array, binaryTree) {
  array.forEach((element) => {
    binaryTree.insert(element);
  });
}

const newArray = createRandomArray(25, 100);
const numbersToAdd = createRandomArray(10, 200, 101);
console.log(newArray);
console.log(numbersToAdd);

const tree = new Tree(newArray);
prettyPrint(tree.tree);
console.log(tree.isBalanced());
console.log(tree.levelOrder(tree.tree));
console.log(tree.inOrder(tree.tree));
console.log(tree.preOrder(tree.tree));
console.log(tree.postOrder(tree.tree));

insertArrayBst(numbersToAdd, tree);
console.log(tree.isBalanced());
prettyPrint(tree.tree);
tree.rebalance();
console.log(tree.isBalanced());
console.log(tree.levelOrder(tree.tree));
console.log(tree.inOrder(tree.tree));
console.log(tree.preOrder(tree.tree));
console.log(tree.postOrder(tree.tree));
prettyPrint(tree.tree);
