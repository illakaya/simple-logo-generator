const Square = require('../shapes/square')

describe('Square', () => {
    it('renders a square with default color', () => {
      const square = new Square();
      expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="black" />');
    });

    it('renders a square with hexadecimal color', () => {
        const square = new Square();
        square.setColour('#9AC6C5')
        expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="#9AC6C5" />');
      });
  
    it('renders a square with specified color', () => {
      const square = new Square();
      square.setColour('blue');
      expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
    });
  });