const Shape = require('./shape');

class Triangle extends Shape {
    constructor() {
        super();
    }
    // Implement render method for Triangle
    // polygon is the SVG element
    // each pair of numbers in points is the coordinates for a vertex of the polygon
    // the comma separates the x from the y coordinate and the SPACE separates each vertex
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.colour}" />`;
    }
}

module.exports = Triangle;
