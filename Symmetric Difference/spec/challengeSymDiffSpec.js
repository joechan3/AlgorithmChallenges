/*global describe, beforeEach, it, expect, sym */

describe('Symmetric Difference algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
    });
  
    it('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].', function () {
        foo = sym([1, 2, 3], [5, 2, 1, 4]);
        expect(foo).toEqual([3, 4, 5]);
    });
    
    it('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.', function () {
        foo = sym([1, 2, 3], [5, 2, 1, 4]);
        expect(foo.length).toBe(3);
    });
    
    it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].', function () {
        foo = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
        expect(foo).toEqual([1, 4, 5]);
    });
    
    it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.', function () {
        foo = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
        expect(foo.length).toBe(3);
    });
    
    it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]', function () {
        foo = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
        //foo = [1, 4, 5];
        expect(foo).toEqual([1, 4, 5]);
    });
    
    it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements', function () {
        foo = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
        expect(foo.length).toBe(3);
    });
    
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7]', function () {
        foo = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
        expect(foo).toEqual([2, 3, 4, 6, 7]);
    });
    
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.', function () {
        foo = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
        expect(foo.length).toBe(5);
    });
    
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]', function () {
        foo = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
        expect(foo).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
    });
    
    it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements', function () {
        foo = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
        expect(foo.length).toBe(8);
    });
  
});