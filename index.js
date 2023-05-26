const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('./lib/shapes.js')

function init() {inquirer.prompt([
    {
        type: 'input',
        name: 'logo',
        message: 'Please enter letters for the logo, please use no more than 3'
    },{
        type: 'list',
        name: 'shapes',
        message: 'Please choose one of these three shapes.',
        choices: ["circle", 'triangle', 'square'],
    },{
        type: 'input',
        name: 'colour',
        message: 'Please enter a colour of your choice, using either its name or hexidecimal code'
    },
]
)}
init()