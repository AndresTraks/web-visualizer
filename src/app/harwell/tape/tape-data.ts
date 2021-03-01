import { TapeEntry } from './tape-entry';

export class TapeData implements TapeEntry {
    constructor(private value: number) {
    }

    toNumber(): number {
        return this.value;
    }
}
