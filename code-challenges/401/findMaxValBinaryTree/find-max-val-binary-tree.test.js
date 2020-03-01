const FindMaxValBinaryTree = require('./find-max-val-binary-tree.js');
const { Node, BinaryTree } = require('../../../data-structures/trees/tree.js');

describe('FindMaxValBinaryTree', () => {
  let findMaxValBTree = new FindMaxValBinaryTree();

  beforeEach(() => {
    findMaxValBTree = new FindMaxValBinaryTree();
  });

  it('can return the max value in a populated binary tree', () => {
    findMaxValBTree.root = new Node(4);
    expect(findMaxValBTree.findMaxVal()).toEqual(4);

    findMaxValBTree.root.left = new Node(7);
    expect(findMaxValBTree.findMaxVal()).toEqual(7);

    findMaxValBTree.root.right = new Node(2);
    expect(findMaxValBTree.findMaxVal()).toEqual(7);

    findMaxValBTree.root.right.right = new Node(10);
    expect(findMaxValBTree.findMaxVal()).toEqual(10);

    findMaxValBTree.root.left.left = new Node(1);
    expect(findMaxValBTree.findMaxVal()).toEqual(10);
  });

  it('can return null for an empty binary tree', () => {
    expect(findMaxValBTree.findMaxVal()).toEqual(null);
  });
});