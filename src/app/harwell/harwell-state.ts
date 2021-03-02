export class HarwellState {
    private data: Map<number, number> = new Map<number, number>();
    yes: boolean;
    finished: boolean;
    tapeNumber: number;
    printLayout: number;

    constructor() {
        for (let address: number = 0; address <= 99; address++) {
            this.data[address] = 0;
        }
        this.tapeNumber = 1;
    }

    get(address: number): number {
        return this.data[address];
    }

    add(address: number, value: number) {
        this.data[address] = this.truncate(this.data[address] + value);
    }

    subtract(address: number, value: number) {
        this.data[address] = this.truncate(this.data[address] - value);
    }

    multiply(addressA: number, addressB: number) {
        const product: number = this.get(addressA) * this.get(addressB);
        this.data[9] = this.truncate(product);
        this.clear(addressB);
    }

    divide(addressA: number, addressB: number) {
        const quotient: number = this.get(9) / this.get(addressA);
        const remainder: number = this.get(9) % this.get(addressA);
        this.data[addressB] = this.truncate(quotient);
        this.data[9] = this.truncate(remainder);
    }

    clear(address: number) {
        this.data[address] = 0;
    }

    truncate(value: number): number {
        return Number(value.toFixed(7));
    }
}
