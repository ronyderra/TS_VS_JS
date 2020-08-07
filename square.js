var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, side) {
        var _this = _super.call(this, color) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.display = function () {
        _super.prototype.display.call(this);
        document.write("Side: " + this.side + "<br>");
    };
    Square.prototype.getArea = function () {
        return this.side * this.side;
    };
    Square.prototype.getPerimeter = function () {
        return 4 * this.side;
    };
    return Square;
}(Shape));
