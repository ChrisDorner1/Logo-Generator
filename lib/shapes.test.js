const {Circle, Triangle, Square, Shape} = require('./shapes')

let shapeColor = "white"
let textColor = "red"
let text = "SVG"

describe('Circle', () => {
    it('Creates a red circle', () => {
        const shape = new Circle()
        expect(shape.render(shapeColor, textColor, text)).toEqual(`<svg xmlns="http://www.w3.org/2000/svg"
        width="300" height="200">
        <rect width="100%" height="100%" fill="white"/>
        <circle cx="150" cy="100" r="75" fill="${shapeColor}" stroke="black" stroke-width="2"/>
        <text x="150" y="108" font-size="25" text-anchor="middle" fill="${textColor}">${text}</text>
     </svg>`)
    })
})

describe('Triangle', () => {
    it('Creates a triangle', () => {
        const shape = new Triangle()
        expect(shape.render(shapeColor, textColor, text)).toEqual(`<svg xmlns="http://www.w3.org/2000/svg"
        width="300" height="200">
        <rect width="100%" height="100%" fill="white"/>
        <polygon points="150,10 290,190 10,190" fill="${shapeColor}" stroke="black" stroke-width="2"/>
        <text x="150" y="130" font-size="25" text-anchor="middle" fill="${textColor}">${text}</text>
     </svg>`)
    })
})


describe('Square', () => {
    it('Creates a square', () => {
        const shape = new Square()
        expect(shape.render(shapeColor, textColor, text)).toEqual(`<svg xmlns="http://www.w3.org/2000/svg"
        width="300" height="200" >
        <rect width="100%" height="100%" fill="white"/>
        <rect x="75" y="25" width="150" height="150" fill="${shapeColor}" stroke="black" stroke-width="2"/>
        <text x="150" y="100" font-size="25" text-anchor="middle" fill="${textColor}" stroke="black" stroke-width=".5">${text}</text>
    </svg>`)
    })
}) 