describe("Algorithm tests", function() {
  var foo = undefined;
  
  beforeEach(function () {
        foo = undefined;
      });
  
  it('telephoneCheck("555-555-5555") should return a boolean.', function() {
    foo = telephoneCheck("555-555-5555");
    expect(typeof(foo)).toBe('boolean');
  });
  
  it('telephoneCheck("1 555-555-5555") should return true.', function() {
    foo = telephoneCheck("1 555-555-5555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("2(757)6227382") should return false.', function() {
    foo = telephoneCheck("2(757)6227382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("1 555-555-5555") should return true.', function() {
    foo = telephoneCheck("1 555-555-5555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("1 (555) 555-5555") should return true.', function() {
    foo = telephoneCheck("1 (555) 555-5555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("5555555555") should return true.', function() {
    foo = telephoneCheck("5555555555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("555-555-5555") should return true.', function() {
    foo = telephoneCheck("555-555-5555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("(555)555-5555") should return true.', function() {
    foo = telephoneCheck("(555)555-5555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("1(555)555-5555") should return true.', function() {
    foo = telephoneCheck("1(555)555-5555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("1 555)555-5555") should return false.', function() {
    foo = telephoneCheck("1 555)555-5555");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("1 555 555 5555") should return true.', function() {
    foo = telephoneCheck("1 555 555 5555");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("1 456 789 4444") should return true.', function() {
    foo = telephoneCheck("1 456 789 4444");
    expect(foo).toBe(true);
  });
  
  it('telephoneCheck("123**&!!asdf#") should return false.', function() {
    foo = telephoneCheck("123**&!!asdf#");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("55555555") should return false.', function() {
    foo = telephoneCheck("55555555");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("(6505552368)") should return false', function() {
    foo = telephoneCheck("(6505552368)");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("2 (757) 622-7382") should return false.', function() {
    foo = telephoneCheck("2 (757) 622-7382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("0 (757) 622-7382") should return false.', function() {
    foo = telephoneCheck("0 (757) 622-7382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("-1 (757) 622-7382") should return false', function() {
    foo = telephoneCheck("-1 (757) 622-7382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("2 757 622-7382") should return false.', function() {
    foo = telephoneCheck("2 757 622-7382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("10 (757) 622-7382") should return false.', function() {
    foo = telephoneCheck("10 (757) 622-7382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("27576227382") should return false.', function() {
    foo = telephoneCheck("27576227382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("(275)76227382") should return false.', function() {
    foo = telephoneCheck("(275)76227382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("2(757)6227382") should return false.', function() {
    foo = telephoneCheck("2(757)6227382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("2(757)622-7382") should return false.', function() {
    foo = telephoneCheck("2(757)622-7382");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("555)-555-5555") should return false.', function() {
    foo = telephoneCheck("555)-555-5555");
    expect(foo).toBe(false);
  });
  
  it('telephoneCheck("(555-555-5555") should return false.', function() {
    foo = telephoneCheck("(555-555-5555");
    expect(foo).toBe(false);
  });
  
});