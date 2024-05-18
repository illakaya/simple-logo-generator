const Shape = require('./shape');

// extend the shape class
class Square extends Shape {
    constructor() {
        super();
    }
    // Implement render method for Square
    // x is the x coordinate of the top left corner of the rectangle
    // y is the y coordinate of the top left corner of the rectangle
    // height and width provides the size of the rectangle
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.colour}" />`;
    }
}

module.exports = Square;
