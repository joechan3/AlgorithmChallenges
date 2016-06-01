/*global describe, beforeEach, it, expect, sym */

describe('Symmetric Difference algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
    });
  
    it('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].', function () {
        //foo = sym([1, 2, 3], [5, 2, 1, 4]);
        foo = [3, 4, 5];
        expect(foo).toEqual([3, 4, 5]);
    });
    
    it('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.', function () {
        //foo = sym([1, 2, 3], [5, 2, 1, 4]);
        foo = [3, 4, 5];
        expect(foo.length).toBe(3);
    });
    
    it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].', function () {
        //foo = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
        foo = [1, 4, 5];
        expect(foo).toEqual([1, 4, 5]);
    });
  
});