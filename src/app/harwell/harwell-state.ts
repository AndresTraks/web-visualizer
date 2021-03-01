import { HarwellInstruction } from "./harwell-instruction";
import { TapeData } from "./tape/tape-data";
import { TapeEntry } from "./tape/tape-entry";

export class HarwellState {
    private data: Map<number, TapeEntry> = new Map<number, TapeEntry>();
    yes: boolean;
    finished: boolean;
    tapeNumber: number;
    printLayout: number;

    constructor() {
        for (let address = 0; address <= 99; address++) {
            this.data[String(address).padStart(2, '0')] = new TapeData(0);
        }
        this.tapeNumber = 1;
    }

    get(address: string): TapeEntry {
        return this.data[address];
    }

    add(address: string, value: TapeEntry) {
        if (value.toNumber() == 0) {
            return;
        }
        const entry: TapeEntry = this.data[address];
        if (entry as HarwellInstruction && value.toNumber() == 0) {
            this.data[address] = entry;
        } else {
            const newValue: number = entry.toNumber() + value.toNumber();
            this.data[address] = new TapeData(this.truncate(newValue));
        }
    }

    subtract(address: string, value: TapeEntry) {
        const newValue: number = this.data[address].toNumber() - value.toNumber();
        this.data[address] = new TapeData(this.truncate(newValue));
    }

    multiply(addressA: string, addressB: string) {
        const product: number = this.get(addressA).toNumber() * this.get(addressB).toNumber();
        this.data["09"] = new TapeData(this.truncate(product));
        this.clear(addressB);
    }

    divide(addressA: string, addressB: string) {
        const quotient: number = this.get("09").toNumber() / this.get(addressA).toNumber();
        const remainder: number = this.get("09").toNumber() % this.get(addressA).toNumber();
        this.data[addressB] = new TapeData(this.truncate(quotient));
        this.data["09"] = new TapeData(this.truncate(remainder));
    }

    clear(address: string) {
        this.data[address] = new TapeData(0);
    }

    truncate(value: number): number {
        return Number(value.toFixed(7));
    }
}
