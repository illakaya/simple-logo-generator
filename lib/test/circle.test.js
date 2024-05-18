const Circle = require('../shapes/circle')

describe('Circle', () => {
    it('renders a circle with default color', () => {
      const circle = new Circle();
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" />');
    });

    it('renders a circle with hexadecimal color', () => {
        const circle = new Circle();
        circle.setColour('#9AC6C5')
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#9AC6C5" />');
      });
  
    it('renders a circle with specified color', () => {
      const circle = new Circle();
      circle.setColour('blue');
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });