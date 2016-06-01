function telephoneCheck(str) {
    'use strict';

    var matchesVer1;
    var matchesVer2;
    var rExpCountryCodeSegment = /[1]*/;
    var rExpAreaCodeSegmentVer1 = /(\()[0-9]{3}(\))/;
    var rExpAreaCodeSegmentVer2 = /(-)*[0-9]{3}(-)*/;
    var rExpBodySegment = /[0-9]{3}(-|\s)*[0-9]{4}/;
    var rExpFullVer1 = new RegExp(rExpCountryCodeSegment.source + rExpAreaCodeSegmentVer1.source + rExpBodySegment.source);
    var rExpFullVer2 = new RegExp(rExpCountryCodeSegment.source + rExpAreaCodeSegmentVer2.source + rExpBodySegment.source);

    function removeSpaces(inputStr) {
        var strArr = inputStr.split('');
        strArr = strArr.filter(function (value) {
            if (value === ' ') {
                return false;
            }
            return true;
        });
        return strArr.join('');
    }

    str = removeSpaces(str);

    matchesVer1 = str.match(rExpFullVer1);
    matchesVer2 = str.match(rExpFullVer2);

    if (!matchesVer1) {
        if (!matchesVer2) {
            return false;
        }
        if (str === matchesVer2[0]) {
            return true;
        }
    } else if (str === matchesVer1[0]) {
        return true;
    }

    return false;
}