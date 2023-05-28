const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes.js')

function init() {inquirer.prompt([
    {
        type: 'input',
        name: 'logoName',
        message: 'Please enter letters for the logo, please use no more than 3'
    },{
        type: 'list',
        name: 'shapes',
        message: 'Please choose one of these three shapes.',
        choices: ["circle", 'triangle', 'square'],
    },{
        type: 'input',
        name: 'shapeColour',
        message: 'Please choose a colour for your logo shape, then enter it in hexidecimal code or in CSS keyword'
    },{
        type: "input",
        name: "textColour",
        message: "Please choose a colour for your logo text, then enter it in hexidecimal code or in CSS keyword"
    }
]).then(answers => {
    console.log(answers)})
}
init()

