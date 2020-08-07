class Circle extends Shape {
    public radius: number;
    public constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
        alert("I'm in Circle ctor...");
    }
    public display(): void {
        super.display();
        document.write(`Radius: ${this.radius}<br>`);
    }
    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}