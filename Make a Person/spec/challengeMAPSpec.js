/*global describe, beforeEach, it, expect, makeFriendlyDates */

describe('Make a person algorithm tests', function () {
    var foo;
  
    beforeEach(function () {
        foo = undefined;
        
    });
  
    it('Object.keys(bob).length should return 6.', function () {
        foo = Object.keys(bob).length;
        //foo = 6;
        expect(foo).toBe(6);
    });
    
    it('bob instanceof Person should return true.', function () {
        foo = bob instanceof Person;
        //foo = true;
        expect(foo).toBe(true);
    });
    
    it('bob.firstName should return undefined. ', function () {
        foo = bob.firstName;
        //foo = undefined;
        expect(foo).toBe(undefined);
    });
    
    it('bob.lastName should return undefined.', function () {
        foo = bob.lastName;
        //foo = undefined;
        expect(foo).toBe(undefined);
    });
    
    it('bob.getFirstName() should return "Bob".', function () {
        foo = bob.getFirstName();
        //foo = "Bob";
        expect(foo).toEqual("Bob");
    });
    
    it('bob.getLastName() should return "Ross".', function () {
        foo = bob.getLastName();
        //foo = "Ross";
        expect(foo).toEqual("Ross");
    });
    
    it('bob.getFullName() should return "Bob Ross".', function () {
        foo = bob.getFullName();
        //foo = "Bob Ross";
        expect(foo).toEqual("Bob Ross");
    });
    
    it('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").', function () {
        bob.setFirstName("Haskell");
        foo = bob.getFullName();
        //foo = "Haskell Ross";
        expect(foo).toEqual("Haskell Ross");
    });
    
    it('bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").', function () {
        bob.setLastName("Curry");
        foo = bob.getFullName();
        //foo = "Haskell Curry";
        expect(foo).toEqual("Haskell Curry");
    });
    
    it('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry"). ', function () {
        bob.setFullName("Haskell Curry");
        foo = bob.getFullName();
        //foo = "Haskell Curry";
        expect(foo).toEqual("Haskell Curry");
    });
    
    it('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry"). ', function () {
        bob.setFullName("Haskell Curry");
        foo = bob.getFirstName();
        //foo = "Haskell";
        expect(foo).toEqual("Haskell");
    });
    
    it('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").', function () {
        bob.setFullName("Haskell Curry");
        foo = bob.getLastName();
        //foo = "Curry";
        expect(foo).toEqual("Curry");
    });
    
    
    
});