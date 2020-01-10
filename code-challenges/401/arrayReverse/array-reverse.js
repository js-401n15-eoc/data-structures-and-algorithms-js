'use strict';

// for loop
const arrayReverse = (arr) => {
    if (!arr) return [];

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr;
};

// while loop
const arrayReverse2 = (arr) => {
    if (!arr) return [];

    let left = 0, right = arr.length - 1;

    while (right > left) {
        let tmp = arr[right];
        arr[right] = arr[left];
        arr[left] = tmp;
        left++;
        right--;
    }

    return arr;
};

// recursion
const arrayReverse3 = (arr) => {
    if (!arr) return [];

    const reverseHelper = (arr, start, end) => {
        if (start >= end) {
            return arr;
        }

        let tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;

       return reverseHelper(arr, start + 1, end - 1);
    };

    return reverseHelper(arr, 0, arr.length - 1);
};

module.exports = { arrayReverse, arrayReverse2, arrayReverse3 };