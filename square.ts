class Square extends Shape {
    public side: number;
    public constructor(color: string, side: number) {
        super(color);
        this.side = side;
    }
    public display(): void {
        super.display();
        document.write(`Side: ${this.side}<br>`);
    }
    public getArea(): number {
        return this.side * this.side;
    }
    public getPerimeter(): number {
        return 4 * this.side;
    }
}