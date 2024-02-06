class Shape {
    constructure(width, height) {
        this.width = width;
        this.height = height;

    }

    calculateArea() {
        throw new Error('Method not implemented');
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log('width * height = area');
    }
    calculateArea() {
        return this.width * this.height;
    }
}

const shape1 = new Rectangle(7,7);
console.log(shape1.displayFormula());
console.log(shape1.calculateArea());
