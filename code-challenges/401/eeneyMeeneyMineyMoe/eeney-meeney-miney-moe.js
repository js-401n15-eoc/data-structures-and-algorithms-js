'use strict';
const Queue = require('../../../data-structures/stackAndQueue/queue.js');

const eeneyMeeneyMineyMoe = (arr, k) => {
  let queue = new Queue();
  let count = 0;
  let tries = 0;

  for (let i in arr) {
    queue.enqueue(arr[i]);
  }

  while (tries < arr.length - 1) {
    while (count < k - 1) {
      const valToDequeue = queue.dequeue();
      console.log('rotating this:', valToDequeue);
      queue.enqueue(valToDequeue);
      count++;
    }
    const valToRemove = queue.dequeue();
    console.log('val to remove: ', valToRemove);
    tries++;
    count = 0;
  }

  return queue.dequeue();
};

module.exports = eeneyMeeneyMineyMoe;