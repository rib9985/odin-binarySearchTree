# Binary Search Tree
## A Balanced BST implementation in JS, using ES6 modules
### Methods
`buildTree(array)` -> Takes an unsorted/duplicated array, sorts it, removes duplicates and builds a balanced BST

 `insert(value)` -> Inserts a value into the BST

 `deleteItem(value)` -> Deletes a value in the BST

 `find(value)` -> Finds a value in the BST

 `levelOrder(node)` -> Returns an array in level-order of elements of the BST

 `preOrder(node)` -> Returns an array in pre-order of elements of the BST

 `postOrder(node)` -> Returns an array in post-order of elements of the BST

 `inOrder(node)` -> Returns an array in-order of elements of the BST

 `height(node)` -> Returns the height of a node

 `depth(node)` -> Returns the depth of a node

 `isBalanced()` -> Returns true if the tree is balanced

 `rebalance()` -> Rebalances the tree if it is unbalanced

### Testing
- Clone the repo
- Make sure node.js is installed at at least version 20.11.00
- Within the repo directory, run `node Driver.mjs`

### Usage
- To use, copy all the dependencies, excluding `Driver.mjs`
- For use in a JS file:
```js
import { Tree.mjs } from "./Tree.mjs"
const tree = new Tree (yourArrayHere)
```
- Please note the implementation only allows for integer arrays greater than 0
