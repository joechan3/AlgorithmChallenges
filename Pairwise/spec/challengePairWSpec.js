/*global describe, beforeEach, it, expect, pairwise */

describe('Pairwise algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
        
    });
  
    it('pairwise([1, 4, 2, 3, 0, 5], 7) should return 11. ', function () {
        foo = pairwise([1, 4, 2, 3, 0, 5], 7);
        //foo = 11;
        expect(foo).toBe(11);
    });
    
    it('pairwise([1, 3, 2, 4], 4) should return 1.', function () {
        foo = pairwise([1, 3, 2, 4], 4);
        //foo = 1;
        expect(foo).toBe(1);
    });
    
    it('pairwise([1, 1, 1], 2) should return 1.', function () {
        foo = pairwise([1, 1, 1], 2);
        //foo = 1;
        expect(foo).toBe(1);
    });
    
    it('pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.', function () {
        foo = pairwise([0, 0, 0, 0, 1, 1], 1);
        //foo = 10;
        expect(foo).toBe(10);
    });
    
    it('pairwise([], 100) should return 0.', function () {
        foo = pairwise([], 100);
        //foo = 0;
        expect(foo).toBe(0);
    });
    
});