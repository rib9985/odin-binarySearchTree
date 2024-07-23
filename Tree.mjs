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
    //traverse tree until node is null (base case)
    let valueToCheck = this.tree.middle;
    if (valueToCheck == null || valueToCheck == value) {
      valueToCheck = value;
    } else if (valueToCheck > value) {
      return;
    }
  }

  deleteItem(value) {}
}
