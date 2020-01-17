const { arrayBinarySearch } = require('./array-binary-search.js');

describe('arrayBinarySearch', () => {
    let arr = [1, 2, 3, 4, 5];
    it('can return -1 for empty arrays, null or undefined targets, or targets not in array', () => {
        expect(arrayBinarySearch([], null)).toEqual(-1);
        expect(arrayBinarySearch(arr, null)).toEqual(-1);
        expect(arrayBinarySearch(arr, 7)).toEqual(-1);
    });

    it('can return index for targets found in an array', () => {
        expect(arrayBinarySearch(arr, 1)).toEqual(0);
        expect(arrayBinarySearch(arr, 2)).toEqual(1);
        expect(arrayBinarySearch(arr, 3)).toEqual(2);
        expect(arrayBinarySearch(arr, 4)).toEqual(3);
        expect(arrayBinarySearch(arr, 5)).toEqual(4);
    });
});