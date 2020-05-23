export class HarwellState {
    private data: {} = {};
    yes: boolean;
    finished: boolean;
    tapeNumber: number;
    printLayout: number;

    constructor() {
        for (let address = 1; address <= 99; address++) {
            this.data[String(address).padStart(2, '0')] = 0;
        }
        this.tapeNumber = 1;
    }

    get(address: string): number {
        return this.data[address];
    }

    add(address: string, value: number) {
        const newValue: number = this.data[address] + value;
        this.data[address] = Number(newValue.toFixed(7));
    }

    subtract(address: string, value: number) {
        const newValue: number = this.data[address] - value;
        this.data[address] = Number(newValue.toFixed(7));
    }

    multiply(addressA: string, addressB: string) {
        const product: number = this.get(addressA) * this.get(addressB);
        this.data["09"] = Number(product.toFixed(7));
        this.clear(addressB);
    }

    divide(addressA: string, addressB: string) {
        const quotient: number = this.get("09") / this.get(addressA);
        const remainder: number = this.get("09") % this.get(addressA);
        this.data[addressB] = Number(quotient.toFixed(7));
        this.data["09"] = Number(remainder.toFixed(7));
    }

    clear(address: string) {
        this.data[address] = 0;
    }
}
