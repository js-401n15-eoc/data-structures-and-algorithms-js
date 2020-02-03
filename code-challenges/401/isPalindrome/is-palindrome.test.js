const isPalindrome = require('./is-palindrome.js');
const LinkedList = require('../../../data-structures/linkedList/linked-list.js');

describe('isPalindrome', () => {
  let testll = new LinkedList();

  beforeEach(() => {
    testll = new LinkedList();
  });

  it('can detect whether a populated linked list is a palindrome', () => {
    testll.insert('t');
    testll.insert('a');
    testll.insert('c');
    testll.insert('o');
    testll.insert('c');
    testll.insert('a');
    testll.insert('t');
    expect(isPalindrome(testll)).toEqual(true);

    testll = new LinkedList();
    testll.insert('a');
    testll.insert('b');
    testll.insert('c');
    testll.insert('d');
    expect(isPalindrome(testll)).toEqual(false);

    testll = new LinkedList();
    testll.insert('x');
    expect(isPalindrome(testll)).toEqual(true);

    testll = new LinkedList();
    testll.insert('x');
    testll.insert('o');
    expect(isPalindrome(testll)).toEqual(false);
  });

  it('can return true for an empty/falsy linked list', () => {
    expect(isPalindrome(testll)).toEqual(true);
  });

  it('can detect palindromes with numbers', () => {
    testll.insert(1);
    testll.insert(2);
    testll.insert(1);
    expect(isPalindrome(testll)).toEqual(true);

    testll = new LinkedList();
    testll.insert(1);
    testll.insert(2);
    testll.insert(3);
    testll.insert(4);
    expect(isPalindrome(testll)).toEqual(false);
  });
});
