const colourCheck = require('../colour/colourCheck');

describe('colourCheck', () => {
  it('returns true for valid colour names', () => {
    expect(colourCheck('red')).toBe(true);
    expect(colourCheck('blue')).toBe(true);
    expect(colourCheck('green')).toBe(true);
  });

  it('returns true for valid colour names (case insensitive)', () => {
    expect(colourCheck('ReD')).toBe(true);
    expect(colourCheck('BLUE')).toBe(true);
    expect(colourCheck('GREEN')).toBe(true);
  });

  it('returns true for valid hexadecimal colours', () => {
    expect(colourCheck('#ff0000')).toBe(true); // red
    expect(colourCheck('#00ff00')).toBe(true); // green
    expect(colourCheck('#0000ff')).toBe(true); // blue
  });

  it('returns true for valid shorthand hexadecimal colours', () => {
    expect(colourCheck('#f00')).toBe(true); // red
    expect(colourCheck('#0f0')).toBe(true); // green
    expect(colourCheck('#00f')).toBe(true); // blue
  });

  it('returns false for invalid colour names', () => {
    expect(colourCheck('midnight blue')).toBe(false);
    expect(colourCheck('sand')).toBe(false);
    expect(colourCheck('till')).toBe(false);
  });

  it('returns false for invalid hexadecimal colours', () => {
    expect(colourCheck('#12345')).toBe(false); // Invalid length
    expect(colourCheck('#ggg')).toBe(false); // Invalid characters
    expect(colourCheck('#ff')).toBe(false); // Invalid length
  });

  it('returns false for empty string', () => {
    expect(colourCheck('')).toBe(false);
  });
});