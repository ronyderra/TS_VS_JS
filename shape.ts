abstract class Shape {

    public color: string;

    public constructor(color: string) {
        this.color = color;
        alert("I'm in Shape ctor...");
    }

    public display(): void {
        document.write(`Color: ${this.color}<br>`);
    }

    public abstract getArea(): number;
    public abstract getPerimeter(): number;
}