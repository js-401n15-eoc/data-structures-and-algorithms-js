const { BinaryTree } = require('../../../data-structures/trees/tree.js');

class FindMaxValBinaryTree extends BinaryTree {
  constructor(props) {
    super(props);
  }

  findMaxVal() {
    return this.findMaxHelper(this.root);
  }

  findMaxHelper(node) {
    return node ? Math.max(node.val, Math.max(this.findMaxHelper(node.left), this.findMaxHelper(node.right))) : null;
  }
}

module.exports = FindMaxValBinaryTree;