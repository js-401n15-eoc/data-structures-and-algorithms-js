'use strict';

const isPalindrome = ll => {
  if (!ll || !ll.head) {
    return true;
  }

  const head = ll.head;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow) {
    if (slow.value !== fast.value) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

const reverse = head => {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};

module.exports = isPalindrome;
