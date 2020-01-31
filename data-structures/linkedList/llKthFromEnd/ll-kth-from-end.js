'use strict';
const { LinkedList } = require('../linked-list.js');

class LLKthFromEnd extends LinkedList {
  kthValueFromEnd(k) {
    if (k < 0) { throw new Error('input value out of range'); }

    let walker = this.head;
    let runner = this.head;
    let distance = 1;

    while (runner.next) {
      runner = runner.next;
      distance++;
    }

    let diff = distance - k;
    if (diff < 0) { throw new Error('input value out of range'); }

    while (diff > 1) {
      diff--;
      walker = walker.next;
    }

    return walker.value;
  }
}

module.exports = { LLKthFromEnd };