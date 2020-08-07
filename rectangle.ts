class Rectangle extends Shape {
    public width: number;
    public height: number;
    public constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }
    public display(): void {
        super.display();
        document.write(`Width: ${this.width}<br>`);
        document.write(`Height: ${this.height}<br>`);
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}