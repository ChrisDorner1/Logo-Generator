const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes.js')

const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Please enter letters for the logo, please use no more than 3'
    },{
        type: 'list',
        name: 'shapes',
        message: 'Please choose one of these three shapes.',
        choices: ["Circle", 'Triangle', 'Square'],
    },{
        type: 'input',
        name: 'shapeColour',
        message: 'Please choose a colour for your logo shape, then enter it in hexidecimal code or in CSS keyword'
    },{
        type: "input",
        name: "textColour",
        message: "Please choose a colour for your logo text, then enter it in hexidecimal code or in CSS keyword"
    }
]


function createShape(shapes, shapeColour) {
    if (shapes === Circle) {
        const shape = new Circle()
        shape.setColor(shapeColour)
        return shape.render()
    }else if (shapes === Triangle) {
        const shape = new Triangle()
        shape.setColor(shapeColour)
        return shape.render()
    }else if (shapes === Square) {
        const shape = new Square()
        shape.setColor(shapeColour)
        return shape.render()
    }
}


function init() {
    inquirer.prompt(questions)
        .then((answers) => {
                if (answers.logoName.length < 1 || answers.logoName.length > 3) {
                        console.log('You may only use between 1 and 3 characters')
                        init() 
            } else if (answers.shapes === "Square") {
                const square = new Square(answers.shapeColour, answers.textColour, answers.logoName)
                fs.writeFile('./examples/square.svg', square.render(answers.shapeColour, answers.textColour, answers.logoName),  err => err ? console.log(err): console.log('success'))
            }else if (answers.shapes === "Triangle"){
                const triangle = new Triangle(answers.shapeColour, answers.textColour, answers.logoName)
                fs.writeFile('./examples/triangle.svg', triangle.render(answers.shapeColour, answers.textColour, answers.logoName), err => err ? console.log(err): console.log('Success'))
            }else if (answers.shapes === "Circle"){
                const circle = new Circle(answers.shapeColour, answers.textColour, answers.logoName)
                fs.writeFile('./examples/circle.svg', circle.render(answers.shapeColour, answers.textColour, answers.logoName), err => err ? console.log(err): console.log('Success'))
            }else{
                console.log("Failed to create file")
            }
        })
}
            
init()