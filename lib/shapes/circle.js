const Shape = require('./shape');

class Circle extends Shape {
    constructor() {
        super();
    }
    // Implement render method for Circle
    // cx is the x coordinate of the centre
    // cy is the y coordinate of the centre
    // r is the radius of the circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
    }
}

module.exports = Circle;
