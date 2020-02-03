'use strict';

const isPalindrome = function(head) {
  if (!head || !head.next) return true;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow) {
    if (slow.val !== fast.val) {
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