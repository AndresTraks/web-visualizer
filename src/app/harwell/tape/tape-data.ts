import { TapeEntry } from './tape-entry';

export class TapeData implements TapeEntry{
    constructor(private value: number) {
    }

    valueOf(): number {
        return this.value;
    }
}
