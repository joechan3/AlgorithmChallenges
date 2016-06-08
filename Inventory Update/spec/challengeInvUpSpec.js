/*global describe, beforeEach, it, expect, updateInventory */

describe('Inventory Update algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
    });
  
    it('updateInventory(curInv, newInv) should return an array.', function () {
        foo = updateInventory(curInv, newInv);
        //foo = ['foo', 'bar', 'baz']        ;
        expect(Array.isArray(foo)).toBe(true);
    });
    
    it('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.', function () {
        foo = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
        //foo = ['foo', 'bar', 'baz', 'bob', 'joe', 'cat'];
        expect(foo.length).toBe(6);
    });
    
    it('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].', function () {
        foo = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
        //foo = [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]];
        expect(foo).toEqual([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]);
    });
    
    it('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]', function () {
        foo = updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);
        //foo = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
        expect(foo).toEqual([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]);
    });
    
    it('updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]. ', function () {
        foo = updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
        //foo = [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]];
        expect(foo).toEqual([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);
    });
    
    it('updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].', function () {
        foo = updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
        //foo = [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]];
        expect(foo).toEqual([[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]);
    });
    
});