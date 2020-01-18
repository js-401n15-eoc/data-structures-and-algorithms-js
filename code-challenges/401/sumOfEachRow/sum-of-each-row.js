'use strict';

const sumOfEachRow = (matrix) => {
    let res = [];
    let i = 0;
    matrix.forEach(rowArr => {
        let rowSum = 0;
        rowArr.forEach(item => {
            rowSum += !!item ? item : 0;
        });
        i++;
        res.push(rowSum);
    });

    return res;
};

module.exports = { sumOfEachRow };