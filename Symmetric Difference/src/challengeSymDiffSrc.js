function findSymDiff(setA, setB) {
    'use strict';
    
    var symmetricDifference = [];

    function isInANotB(value) {
        var i;
        
        for (i = 0; i < setB.length; i += 1) {
            if (value === setB[i]) {
                return false;
            }
        }
        return true;
    }

    function isInBNotA(value) {
        var i;
        
        for (i = 0; i < setA.length; i += 1) {
            if (value === setA[i]) {
                return false;
            }
        }
        return true;
    }

    symmetricDifference = setA.filter(isInANotB).concat(setB.filter(isInBNotA));
    symmetricDifference.sort(function (a, b) {
        return a - b;
    });
    return symmetricDifference;
}

function destroyIntraDuplicates(set) {
    'use strict';
    
    var i;
    var processedSet = [];
    
    set.sort(function (a, b) {
        return a - b;
    });

    for (i = 0; i < (set.length - 1); i += 1) {
        if (set[i] !== set[i + 1]) {
            processedSet.push(set[i]);
        }
    }
    
    processedSet.push(set[set.length - 1]);
    return processedSet;
}

function sym() {
    'use strict';
    
    var i;
    var numberOfArguments = arguments.length;
    var setA = arguments[0];
    var setB = arguments[1];
    
    setA = destroyIntraDuplicates(setA);
    
    //Handle arguments a pair at a time
    for (i = 0; i < numberOfArguments; i += 1) {
        setB = destroyIntraDuplicates(setB);
        setA = findSymDiff(setA, setB);
        if ((i + 2) < numberOfArguments) {
            setB = arguments[i + 2];
        } else {
            return setA;
        }
    }
}