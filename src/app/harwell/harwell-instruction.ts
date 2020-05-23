import { TapeEntry } from './tape/tape-entry';

export class HarwellInstruction implements TapeEntry {
    code: string;

    private constructor(code: string) {
        this.code = code;
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
}
