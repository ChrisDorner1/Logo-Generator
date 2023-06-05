const {Circle, Triangle, Square} = require('./shapes')

describe('Circle', () => {
    it('Creates a red circle', () => {
        const shape = new Circle()
        shape.setColor('red')
        expect(shape.render()).toEqual('<circle cx="150" cy="100: r="100" fill="red"/>')
    })
})

describe('Triangle', () => {
    it('Creates a blue triangle', () => {
        const shape = new Triangle()
        shape.setColor('blue')
        expect(shape.render()).toEqual('<polygon points="150, 0 300, 200 0, 200/>')
    })
})


describe('Square', () => {
    it('Creates a green square', () => {
        const shape = new Square()
        shape.setColor('green')
        expect(shape.render()).toEqual('`<rect x="50" y="0" width="200" height="200" fill="green"/>')
    })
}) 