const { sumOfEachRow } = require('./sum-of-each-row.js');

describe('sumOfEachRow', () => {
    it('can get totals from each matrix row', () => {
        let input1 = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
        let output1 = [6, 15, 18];
        expect(sumOfEachRow(input1)).toEqual(output1);

        let input2 = [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];
        let output2 = [6, 5, 20];
        expect(sumOfEachRow(input2)).toEqual(output2);
    });

    it('can handle null or undefined values', () => {
        let input1 = [ [null, 1, undefined], [3, 5, 7], [1, 7, 10] ];
        let output1 = [1, 15, 18];
        expect(sumOfEachRow(input1)).toEqual(output1);

        let input2 = [ [0, 1, 5], [-4, null, 2], [-3, 12, undefined] ];
        let output2 = [6, -2, 9];
        expect(sumOfEachRow(input2)).toEqual(output2);
    });
})