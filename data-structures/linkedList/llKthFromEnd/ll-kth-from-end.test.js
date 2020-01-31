const { LLKthFromEnd } = require('./ll-kth-from-end.js');

describe('LLKthFromEnd', () => {
  let kthFromEndLL;

  beforeEach(() => {
    kthFromEndLL = new LLKthFromEnd();
  });

  it('can return a value for LLs that contain input value', () => {
    kthFromEndLL.insert(2);
    kthFromEndLL.insert(8);
    kthFromEndLL.insert(3);
    kthFromEndLL.insert(1);

    expect(kthFromEndLL.kthValueFromEnd(0)).toEqual(2);
    expect(kthFromEndLL.kthValueFromEnd(2)).toEqual(3);
  });

  it('can throw an error for k values out of range', () => {
    kthFromEndLL.insert(2);
    kthFromEndLL.insert(8);
    kthFromEndLL.insert(3);
    kthFromEndLL.insert(1);

    expect(() => kthFromEndLL.kthValueFromEnd(-1)).toThrow();
    expect(() => kthFromEndLL.kthValueFromEnd(6)).toThrow();
  });
});