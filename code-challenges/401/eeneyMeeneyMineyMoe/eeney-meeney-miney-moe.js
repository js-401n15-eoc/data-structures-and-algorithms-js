'use strict';
const Queue = require('../../../data-structures/stackAndQueue/queue.js');

const eeneyMeeneyMineyMoe = (arr, k) => {
  if (k < 1) throw 'Error: k must be 1 or greater';
  if (!arr || !arr.length) { return null; }
  if (arr.length === 1) { return arr[0]; }

  let queue = new Queue();
  let count = 0;
  let tries = 0;

  for (let i in arr) {
    queue.enqueue(arr[i]);
  }

  while (tries < arr.length - 1) {
    while (count < k - 1) {
      queue.enqueue(queue.dequeue());
      count++;
    }
    queue.dequeue();
    tries++;
    count = 0;
  }

  return queue.dequeue();
};

module.exports = eeneyMeeneyMineyMoe;