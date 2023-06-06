class Shape{
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor,
        this.textColor = textColor,
        this.text = text

    }
}

class Circle extends Shape {
    render(shapeColor, textColor, text) {
        return `<svg xmlns="http://www.w3.org/2000/svg"
        width="300" height="200">
        <rect width="100%" height="100%" fill="white"/>
        <circle cx="150" cy="100" r="75" fill="${shapeColor}" stroke="black" stroke-width="2"/>
        <text x="150" y="108" font-size="25" text-anchor="middle" fill="${textColor}">${text}</text>
     </svg>`
    }
}

class Triangle extends Shape {
    render(shapeColor, textColor, text) {
        return `<svg xmlns="http://www.w3.org/2000/svg"
        width="300" height="200">
        <rect width="100%" height="100%" fill="white"/>
        <polygon points="150,10 290,190 10,190" fill="${shapeColor}" stroke="black" stroke-width="2"/>
        <text x="150" y="130" font-size="25" text-anchor="middle" fill="${textColor}">${text}</text>
     </svg>`
    }
}

class Square extends Shape {
    render(shapeColor, textColor, text) {
        return `<svg xmlns="http://www.w3.org/2000/svg"
        width="300" height="200" >
        <rect width="100%" height="100%" fill="white"/>
        <rect x="75" y="25" width="150" height="150" fill="${shapeColor}" stroke="black" stroke-width="2"/>
        <text x="150" y="100" font-size="25" text-anchor="middle" fill="${textColor}" stroke="black" stroke-width=".5">${text}</text>
    </svg>`
    }
}



module.exports = {Circle, Triangle, Square, Shape}

