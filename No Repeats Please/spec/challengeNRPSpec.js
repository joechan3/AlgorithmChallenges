/*global describe, beforeEach, it, expect, permAlone */

describe('No repeats please algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
    });
  
    it('permAlone("aab") should return a number.', function () {
        foo = permAlone("aab");
        //foo = 2;
        expect(typeof(foo)).toBe('number');
    });
    
    it('permAlone("aab") should return 2.', function () {
        foo = permAlone("aab");
        //foo = 2;
        expect(foo).toBe(2);
    });
    
    it('permAlone("aaa") should return 0.', function () {
        foo = permAlone("aaa");
        //foo = 0;
        expect(foo).toBe(0);
    });
    
    it('permAlone("aabb") should return 8.', function () {
        foo = permAlone("aabb");
        //foo = 8;
        expect(foo).toBe(8);
    });
    
    it('permAlone("abcdefa") should return 3600.', function () {
        foo = permAlone("abcdefa");
        //foo = 3600;
        expect(foo).toBe(3600);
    });
    
    it('permAlone("abfdefa") should return 2640.', function () {
        foo = permAlone("abfdefa");
        //foo = 2640;
        expect(foo).toBe(2640);
    });
    
    it('permAlone("zzzzzzzz") should return 0. ', function () {
        foo = permAlone("zzzzzzzz");
        //foo = 0;
        expect(foo).toBe(0);
    });
    
    it('permAlone("a") should return 1.', function () {
        foo = permAlone("a");
        //foo = 1;
        expect(foo).toBe(1);
    });
    
    it('permAlone("aaab") should return 0', function () {
        foo = permAlone("aaab");
        //foo = 0;
        expect(foo).toBe(0);
    });
    
    it('permAlone("aaabb") should return 12', function () {
        foo = permAlone("aaabb");
        //foo = 12;
        expect(foo).toBe(12);
    });
    
});