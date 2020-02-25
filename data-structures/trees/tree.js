'use strict';

const Queue = require('../stackAndQueue/queue.js');

class BinaryTree {
  constructor(rootVal) {
    this.root = rootVal || rootVal === 0 ? new Node(rootVal) : null;
  }

  // root, left, right traversal
  preOrder(node) {
    console.log(node.val);

    if (node.left) {
      this.preOrder(node.left);
    }

    if (node.right) {
      this.preOrder(node.right);
    }
  }

  // left, root, right traversal
  inOrder(node) {
    if (node.left) {
      this.inOrder(node.left);
    }

    console.log(node.val);

    if (node.right) {
      this.inOrder(node.right);
    }
  }

  // left, right, root traversal
  postOrder(node) {
    if (node.left) {
      this.postOrder(node.left);
    }

    if (node.right) {
      this.postOrder(node.right);
    }

    console.log(node.val);
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(val) {
    if (val === this.root.val) {
      console.log('value already exists!');
      return;
    }

    node = new Node(val);

    if (!this.root) {
      this.root = node;
      return;
    }

    let breadth = new Queue();
    breadth.enqueue(root);

    while (breadth.peek()) {
      const front = breadth.dequeue();

      if (val === front.val) {
        console.log('value already exists!');
        return;
      }

      if (val < front.val) {
        if (!front.left) {
          front.left = node;
          console.log(`Added ${val} to the left of ${front.val}`);
          return;
        } else {
          breadth.enqueue(front.left);
        }
      }

      if (value > front.val) {
        if (!front.right) {
          front.right = node;
          console.log(`Added ${val} to the right of ${front.val}`);
          return;
        } else {
          breadth.enqueue(front.right);
        }
      }
    }
  }

  contains(val) {
    if (!this.root) {
      return false;
    }
  }

  searchHelper(node, val) {
    if (root) {
      const newNode = new Node(val);
      if (val === node.val) {
        console.log(`Found a match with the value ${root.val}!`);
        return true;
      }

      if (val < node.val) {
        return this.searchHelper(node.left, val);
      }

      if (val > node.val) {
        return this.searchHelper(node.right, val);
      }
    }

    return false;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
