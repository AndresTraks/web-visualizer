export class HarwellState {
    private data: Map<number, number> = new Map<number, number>();
    yes: boolean;
    finished: boolean;
    tapeNumber: number;
    printLayout: number;
    shiftPosition: number;

    constructor() {
        for (let address: number = 0; address <= 99; address++) {
            this.data.set(address, 0);
        }
        this.tapeNumber = 1;
        this.shiftPosition = 0;
    }

    get(address: number): number {
        const value = this.data.get(address);
        if (value === undefined) {
            throw Error('ERROR invalid address ' + address);
        }
        return value;
    }

    add(address: number, value: number): void {
        let sum: number = this.get(address) + value;
        if (this.shiftPosition !== 0) {
            sum *= 10**this.shiftPosition;
            this.shiftPosition = 0;
        }

        const mostSignificantDigits: number = Math.trunc(sum);
        this.data.set(address, mostSignificantDigits);

        if (address == 9) {
            const leastSignificantDigits: number = Math.round(Math.abs(sum * 100000000) % 100000000);
            this.data.set(8, leastSignificantDigits);
        }
    }

    subtract(address: number, value: number): void {
        let difference: number = this.get(address) - value;
        if (this.shiftPosition !== 0) {
            difference *= 10**this.shiftPosition;
            this.shiftPosition = 0;
        }

        const mostSignificantDigits: number = Math.trunc(difference);
        this.data.set(address, mostSignificantDigits);

        if (address == 9) {
            const leastSignificantDigits: number = Math.round(Math.abs(difference * 100000000) % 100000000);
            this.data.set(8, leastSignificantDigits);
        }
    }

    multiply(addressA: number, addressB: number): void {
        const product: number = this.get(addressA) * this.get(addressB);
        const leastSignificantDigits: number = Math.abs(product * 10) % 10000000;
        const mostSignificantDigits: number = Math.trunc(product / 10000000);
        this.data.set(8, leastSignificantDigits);
        this.data.set(9, mostSignificantDigits);
        this.clear(addressB);
    }

    divide(addressA: number, addressB: number): void {
        const divisior: number = this.get(addressA) / 10000000;
        const quotient: number = Math.trunc(this.get(9) / divisior);
        const remainder: number = Math.trunc(this.get(9) % divisior);
        this.data.set(addressB, quotient);
        this.data.set(9, remainder);
    }

    clear(address: number) {
        this.data.set(address, 0);
        if (address == 9) {
            this.data.set(8, 0);
        }
    }
}
