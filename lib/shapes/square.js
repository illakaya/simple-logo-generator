const Shape = require('./shape');

class Square extends Shape {
    constructor() {
        super();
    }

    render() { // Implement render method for Square
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = Square;