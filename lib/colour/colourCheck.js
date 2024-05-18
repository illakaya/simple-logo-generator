// Retrieve colour list from another js file
const colourList = require('./colourList');

function isValidCSSColour(input) {
    // Check if the input is a valid CSS colour name (case-insensitive)
    if (colourList.includes(input.toLowerCase())) {
        return true;
    }
    // Regular expression for validating hexadecimal colour codes, Checks that it starts with # and is followed by either 6 or 3 valid characters
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    // Check if the input matches the hexadecimal colour code pattern
    return hexRegex.test(input);
}

module.exports = isValidCSSColour;