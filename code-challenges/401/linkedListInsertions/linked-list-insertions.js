'use strict';

const { LinkedList, Node } = require('../../../data-structures/linkedList/linked-list.js');

class LinkedListInsertions extends LinkedList {
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue) {
    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    const newNode = new Node(newValue);
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedListInsertions;