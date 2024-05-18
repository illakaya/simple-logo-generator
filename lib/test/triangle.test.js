const Triangle = require('../shapes/triangle')

describe('Triangle', () => {
    it('renders a triangle with default color', () => {
      const triangle = new Triangle();
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="black" />');
    });

    it('renders a triangle with hexadecimal color', () => {
        const triangle = new Triangle();
        triangle.setColour('#9AC6C5')
        expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="#9AC6C5" />');
      });
  
    it('renders a triangle with specified color', () => {
      const triangle = new Triangle();
      triangle.setColour('blue');
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
  });