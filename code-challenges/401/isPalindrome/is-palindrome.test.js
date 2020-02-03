const isPalindrome = require('./is-palindrome.js');
const LinkedList = require('../../../data-structures/linkedList/linked-list.js');

describe('isPalindrome', () => {
  let testll = new LinkedList();

  beforeEach(() => {
    testll = new LinkedList();
  });

  it('can detect whether a populated linked list is a palindrome', () => {});
  testll.insert('t');
  testll.insert('a');
  testll.insert('c');
  testll.insert('o');
  testll.insert('c');
  testll.insert('a');
  testll.insert('t');

  expect(isPalindrome(testll.head)).toEqual(true);
});
