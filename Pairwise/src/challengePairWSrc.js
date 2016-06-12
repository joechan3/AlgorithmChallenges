function pairwise(arr, arg) {
    "use strict";

    var goodIndices = [];
    var sum;

    var isUsed = function checkUsed(i) {
        var status = false;

        goodIndices.forEach(function check(element) {
            if (element === i) {
                status = true;
            }
        });

        return status;
    };

    arr.forEach(function findPairs(firstNum, firstNumIndex, arr) {
        arr.forEach(function compare(secondNum, secondNumIndex) {
            if (firstNumIndex !== secondNumIndex && (firstNum + secondNum) === arg) {
                if (!isUsed(secondNumIndex) && !isUsed(firstNumIndex)) {
                    goodIndices.push(firstNumIndex, secondNumIndex);
                }
            }
        });
    });

    sum = goodIndices.reduce(function add(a, b) {
        return a + b;
    }, 0);

    return sum;
}