'use strict';

const arrayReverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr;
}

const input = [1, 2, 3, 4];
console.log(input);
console.log(arrayReverse(input));

const arrayReverse2 = (arr) => {
    let left = 0, right = arr.length - 1;

    while (right > left) {
        let tmp = arr[right];
        arr[right] = arr[left];
        arr[left] = tmp;
        left++;
        right--;
    }

    return arr;
}

const input2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
console.log(input2);
console.log(arrayReverse2(input2));