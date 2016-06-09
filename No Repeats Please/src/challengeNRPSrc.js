function permAlone(str) {
    'use strict';

    var arrPerm = []; //Holds all permutations of str (2 dimensional).
    var indexPerm = []; //Holds permutations of str's indices (2 dimensional).
    var tempStrPerm = []; //Temporary holder for one permutation of str (1 dimensional).
    var totalPermutations = 0; //Holds the total number of permutations of str (assumes all characters in str are unique).
    var repeatCount = 0; //Running count of number of permutations that contain repeated consecutive letters.
    var rExpRepeat = /(\w)\1/; //For repeated consecutive letters.

    //Permutation generation through lexicographic order: https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
    function generateIndexPermutations(a) {
        var k, l, temp;
        var permCollection = [];
        var firstPermutation = [];
        var lastPermutationFound = false; //true if the last permutation has been generated.
        var subArray = []; //Holds the portion of the array to be reversed during lexicographic order permutation generation
        
        a = a.split('');
        
        a.forEach(function makeUniqueElements(element, index) {
            a[index] = index;
        });
        
        a.sort(function sortInputAscending(x, y) {
            if (x === y) {
                return 0;
            }

            if (x < y) {
                return -1;
            }

            return 1;
        });
        
        firstPermutation = a.slice(0);
        
        permCollection.push(firstPermutation);
        
        //There is a conditional break in the while loop        
        while (true) {
            //Find the largest index k (i.e. right-most value) such that a[k] < a[k + 1]. 
            //If no such index exists, the permutation is the last permutation.
            for (k = a.length - 2; k >= 0; k -= 1) {
                if (a[k] < a[k + 1]) {
                    break;
                }
            }

            if (k === -1) {
                lastPermutationFound = true;
            }

            if (lastPermutationFound) {
                break;
            }

            //Find the largest index l (i.e. right-most value) greater than k such that a[k] < a[l].            
            for (l = a.length - 1; l > k; l -= 1) {
                if (a[k] < a[l]) {
                    break;
                }
            }

            //Swap the value of a[k] with that of a[l].
            temp = a[k];
            a[k] = a[l];
            a[l] = temp;

            //Reverse the sequence from a[k + 1] up to and including the final element a[n].
            if ((k + 1) === a.length - 1) {
                permCollection.push(a.slice(0));
            } else {
                subArray = a.slice(k + 1);
                subArray.reverse();
                a = (a.slice(0, k + 1)).concat(subArray);
                permCollection.push(a.slice(0));
            }

        }
        
        return permCollection;
        
    }
    
    indexPerm = generateIndexPermutations(str);
    
    totalPermutations = indexPerm.length;
    
    //Generate str's permutations
    indexPerm.forEach(function generateAllStrPerm(element) {
        element.forEach(function generateOneStrPerm(item) {
            tempStrPerm.push(str[item]);
        });
        arrPerm.push(tempStrPerm.join(''));
        tempStrPerm = [];
    });

    //Determine how many str permutations have consecutive letters repeated
    arrPerm.forEach(function countRepeats(element) {
        if (element.match(rExpRepeat) !== null) {
            repeatCount += 1;
        }
    });
    
    console.log('totalPermutations: ' + totalPermutations + ' repeatCount: ' + repeatCount);
    console.log(totalPermutations - repeatCount);
    //return str;
    
    return totalPermutations - repeatCount;
}

//permAlone('aab');


//str.match(regexp)
