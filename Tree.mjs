import Node from "./Node.mjs";
export default class Tree {
  constructor(array) {
    this.tree = this.buildTree(array);
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

  insert(value) {}

  deleteItem(value) {}
}
