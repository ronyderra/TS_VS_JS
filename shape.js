var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
        alert("I'm in Shape ctor...");
    }
    Shape.prototype.display = function () {
        document.write("Color: " + this.color + "<br>");
    };
    return Shape;
}());
