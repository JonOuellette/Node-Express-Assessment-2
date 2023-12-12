const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('00:00 should be midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('00:12 should be twelve twelve am', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });
  
  test('01:00 should be one o\'clock am', () => {
    expect(timeWord('01:00')).toBe('one o\'clock am');
  });

  test('12:00 should be noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('12:09 should be twelve oh nine pm', () => {
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
  });
});