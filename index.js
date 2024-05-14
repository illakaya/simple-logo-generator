// Add relevant libraries
const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/shapes/triangle');
const Circle = require('./lib/shapes/circle');
const Square = require('./lib/shapes/square');

inquirer
    .prompt([
        // object to prompt the user for text input
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: function (input) {
                // Use a ternary operator to inform users that the text must have a max length of 3
                return input.length <= 3 ? true : 'Text must be up to three characters.';
            },
        },
        // object to prompt the user for the colour input
        {
            type: 'input',
            name: 'colour',
            message: 'Enter a colour keyword or hexadecimal number for the text:',
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
    ])
    .then((res) => {
        let userChoice = [res.text, res.colour, res.shape, res.shapeColour, res.file];
        for (const choice of userChoice) {
            console.log(choice);
        }

        // Create logo SVG code using switch cases that invoke object constructors
        let logoShape;
        switch (res.shape) {
            case 'Triangle':
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
        console.log(logoShape);
        // render the shape, add the xmlns to declare that the content in the svg element conforms to SVG
        const svgContent = `
        <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            ${logoShape.render()}
        </svg>`;

        fs.writeFile(`./output/${res.file}.svg`, svgContent, (err) => {
            err ? console.error(err) : console.log(`Generated ${res.file}.svg`);
        });
    });
