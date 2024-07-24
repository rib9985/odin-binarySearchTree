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

  find(value) {
    let currentNode = this.tree;
    while (currentNode !== null) {
      if (value == currentNode.value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  deleteNode(root, value) {
    if (root == null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  minValue(node) {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  maxValue(node) {
    let maxValue = node.value;
    while (node.right !== null) {
      maxValue = node.right.value;
      node = node.right;
    }
    return minValue;
  }

  deleteItem(value) {
    const nodeFound = this.find(value);

    if (nodeFound) {
      const newTree = this.deleteNode(this.tree, value);
      this.tree = newTree;
    } else {
      return null;
    }
  }

  levelOrder(root) {
    if (root == null) {
      throw new Error("Not a node");
    }
    const levelOrderArray = [];
    const queue = [root];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      levelOrderArray.push(currentNode.value);
    }

    return levelOrderArray;
  }

  inOrder(root) {
    let array = [];

    function inOrderRecursive(root) {
      if (root == null) {
        return;
      }
      inOrderRecursive(root.left);
      array.push(root.value);
      inOrderRecursive(root.right);
    }
    inOrderRecursive(root);
    return array;
  }

  postOrder(root) {
    let array = [];

    function postOrderRecursive(root) {
      if (root == null) {
        return;
      }
      postOrderRecursive(root.left);
      postOrderRecursive(root.right);
      array.push(root.value);
    }
    postOrderRecursive(root);
    return array;
  }

  preOrder(root) {
    let array = [];

    function preOrderRecursive(root) {
      if (root == null) {
        return;
      }
      array.push(root.value);
      preOrderRecursive(root.left);
      preOrderRecursive(root.right);
    }
    preOrderRecursive(root);
    return array;
  }
}
