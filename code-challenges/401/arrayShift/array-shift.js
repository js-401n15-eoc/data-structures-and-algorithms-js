'use strict';

const shiftArray = (arr, num) => {
    if (!num && num !== 0) return arr;

    if (!arr && num !== 0) return [num];

    if (arr.length < 1) {
        arr[0] = num;
        return arr;
    }

    const mid = Math.round(arr.length / 2);
    let outside = num;

    for (let i = mid; i < arr.length; i++) {
        let inside = arr[i];
        arr[i] = outside;
        outside = inside;
    }

    arr.push(outside);
    return arr;
}

module.exports = { shiftArray };