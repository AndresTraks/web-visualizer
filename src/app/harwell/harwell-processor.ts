import { HarwellState } from './harwell-state';
import { HarwellInstruction } from './harwell-instruction';
import { Tape } from './tape/tape';
import { TapeEntry } from './tape/tape-entry';
import { Block } from './tape/block';

export class HarwellProcessor {
    tapes: Map<number, Tape>;
    state: HarwellState;
    output: string[];

    constructor() {
        this.tapes = new Map<number, Tape>();
        this.state = new HarwellState();
        this.output = [""];
    }

    setTape(tapeNumber: number, data: string): void {
        this.tapes[tapeNumber] = Tape.parse(data);
    }

    get currentTape(): Tape {
        return this.tapes[this.state.tapeNumber];
    }

    step(): void {
        if (this.state.finished) {
            return;
        }

        const entry: TapeEntry = this.currentTape.readEntry();
        if (entry instanceof Block) {
            return;
        }
        const instruction: HarwellInstruction = entry as HarwellInstruction;
        const operation: string = instruction.operation;
        switch (operation) {
            case '0':
                this.control(instruction.addressA, instruction.addressB);
                break;
            case '1':
                this.add(instruction.addressA, instruction.addressB);
                break;
            case '2':
                this.addAndClear(instruction.addressA, instruction.addressB);
                break;
            case '3':
                this.subtract(instruction.addressA, instruction.addressB);
                break;
            case '4':
                this.subtractAndClear(instruction.addressA, instruction.addressB);
                break;
            case '5':
                this.multiply(instruction.addressA, instruction.addressB);
                break;
            case '6':
                this.divide(instruction.addressA, instruction.addressB);
                break;
            default:
                throw new Error("Unknown instruction " + instruction.code);
        }
    }

    control(addressA: string, addressB: string): void {
        if (addressA[0] === '3') {
            const blockNumber: number = Number(addressA[1]);
            const tapeNumber: number = Number(addressB);
            this.searchBlock(blockNumber, tapeNumber);
            return;
        }
        if (addressA[0] === '5') {
            if (this.state.yes) {
                const blockNumber: number = Number(addressA[1]);
                const tapeNumber: number = Number(addressB);
                this.searchBlock(blockNumber, tapeNumber);
            }
            return;
        }
        switch (addressA) {
            case "01":
                if (addressB === "00") {
                    this.finish();
                }
            case "11":
                this.testPositive(addressB);
                return;
            case "12":
                this.testNegative(addressB);
                return;
            case "21":
                this.transferControl(addressB);
                return;
            case "22":
                if (this.state.yes) {
                    this.transferControl(addressB);
                }
                return;
            case "73":
                this.printLayoutReference1();
                return;
            case "74":
                this.printLayoutReference2();
                return;
        }
        throw new Error("Unknown control instruction 0" + addressA + addressB);
    }

    add(addressA: string, addressB: string): void {
        const addend: number = this.load(addressA);
        if (addressB === "01") {
            this.print(addend);
            return;
        }
        this.state.add(addressB, addend);
    }

    addAndClear(addressA: string, addressB: string): void {
        this.add(addressA, addressB);
        this.state.clear(addressA);
    }

    subtract(addressA: string, addressB: string): void {
        const subtrahend: number = this.load(addressA);
        if (addressB === "01") {
            this.print(subtrahend);
            return;
        }
        this.state.subtract(addressB, subtrahend);
    }

    subtractAndClear(addressA: string, addressB: string): void {
        this.subtract(addressA, addressB);
        this.state.clear(addressA);
    }

    multiply(addressA: string, addressB: string) {
        this.state.multiply(addressA, addressB);
    }

    divide(addressA: string, addressB: string) {
        this.state.divide(addressA, addressB);
    }

    testPositive(address: string) {
        this.state.yes = this.load(address) > 0;
    }

    testNegative(address: string) {
        this.state.yes = this.load(address) < 0;
    }

    searchBlock(blockNumber: number, tapeNumber: number): void {
        this.tapes[tapeNumber].searchBlock(blockNumber);
    }

    transferControl(addressB: string): void {
        this.state.tapeNumber = Number(addressB);
    }

    finish(): void {
        this.state.finished = true;
    }

    printLayoutReference1(): void {
        this.state.printLayout = 1;
    }

    printLayoutReference2(): void {
        this.state.printLayout = 2;
    }

    print(value: number): void {
        const sign: string = value < 0 ? '-' : '+';
        const valueString: string = sign + value.toFixed(7);
        if (this.state.printLayout === 1) {
            this.output[this.output.length - 1] += valueString + "   ";
        } else if (this.state.printLayout === 2) {
            this.output[this.output.length - 1] += valueString;
            this.output.push("");
        }
    }

    peek(address: string): number {
        if (address == "01") {
            return this.currentTape.peekData().valueOf();
        }
        return this.state.get(address);
    }

    peekTapeDataAfterInstruction(): number {
        return this.currentTape.peekTapeDataAfterInstruction().valueOf();
    }

    load(address: string): number {
        if (address == "01") {
            return this.currentTape.readData().valueOf();
        }
        return this.state.get(address);
    }
}