const allShapes: Shape[] = [];
for (let i = 0; i < 20; i++) {
    switch (getRadnomNumber(1, 3)) {
        case 1: allShapes.push(new Square(getRadnomColor(), getRadnomNumber(1, 100)));
            break;
        case 2: allShapes.push(new Circle(getRadnomColor(), getRadnomNumber(1, 100)));
            break;
        case 3: allShapes.push(new Rectangle(getRadnomColor(), getRadnomNumber(1, 100), getRadnomNumber(1, 100)));
            break;
    }
}

for(const shape of allShapes) {
    shape.display();
    document.write("Area: " + shape.getArea() + "<br>");
    document.write("Perimeter: " + shape.getPerimeter() + "<br>");
    if(shape instanceof Circle) {
        document.write("Diameter: " + shape.radius * 2 + "<br>");
    }
    document.write("<hr>");
}


function getRadnomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRadnomColor() {
    switch (getRadnomNumber(1, 6)) {
        case 1: return "Red";
        case 2: return "Green";
        case 3: return "Blue";
        case 4: return "Yellow";
        case 5: return "Magenta";
        case 6: return "Cyan";
    }
}
