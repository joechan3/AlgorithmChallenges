/*global describe, beforeEach, it, expect, orbitalPeriod */

describe('Make a person algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
        
    });
  
    it('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].', function () {
        foo = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
        //foo = [{name: "sputnik", orbitalPeriod: 86400}];
        expect(foo).toEqual([{name: "sputnik", orbitalPeriod: 86400}]);
    });
    
    it('orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]. ', function () {
        foo = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
        //foo = [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}];
        expect(foo).toEqual([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
    });

});