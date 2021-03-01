import { TapeEntry } from './tape/tape-entry';

export class HarwellInstruction implements TapeEntry {
    private constructor(public code: string) {
    }

    static fromCode(code: string): HarwellInstruction {
        const instruction = new HarwellInstruction(code);
        return instruction;
    }

    get operation(): string {
        return this.code[0];
    }

    get addressA(): string {
        return this.code.substr(1, 2);
    }

    get addressB(): string {
        return this.code.substr(3, 2);
    }

    toNumber(): number {
        return Number(this.code);
    }
}
