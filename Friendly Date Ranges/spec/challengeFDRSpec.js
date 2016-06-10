/*global describe, beforeEach, it, expect, makeFriendlyDates */

describe('Friendly date ranges algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
    });
  
    it('makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].', function () {
        foo = makeFriendlyDates(["2016-07-01", "2016-07-04"]);
        //foo = ["July 1st","4th"];
        expect(foo).toEqual(["July 1st","4th"]);
    });
    
    it('makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].', function () {
        foo = makeFriendlyDates(["2016-12-01", "2017-02-03"]);
        //foo = ["December 1st","February 3rd"];
        expect(foo).toEqual(["December 1st","February 3rd"]);
    });
    
    it('makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].', function () {
        foo = makeFriendlyDates(["2016-12-01", "2018-02-03"]);
        //foo = ["December 1st, 2016","February 3rd, 2018"];
        expect(foo).toEqual(["December 1st, 2016","February 3rd, 2018"]);
    });
    
    it('makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]', function () {
        foo = makeFriendlyDates(["2017-03-01", "2017-05-05"]);
        //foo = ["March 1st, 2017","May 5th"];
        expect(foo).toEqual(["March 1st, 2017","May 5th"]);
    });
    
    it('makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].', function () {
        foo = makeFriendlyDates(["2018-01-13", "2018-01-13"]);
        //foo = ["January 13th, 2018"];
        expect(foo).toEqual(["January 13th, 2018"]);
    });
    
    it('makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].', function () {
        foo = makeFriendlyDates(["2022-09-05", "2023-09-04"]);
        //foo = ["September 5th, 2022","September 4th"];
        expect(foo).toEqual(["September 5th, 2022","September 4th"]);
    });
    
    it('makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].', function () {
        foo = makeFriendlyDates(["2022-09-05", "2023-09-05"]);
        //foo = ["September 5th, 2022","September 5th, 2023"];
        expect(foo).toEqual(["September 5th, 2022","September 5th, 2023"]);
    });
    
});