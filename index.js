// Add relevant libraries
const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/shapes/triangle');
const Circle = require('./lib/shapes/circle');
const Square = require('./lib/shapes/square');
const textCheck = require('./lib/text/textCheck');
const colourCheck = require('./lib/colour/colourCheck');

// Create an array of questions for user input
const questions = [
    // object to prompt the user for text input
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: function (input) {
            // Use a ternary operator to inform users that the text must have a max length of 3
            return input.length <= 3 ? true : 'Text must be up to three characters long.';
        },
    },
    // object to prompt the user for the colour input
    {
        type: 'input',
        name: 'colour',
        message: 'Enter a colour keyword (with no spacing) or hexadecimal number for the text:',
        validate: function (input) {
            return colourCheck(input) ? true : 'Enter a valid CSS colour name or hexdecimal input starting with #.'
        }
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
        message: 'Enter a colour keyword (with no spacing) or hexadecimal number for the shape:',
        validate: function (input) {
            return colourCheck(input) ? true : 'Enter a valid CSS colour name or hexdecimal input starting with #.'
        }
    },
    // object to prompt the user for a name for the svg file
    {
        type: 'input',
        name: 'file',
        message: 'Enter a name for the logo file',
        // validate that the file name is feasible
        validate: function (input) {
            const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g;
            if (invalidChars.test(input)) {
                return 'Invalid file name. Please avoid using special characters.';
            }
            return true;
        },
    },
]

// Use inquirer pkg to ask user for input
inquirer
    .prompt(questions)
    .then((res) => {
        let userChoice = [res.text, res.colour, res.shape, res.shapeColour, res.file];
        // Print the user's decision to the terminal
        for (const choice of userChoice) {
            console.log(choice);
        }
        let yAxis = '50%';
        // Create logo SVG code using switch cases that invoke object constructors
        let logoShape;
        switch (res.shape) {
            case 'Triangle':
                yAxis = '66%';
                logoShape = new Triangle();
                break;
            case 'Circle':
                logoShape = new Circle();
                break;
            case 'Square':
                logoShape = new Square();
                break;
        }
        // set the colour of the shape by calling the Shapes constructor's method
        logoShape.setColour(res.shapeColour);
        // render the shape, add the xmlns to declare that the content in the svg element conforms to SVG
        // centered the text
        const svgContent = 
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logoShape.render()}
    <text x="150" y="${yAxis}" text-anchor="middle" fill="${res.colour}" font-size="72" font-weight="bold" dominant-baseline="middle">${textCheck(res.text)}</text>
</svg>`;
        // Save the file in the output directory
        fs.writeFile(`./output/${res.file}.svg`, svgContent, (err) => {
            err ? console.error(err) : console.log(`Generated ${res.file}.svg`);
        });
    });
