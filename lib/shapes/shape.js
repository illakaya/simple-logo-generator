// Create a class called shape in which triangle, square and circle may inherit
class Shape {
    constructor () {
        this.colour = 'black'; // default colour
    }
    setColour(colour) { // changes the colour of the shape (prototype method that will be inherited by all shapes but not stored)
        this.colour = colour;
    }
    render() { // renders the shape but tells users if there are any errors, currently abstract
        throw new Error('Method `render()` must be implemented');
    }
}

module.exports = Shape;