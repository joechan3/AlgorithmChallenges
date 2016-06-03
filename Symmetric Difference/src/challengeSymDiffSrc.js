function findSymDiff(setA, setB) {
    'use strict';

    var symmetricDifference = [];

    function isInANotB(value) {
        var status = true;

        setB.forEach(function (element) {
            if (value === element) {
                status = false;
            }
        });

        return status;
    }

    function isInBNotA(value) {
        var status = true;

        setA.forEach(function (element) {
            if (value === element) {
                status = false;
            }
        });

        return status;
    }

    symmetricDifference = setA.filter(isInANotB).concat(setB.filter(isInBNotA));
    symmetricDifference.sort(function (a, b) {
        return a - b;
    });

    return symmetricDifference;
}

function destroyIntraDuplicates(set) {
    'use strict';

    var processedSet = [];

    set.sort(function (a, b) {
        return a - b;
    });

    set.forEach(function (currentElement, index, array) {
        if (index !== array.length - 1) {
            if (currentElement !== array[index + 1]) {
                processedSet.push(currentElement);
            }
        }

    });

    //Last element is pushed to processedSet because any duplicates to it in
    //the set array would have been ignored in the forEach above.
    processedSet.push(set[set.length - 1]);
    return processedSet;
}

function sym() {
    'use strict';

    var argArray = Array.from(arguments);

    argArray = argArray.reduce(function (currentElement, nextElement) {
        currentElement = destroyIntraDuplicates(currentElement);
        nextElement = destroyIntraDuplicates(nextElement);
        currentElement = findSymDiff(currentElement, nextElement);
        return currentElement;
    });

    return argArray;
}