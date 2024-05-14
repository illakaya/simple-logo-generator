// Add relevant libraries
const inquirer = require('inquirer');
const fs = require('fs');
const triangle = require('./lib/shapes/triangle');
const circle = require('./lib/shapes/circle');
const square = require('./lib/shapes/square');

inquirer
    .prompt([
        // object to prompt the user for text input
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: function (input) {
                // Use a ternary operator
                return input.length <= 3 ? true : 'Text must be up to three characters.';
            },
        },
        // object to prompt the user for the colour input
        {
            type: 'input',
            name: 'colour',
            message: 'Enter a colour keyword or hexadecimal number for the text:',
            default: 'black',
        },
        // object to prompt the user to choose a shape
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        // object to prompt the user for the shape colour
        {
            type: 'input',
            name: 'shapeColour',
            message: 'Enter a colour keyword or hexadecimal number for the shape:',
            default: 'white',
        },
    ])
    .then((res) => {
        let userChoice = [res.text, res.colour, res.shape, res.shapeColour];
        for (const choice of userChoice) {
            console.log(choice);
        }
    });
