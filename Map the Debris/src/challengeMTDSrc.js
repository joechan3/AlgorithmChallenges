function orbitalPeriod(arr) {
    "use strict";

    var avgAlt; //average altitude of item in km
    var axis; //the orbit's semi-major axis in km
    var earthRadius = 6367.4447; //in km
    var GM = 398600.4418; //standard gravitational parameters in km^3/s^2
    var newArr = [];
    var oPeriod; //orbital period in seconds
    var pi = Math.PI;

    arr.forEach(function makeNewArr(element) {
        avgAlt = element.avgAlt;
        axis = avgAlt + earthRadius;
        oPeriod = 2 * pi * Math.sqrt(Math.pow(axis, 3) / GM);
        newArr.push({name: element.name, orbitalPeriod: Math.round(oPeriod)});
    });

    return newArr;
}