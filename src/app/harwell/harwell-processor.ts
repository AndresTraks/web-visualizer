import { HarwellState } from './harwell-state';
import { HarwellInstruction } from './harwell-instruction';
import { Tape } from './tape/tape';
import { Assembler } from './assembler';

export class HarwellProcessor {
    tapes: Map<number, Tape>;
    state: HarwellState;
    output: string[];

    constructor() {
        this.tapes = new Map<number, Tape>();
        this.state = new HarwellState();
        this.output = [""];
    }

    setProgram(programText: string): void {
        this.tapes = Assembler.assemble(programText);
    }

    get currentTape(): Tape {
        if (this.state.tapeNumber > 7) {
            return null;
        }
        return this.tapes[this.state.tapeNumber];
    }

    get currentBlockNumber(): number {
        return this.currentTape != null ? this.currentTape.blockNumber : null;
    }

    readNextEntry(): number {
        if (this.state.tapeNumber > 7) {
            const entry: number = this.state.get(this.state.tapeNumber);
            this.state.tapeNumber++;
            return entry;
        }
        return this.currentTape.read();
    }

    step(): void {
        if (this.state.finished) {
            return;
        }

        const instruction: number = this.readNextEntry();
        const operation: number = HarwellInstruction.getOperation(instruction);
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        switch (operation) {
            case 0:
                this.control(addressA, addressB);
                break;
            case 1:
                this.add(addressA, addressB);
                break;
            case 2:
                this.addAndClear(addressA, addressB);
                break;
            case 3:
                this.subtract(addressA, addressB);
                break;
            case 4:
                this.subtractAndClear(addressA, addressB);
                break;
            case 5:
                this.multiply(addressA, addressB);
                break;
            case 6:
                this.divide(addressA, addressB);
                break;
            default:
                throw new Error("Unknown order " + HarwellInstruction.getOrderCode(instruction));
        }
    }

    control(addressA: number, addressB: number): void {
        if (addressA >= 30 && addressA <= 39) {
            const blockNumber: number = addressA % 10;
            this.searchBlock(blockNumber, addressB);
            return;
        }
        if (addressA >= 50 && addressA <= 59) {
            if (this.state.yes) {
                const blockNumber: number = addressA % 10;
                this.searchBlock(blockNumber, addressB);
            }
            return;
        }
        if (addressA >= 81 && addressA <= 89) {
            this.state.shiftPosition = -(addressA % 10) + 2;
            return;
        }
        switch (addressA) {
            case 1:
                if (addressB === 0) {
                    this.finish();
                }
            case 11:
                this.testPositive(addressB);
                return;
            case 12:
                this.testNegative(addressB);
                return;
            case 21:
                this.transferControl(addressB);
                return;
            case 22:
                if (this.state.yes) {
                    this.transferControl(addressB);
                }
                return;
            case 73:
                this.printLayoutReference1();
                return;
            case 74:
                this.printLayoutReference2();
                return;
        }
        throw new Error("Unknown control instruction 0" + addressA + addressB);
    }

    add(addressA: number, addressB: number): void {
        const addend: number = this.read(addressA);
        if (addressB === 1) {
            this.print(addend);
            return;
        }
        this.state.add(addressB, addend);
    }

    addAndClear(addressA: number, addressB: number): void {
        this.add(addressA, addressB);
        this.state.clear(addressA);
    }

    subtract(addressA: number, addressB: number): void {
        const subtrahend: number = this.read(addressA);
        if (addressB === 1) {
            this.print(subtrahend);
            return;
        }
        this.state.subtract(addressB, subtrahend);
    }

    subtractAndClear(addressA: number, addressB: number): void {
        this.subtract(addressA, addressB);
        this.state.clear(addressA);
    }

    multiply(addressA: number, addressB: number) {
        this.state.multiply(addressA, addressB);
    }

    divide(addressA: number, addressB: number) {
        this.state.divide(addressA, addressB);
    }

    testPositive(address: number) {
        this.state.yes = this.read(address) > 0;
    }

    testNegative(address: number) {
        this.state.yes = this.read(address) < 0;
    }

    searchBlock(blockNumber: number, tapeNumber: number): void {
        this.tapes[tapeNumber].searchBlock(blockNumber);
    }

    transferControl(addressB: number): void {
        this.state.tapeNumber = addressB;
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
        const sign: string = value < 0 ? '' : '+';
        const valueString: string = sign + (value / 10000000).toFixed(7);
        if (this.state.printLayout === 1) {
            this.output[this.output.length - 1] += valueString + "   ";
        } else if (this.state.printLayout === 2) {
            this.output[this.output.length - 1] += valueString;
            this.output.push("");
        }
    }

    peek(address: number): number {
        if (address > 0 && address < 8) {
            return this.tapes[address].peekData();
        }
        return this.state.get(address);
    }

    peekAhead(address: number): number {
        // Used on disassembly when the next instruction has not yet been read,
        // but data following the instruction is an input operand.
        if (address > 0 && address < 8) {
            return this.tapes[address].peekAhead();
        }
        return this.peek(address);
    }

    read(address: number): number {
        if (address > 0 && address < 8) {
            return this.tapes[address].read();
        }
        return this.state.get(address);
    }
}
