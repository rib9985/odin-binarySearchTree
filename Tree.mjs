import Node from "./Node.mjs";
export default class Tree {
  constructor(array) {
    this.tree = this.buildTree(this.mapArray(array));
  }

  mapArray(array) {
    if (array == null) {
      return null;
    } else {
      return array
        .sort(function (a, b) {
          return a - b;
        })
        .filter((item, index) => {
          return array.indexOf(item) === index;
        });
    }
  }

  buildTree(array) {
    if (array == null || array.length == 0) {
      return null;
    }
    // get the middle position, set as node

    const middleIndex = Math.floor(array.length / 2);
    const rootValue = array[middleIndex];
    const root = new Node(rootValue);
    root.left = this.buildTree(array.slice(0, middleIndex));
    root.right = this.buildTree(array.slice(middleIndex + 1));

    return root;
  }

  insert(value) {
    const nodeToInsert = new Node(value);
    let currentNode = this.tree;
    let parentNode = null;
    while (currentNode !== null) {
      parentNode = currentNode;
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value == currentNode.value) {
        return;
      }
    }

    if (value > parentNode.value) {
      parentNode.right = nodeToInsert;
    } else if (value < parentNode.value) {
      parentNode.left = nodeToInsert;
    }
  }

  deleteItem(value) {}
}
